export const runtime = 'edge';

export async function POST(req) {
  try {
    const data = await req.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Log submission
    const timestamp = new Date().toISOString();
    const leadEntry = {
      timestamp,
      ...data,
      userAgent: req.headers.get('user-agent'),
      referer: req.headers.get('referer'),
    };

    // Send email via Resend (if API key is set)
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'CareerIQ Contact <noreply@newth.ai>',
          to: ['oliver@newth.ai'],
          subject: `New CareerIQ Inquiry from ${data.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
            ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p>${data.message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted: ${timestamp}</small></p>
            <p><small>Source: ${data.source || 'website'}</small></p>
          `,
        }),
      });

      if (!resendResponse.ok) {
        console.error('Resend API error:', await resendResponse.text());
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you! We\'ll get back to you within 24 hours.',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Form submission error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process form submission' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

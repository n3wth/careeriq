'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Failed to join waitlist');

      setSuccess(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const { url } = await response.json();
      if (url) window.location.href = url;
    } catch (err) {
      setError('Failed to start checkout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-8">
        <div className="max-w-md text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 font-display mb-4">
            You're on the list!
          </h1>
          <p className="text-gray-600 mb-8">
            We'll notify you as soon as CareerIQ launches. Get ready to accelerate your career.
          </p>
          <Link href="/" className="text-gray-900 font-semibold hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-8 py-20">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 font-display mb-6">
            Join the Career Intelligence Revolution
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be among the first to experience AI-powered career intelligence. Launch March 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Waitlist Option */}
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8">
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Free Waitlist
            </div>
            <h2 className="text-3xl font-bold text-gray-900 font-display mb-4">
              Get Notified
            </h2>
            <p className="text-gray-600 mb-6">
              Join the waitlist and be the first to know when we launch. No commitment required.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-100 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Joining...
                  </span>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            </form>
          </div>

          {/* Founder's Access Option */}
          <div className="bg-white border-2 border-gray-900 rounded-3xl p-8 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wide">
              Limited Spots
            </div>
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Founder's Access
            </div>
            <h2 className="text-3xl font-bold text-gray-900 font-display mb-2">
              $99/month
            </h2>
            <p className="text-sm text-gray-600 mb-4">Lock in founding member pricing forever</p>
            <p className="text-gray-600 mb-6">
              Skip the line and secure lifetime founder pricing. Only 100 spots available.
            </p>
            <div className="space-y-3 mb-6 text-sm">
              {[
                'Immediate access on launch day',
                'Lifetime founder pricing ($99/mo forever)',
                'Priority feature requests',
                'Direct founder support',
                '30-day money-back guarantee'
              ].map((benefit, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gray-900 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <button
              onClick={handleCheckout}
              disabled={loading || !email}
              className="w-full bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </span>
              ) : (
                'Reserve Founder Spot'
              )}
            </button>
            <p className="text-xs text-gray-500 text-center mt-3">
              You won't be charged until we launch
            </p>
          </div>
        </div>

        {error && (
          <div className="max-w-md mx-auto bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
            {error}
          </div>
        )}

        <div className="text-center text-sm text-gray-500">
          <p>Questions? Email <a href="mailto:o@newth.ai" className="text-gray-900 hover:underline">o@newth.ai</a></p>
        </div>
      </div>
    </div>
  );
}

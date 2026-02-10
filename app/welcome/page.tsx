'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Sparkles } from 'lucide-react';

export default function WelcomePage() {
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const session = params.get('session_id');
    if (session) setSessionId(session);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-8">
      <div className="max-w-2xl text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <CheckCircle className="w-20 h-20 text-green-500" />
            <Sparkles className="w-8 h-8 text-yellow-500 absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-gray-900 font-display mb-6">
          Welcome to CareerIQ! 🎉
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          You've secured your Founder Access spot. You'll get immediate access when we launch in March 2026, 
          plus lifetime founder pricing at $99/month.
        </p>

        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">
            What happens next?
          </h2>
          <div className="space-y-4 text-left max-w-lg mx-auto">
            {[
              { step: '1', text: 'You will receive a welcome email with next steps' },
              { step: '2', text: 'We will send product updates and launch countdown' },
              { step: '3', text: 'Get early access on launch day (March 2026)' },
              { step: '4', text: 'Start your 30-day free trial immediately' },
            ].map((item) => (
              <div key={item.step} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                  {item.step}
                </div>
                <p className="text-gray-700 pt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <p className="text-sm text-gray-600 mb-3">
            <strong>Note:</strong> You won't be charged until we launch. Your 30-day trial starts on launch day.
          </p>
          <p className="text-sm text-gray-500">
            Questions? Email us at <a href="mailto:o@newth.ai" className="text-gray-900 hover:underline font-semibold">o@newth.ai</a>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all"
          >
            Back to Home
          </Link>
          <Link 
            href="/dashboard" 
            className="inline-block bg-gray-100 text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all"
          >
            Preview Dashboard
          </Link>
        </div>

        {sessionId && (
          <p className="text-xs text-gray-400 mt-8">Session: {sessionId.slice(0, 20)}...</p>
        )}
      </div>
    </div>
  );
}

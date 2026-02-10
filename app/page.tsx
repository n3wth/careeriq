import Link from 'next/link';
import { CheckCircle, Target, TrendingUp, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-8 pt-32 pb-20 text-center border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Career Intelligence
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-display tracking-tight leading-tight mb-6">
            Get Promoted Faster with Data-Driven Career Strategy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Stop guessing where you stand. Track your career progress, identify skill gaps, and build the promotion case your manager can't ignore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/waitlist" 
              className="inline-block bg-gray-900 text-white px-10 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all transform hover:-translate-y-0.5"
            >
              Start Your Free Trial
            </Link>
            <Link 
              href="#features" 
              className="inline-block bg-gray-100 text-gray-900 px-10 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display text-center mb-12">
            You're working hard, but are you working on the right things?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Promotion criteria unclear', desc: "You don't know what your manager actually expects for the next level." },
              { title: 'Impact not documented', desc: 'Six months of great work forgotten because you didn\'t write it down.' },
              { title: 'Skill gaps hidden', desc: "You're missing critical skills but won't know until promo review." },
            ].map((problem, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 font-display text-center mb-16">
            Your Career Command Center
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-12 h-12 text-gray-900" />,
                title: 'Career Progress Tracking',
                desc: 'Document your wins, impact, and growth in one organized system.',
                features: ['Impact logging with metrics', 'Project timeline visualization', 'Skills development tracking', '1-on-1 conversation history']
              },
              {
                icon: <Target className="w-12 h-12 text-gray-900" />,
                title: 'Promotion Readiness Score',
                desc: 'AI-powered assessment of your readiness for the next level.',
                features: ['Level expectations analysis', 'Gap identification', 'Actionable improvement plan', 'Timeline projections']
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-gray-900" />,
                title: 'Skill Gap Analysis',
                desc: 'Know exactly what skills you need to develop for promotion.',
                features: ['Role-specific competencies', 'Learning resource recommendations', 'Progress benchmarking', 'Peer comparison insights']
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 hover:-translate-y-1 transition-transform">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-display">{feature.title}</h3>
                <p className="text-gray-600 mb-5">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.features.map((f, j) => (
                    <li key={j} className="text-sm text-gray-600 pl-6 relative">
                      <span className="absolute left-0 text-gray-400">–</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-8 py-20 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-6xl font-bold text-gray-900 font-display mb-4">6 Months</div>
          <p className="text-lg text-gray-600">
            Average time to promotion for users who track consistently vs 18 months industry average
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 font-display text-center mb-16">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Free',
                price: '$0',
                period: 'Forever free',
                desc: 'Perfect for getting started with career tracking.',
                features: ['Basic impact logging', 'Simple skill tracking', 'Manual assessments', 'Community support'],
                cta: 'Start Free',
                link: '/signup',
                featured: false
              },
              {
                name: 'Pro',
                price: '$99',
                period: 'Billed monthly',
                desc: 'Full career intelligence for ambitious professionals.',
                features: ['AI-powered promotion readiness', 'Skill gap analysis', 'Learning recommendations', 'Timeline projections', '1-on-1 prep templates', 'Export promo packets', 'Priority support'],
                cta: 'Start Pro Trial',
                link: '/waitlist',
                featured: true,
                badge: 'Most Popular'
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'For teams',
                desc: 'Empower your entire team with career development tools.',
                features: ['Team dashboards', 'Manager collaboration', 'Custom competency models', 'API access', 'SSO integration', 'Dedicated support'],
                cta: 'Contact Sales',
                link: 'mailto:o@newth.ai',
                featured: false
              },
            ].map((plan, i) => (
              <div key={i} className={`bg-white border-2 rounded-3xl p-8 relative ${plan.featured ? 'border-gray-900' : 'border-gray-200'}`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wide">
                    {plan.badge}
                  </div>
                )}
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{plan.name}</div>
                <div className="text-5xl font-bold text-gray-900 font-display mb-2">
                  {plan.price}
                  {plan.price.startsWith('$') && plan.price !== '$0' && plan.price !== 'Custom' && (
                    <span className="text-xl text-gray-500">/mo</span>
                  )}
                </div>
                <div className="text-gray-600 mb-6">{plan.period}</div>
                <p className="text-gray-600 mb-8 pb-8 border-b border-gray-100">{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-sm text-gray-700 pl-6 relative">
                      <span className="absolute left-0 text-gray-900 font-bold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={plan.link}
                  className={`block text-center px-6 py-3 rounded-xl font-semibold transition-all ${
                    plan.featured 
                      ? 'bg-gray-900 text-white hover:bg-gray-800' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 bg-gray-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white font-display mb-5">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Start your free trial today. No credit card required.
          </p>
          <Link 
            href="/waitlist"
            className="inline-block bg-white text-gray-900 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-gray-100 text-center">
        <p className="text-gray-600 mb-2">Career Intelligence System by Oliver Newth</p>
        <p className="text-gray-500 text-sm mb-4">Built by a Google PM who knows the promotion game</p>
        <div className="flex justify-center gap-6 text-sm text-gray-500">
          <a href="https://n3wth.com" className="hover:text-gray-900">About</a>
          <a href="mailto:o@newth.ai" className="hover:text-gray-900">Contact</a>
          <a href="/privacy" className="hover:text-gray-900">Privacy</a>
          <a href="/terms" className="hover:text-gray-900">Terms</a>
        </div>
      </footer>
    </div>
  );
}

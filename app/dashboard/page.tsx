'use client';

import Link from 'next/link';
import { BarChart3, BookOpen, Target, TrendingUp, Plus, CheckCircle } from 'lucide-react';

export default function DashboardPage() {
  // Mock data for MVP
  const stats = {
    promotionScore: 72,
    skillsTracked: 8,
    impactsLogged: 12,
    daysToReview: 45,
  };

  const recentImpacts = [
    { id: 1, title: 'Led Q4 planning initiative', date: '2026-02-08', impact: 'high' },
    { id: 2, title: 'Mentored 2 junior engineers', date: '2026-02-05', impact: 'medium' },
    { id: 3, title: 'Shipped new feature ahead of schedule', date: '2026-02-01', impact: 'high' },
  ];

  const skillGaps = [
    { skill: 'Technical Leadership', current: 70, target: 85 },
    { skill: 'Strategic Planning', current: 60, target: 80 },
    { skill: 'Cross-team Collaboration', current: 75, target: 90 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold font-display">
            CareerIQ
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/dashboard" className="text-gray-900 font-semibold">Dashboard</Link>
            <Link href="/dashboard/impacts" className="text-gray-600 hover:text-gray-900">Impacts</Link>
            <Link href="/dashboard/skills" className="text-gray-600 hover:text-gray-900">Skills</Link>
            <Link href="/dashboard/goals" className="text-gray-600 hover:text-gray-900">Goals</Link>
            <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-8 mb-8 text-white">
          <h1 className="text-3xl font-bold font-display mb-2">Welcome back! 👋</h1>
          <p className="text-gray-300">You're on track for your next promotion. Keep up the great work.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-600">Promotion Score</div>
              <Target className="w-5 h-5 text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{stats.promotionScore}%</div>
            <div className="text-xs text-green-600 mt-1">↑ 8% this month</div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-600">Skills Tracked</div>
              <BookOpen className="w-5 h-5 text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{stats.skillsTracked}</div>
            <div className="text-xs text-gray-600 mt-1">3 gaps identified</div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-600">Impacts Logged</div>
              <TrendingUp className="w-5 h-5 text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{stats.impactsLogged}</div>
            <div className="text-xs text-blue-600 mt-1">4 this month</div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-600">Days to Review</div>
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{stats.daysToReview}</div>
            <div className="text-xs text-gray-600 mt-1">Q1 2026</div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Recent Impacts */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold font-display">Recent Impacts</h2>
              <button className="flex items-center text-sm text-gray-900 font-semibold hover:underline">
                <Plus className="w-4 h-4 mr-1" />
                Add Impact
              </button>
            </div>
            <div className="space-y-4">
              {recentImpacts.map((impact) => (
                <div key={impact.id} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{impact.title}</div>
                    <div className="text-sm text-gray-500 mt-1">{impact.date}</div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    impact.impact === 'high' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {impact.impact}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Gaps */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold font-display">Skill Gap Analysis</h2>
              <Link href="/dashboard/skills" className="text-sm text-gray-900 font-semibold hover:underline">
                View All
              </Link>
            </div>
            <div className="space-y-6">
              {skillGaps.map((gap, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-900">{gap.skill}</span>
                    <span className="text-gray-600">{gap.current}% / {gap.target}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-900 rounded-full" style={{ width: `${(gap.current / gap.target) * 100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Items */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mt-8">
          <h2 className="text-xl font-bold font-display mb-4">Recommended Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Log your Q4 wins', desc: 'Document major achievements from last quarter', cta: 'Add Impact' },
              { title: 'Schedule 1-on-1 prep', desc: 'Prepare for your next check-in with manager', cta: 'Prepare' },
              { title: 'Complete skill assessment', desc: 'Update your technical leadership score', cta: 'Assess' },
            ].map((action, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5 hover:border-gray-900 transition-colors cursor-pointer">
                <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{action.desc}</p>
                <button className="text-sm font-semibold text-gray-900 hover:underline">
                  {action.cta} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

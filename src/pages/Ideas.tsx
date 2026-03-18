import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ideas as allIdeas, getIdeasByCategory } from '../data/ideas'

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'quick', label: 'Quick Start 🟢' },
  { id: 'medium', label: 'Medium Build 🟡' },
  { id: 'skillup', label: 'Skill Up 🔵' },
]

const riskColors: Record<string, string> = {
  safe: 'bg-green-100 text-green-700',
  low: 'bg-yellow-100 text-yellow-700',
  school: 'bg-red-100 text-red-700',
}

export default function Ideas() {
  const [activeTab, setActiveTab] = useState('all')
  const filtered = getIdeasByCategory(activeTab).sort((a, b) =>
    (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
  )

  return (
    <div>
      {/* Header */}
      <div className="px-4 pt-8 pb-4 bg-white sticky top-0 z-10 border-b border-gray-100">
        <h1 className="text-2xl font-black mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {allIdeas.length} Ways to Make Money 💡
        </h1>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#FF2D78] text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <div className="px-4 pt-3 pb-2">
        <p className="text-sm text-gray-500 font-semibold">{filtered.length} ideas</p>
      </div>

      {/* Grid */}
      <div className="px-4 pb-6">
        <div className="grid grid-cols-1 gap-4">
          {filtered.map(idea => (
            <Link
              key={idea.id}
              to={`/ideas/${idea.id}`}
              className="card-hover block rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="h-2 w-full" style={{ background: idea.bgGradient }} />
              <div className="p-4 bg-white">
                <div className="flex items-start gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                    style={{ background: idea.bgGradient }}
                  >
                    {idea.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <div className="font-black text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>{idea.name}</div>
                      {idea.isNew && (
                        <span className="bg-[#FF2D78] text-white text-[10px] font-black px-2 py-0.5 rounded-full shrink-0 animate-pulse">NEW</span>
                      )}
                    </div>
                    <div className="text-gray-500 text-sm mt-0.5 leading-snug">{idea.tagline}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded-full">
                    💰 {idea.startupCost}
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded-full">
                    ⏱ {idea.timeToFirstSale}
                  </span>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${riskColors[idea.risk]}`}>
                    {idea.riskLabel}
                  </span>
                </div>
                <div className="mt-3 text-[#FF2D78] font-bold text-sm">Explore This Idea →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ideas as allIdeas } from '../data/ideas'
import type { Idea } from '../data/ideas'

const categories = [
  {
    id: 'quick',
    label: 'Quick Start',
    sublabel: 'First sale in days, not weeks',
    emoji: '⚡',
    color: '#00E5A0',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    pill: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 'medium',
    label: 'Medium Build',
    sublabel: 'A little setup, bigger payoff',
    emoji: '🔥',
    color: '#FF8C00',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    pill: 'bg-orange-100 text-orange-700',
  },
  {
    id: 'skillup',
    label: 'Skill Up',
    sublabel: 'Learn something, earn more',
    emoji: '🚀',
    color: '#8B5CF6',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    pill: 'bg-violet-100 text-violet-700',
  },
]

const tabs = [
  { id: 'all', label: 'All Ideas' },
  { id: 'quick', label: '⚡ Quick' },
  { id: 'medium', label: '🔥 Medium' },
  { id: 'skillup', label: '🚀 Skill Up' },
]

function IdeaCard({ idea, accentColor }: { idea: Idea; accentColor: string }) {
  return (
    <Link
      to={`/ideas/${idea.id}`}
      className="flex items-center gap-3 py-3 px-3 rounded-2xl bg-white active:bg-gray-50 transition-colors border border-gray-100 shadow-sm"
    >
      {/* Emoji bubble */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
        style={{ background: idea.bgGradient }}
      >
        {idea.emoji}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-black text-sm text-gray-900 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {idea.name}
          </span>
          {idea.isNew && (
            <span
              className="text-[9px] font-black px-1.5 py-0.5 rounded-full text-white shrink-0"
              style={{ background: accentColor }}
            >
              NEW
            </span>
          )}
        </div>
        <div className="text-gray-400 text-xs mt-0.5 truncate">{idea.tagline}</div>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-xs font-bold text-gray-500">💰 {idea.startupCost}</span>
          <span className="text-gray-300">·</span>
          <span className="text-xs font-bold text-gray-500">⏱ {idea.timeToFirstSale}</span>
        </div>
      </div>

      {/* Arrow */}
      <div className="shrink-0 text-gray-300 text-lg">›</div>
    </Link>
  )
}

export default function Ideas() {
  const [activeTab, setActiveTab] = useState('all')

  // Sort: new first within each group
  const sorted = [...allIdeas].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
  const newIdeas = sorted.filter(i => i.isNew)
  const filtered = activeTab === 'all' ? sorted : sorted.filter(i => i.category === activeTab)

  return (
    <div className="pb-8">
      {/* Header */}
      <div className="px-4 pt-8 pb-3 bg-white sticky top-0 z-10 border-b border-gray-100">
        <h1 className="text-2xl font-black mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {allIdeas.length} Ways to Make Money 💡
        </h1>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* NEW drops section — only on All tab */}
      {activeTab === 'all' && newIdeas.length > 0 && (
        <div className="px-4 pt-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-base font-black text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
              ✨ Just Added
            </span>
            <span className="bg-[#FF2D78] text-white text-[10px] font-black px-2 py-0.5 rounded-full">
              {newIdeas.length} new
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {newIdeas.map(idea => (
              <IdeaCard key={idea.id} idea={idea} accentColor="#FF2D78" />
            ))}
          </div>
        </div>
      )}

      {/* Grouped by category — All tab */}
      {activeTab === 'all' ? (
        <div className="px-4 pt-6 flex flex-col gap-6">
          {categories.map(cat => {
            const catIdeas = sorted.filter(i => i.category === cat.id && !i.isNew)
            if (catIdeas.length === 0) return null
            return (
              <div key={cat.id}>
                {/* Section header */}
                <div className={`flex items-center gap-3 px-3 py-2.5 rounded-xl mb-3 ${cat.bg} border ${cat.border}`}>
                  <span className="text-xl">{cat.emoji}</span>
                  <div>
                    <div className="font-black text-sm text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {cat.label}
                    </div>
                    <div className="text-xs text-gray-500 font-semibold">{cat.sublabel}</div>
                  </div>
                  <span className={`ml-auto text-xs font-black px-2 py-0.5 rounded-full ${cat.pill}`}>
                    {catIdeas.length}
                  </span>
                </div>
                {/* Cards */}
                <div className="flex flex-col gap-2">
                  {catIdeas.map(idea => (
                    <IdeaCard key={idea.id} idea={idea} accentColor={cat.color} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        /* Filtered tab — flat list */
        <div className="px-4 pt-4 flex flex-col gap-2">
          {filtered.length === 0 ? (
            <p className="text-gray-400 text-sm text-center py-10">No ideas in this category yet.</p>
          ) : (
            filtered.map(idea => {
              const cat = categories.find(c => c.id === idea.category)
              return <IdeaCard key={idea.id} idea={idea} accentColor={cat?.color ?? '#FF2D78'} />
            })
          )}
        </div>
      )}
    </div>
  )
}

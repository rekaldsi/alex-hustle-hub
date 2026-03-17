import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getIdeaById } from '../data/ideas'

export default function IdeaDetail() {
  const { id } = useParams<{ id: string }>()
  const idea = getIdeaById(id || '')
  const [units, setUnits] = useState(10)
  const [costPerItem, setCostPerItem] = useState(idea?.defaultCostPerItem ?? 5)
  const [sellPrice, setSellPrice] = useState(idea?.defaultSellPrice ?? 15)

  if (!idea) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-5xl mb-4">🤔</div>
        <h2 className="text-xl font-black mb-2">Idea not found</h2>
        <Link to="/ideas" className="text-[#FF2D78] font-bold">← Back to Ideas</Link>
      </div>
    )
  }

  const profitPerUnit = sellPrice - costPerItem
  const totalProfit = profitPerUnit * units
  const margin = sellPrice > 0 ? Math.round((profitPerUnit / sellPrice) * 100) : 0
  const salesToGoal = profitPerUnit > 0 ? Math.ceil(100 / profitPerUnit) : 0

  return (
    <div className="flex flex-col">
      {/* Back */}
      <div className="px-4 pt-4">
        <Link to="/ideas" className="text-gray-500 font-bold text-sm flex items-center gap-1">
          ← All Ideas
        </Link>
      </div>

      {/* Hero */}
      <div className="mx-4 mt-3 rounded-2xl p-6 text-white" style={{ background: idea.bgGradient }}>
        <div className="text-5xl mb-3">{idea.emoji}</div>
        <h1 className="text-2xl font-black mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{idea.name}</h1>
        <p className="text-white/90 text-sm mb-4">{idea.tagline}</p>
        <div className="flex gap-2 flex-wrap">
          <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-bold">💰 {idea.startupCost}</div>
          <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-bold">⏱ {idea.timeToFirstSale}</div>
          <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-bold">{idea.riskLabel}</div>
        </div>
      </div>

      {/* What It Is */}
      <div className="mx-4 mt-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h2 className="font-black text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>What It Is 📖</h2>
        <p className="text-gray-600 text-sm leading-relaxed">{idea.whatItIs}</p>
      </div>

      {/* What You Need */}
      <div className="mx-4 mt-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h2 className="font-black text-lg mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>What You Need 🛒</h2>
        <div className="flex flex-col gap-2">
          {idea.whatYouNeed.map((item, i) => (
            <div key={i} className="flex items-start justify-between gap-3 py-2 border-b border-gray-50 last:border-0">
              <span className="text-gray-700 text-sm font-semibold flex-1">{item.item}</span>
              <span className="text-[#FF2D78] font-black text-sm shrink-0">{item.cost}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="mx-4 mt-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h2 className="font-black text-lg mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Start This Week 🚀</h2>
        <div className="flex flex-col gap-3">
          {idea.steps.map((step, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-black shrink-0 mt-0.5"
                style={{ background: idea.bgGradient }}
              >
                {i + 1}
              </div>
              <p className="text-gray-700 text-sm leading-snug flex-1">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Profit Calculator */}
      <div className="mx-4 mt-4 rounded-2xl p-5 shadow-sm" style={{ background: 'linear-gradient(135deg, #0d0d0d, #1a1a2e)' }}>
        <h2 className="font-black text-lg text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Profit Calculator 🧮</h2>
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1 block">Cost per item ($)</label>
            <input
              type="number"
              value={costPerItem}
              onChange={e => setCostPerItem(Number(e.target.value))}
              className="w-full bg-white/10 text-white border border-white/20 rounded-xl px-4 py-2 text-base font-bold focus:outline-none focus:border-[#FF2D78]"
            />
          </div>
          <div>
            <label className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1 block">Sell price ($)</label>
            <input
              type="number"
              value={sellPrice}
              onChange={e => setSellPrice(Number(e.target.value))}
              className="w-full bg-white/10 text-white border border-white/20 rounded-xl px-4 py-2 text-base font-bold focus:outline-none focus:border-[#FF2D78]"
            />
          </div>
          <div>
            <label className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1 block">Units sold</label>
            <input
              type="number"
              value={units}
              onChange={e => setUnits(Number(e.target.value))}
              className="w-full bg-white/10 text-white border border-white/20 rounded-xl px-4 py-2 text-base font-bold focus:outline-none focus:border-[#FF2D78]"
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-2xl font-black text-[#FF2D78]" style={{ fontFamily: 'Poppins, sans-serif' }}>${totalProfit.toFixed(0)}</div>
            <div className="text-gray-400 text-xs font-bold">Total Profit</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-2xl font-black text-[#00E5A0]" style={{ fontFamily: 'Poppins, sans-serif' }}>{margin}%</div>
            <div className="text-gray-400 text-xs font-bold">Profit Margin</div>
          </div>
        </div>
        {salesToGoal > 0 && (
          <div className="mt-3 bg-[#FFE600]/20 rounded-xl p-3 text-center">
            <div className="text-[#FFE600] font-black text-sm">
              🎯 You need <span className="text-lg">{salesToGoal} sales</span> to hit $100
            </div>
          </div>
        )}
      </div>

      {/* Pro Tip */}
      <div className="mx-4 mt-4 rounded-2xl p-5" style={{ background: 'linear-gradient(135deg, #FFE600, #ff9500)' }}>
        <h2 className="font-black text-base mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>💡 Pro Tip</h2>
        <p className="text-gray-800 text-sm leading-relaxed font-semibold">{idea.proTip}</p>
      </div>

      {/* Stay Safe */}
      <div className="mx-4 mt-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h2 className="font-black text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Stay Safe 🛡️</h2>
        <p className="text-gray-600 text-sm leading-relaxed">{idea.stayafe}</p>
      </div>

      {/* Share */}
      <div className="mx-4 mt-4 mb-6 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h2 className="font-black text-lg mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Share With a Friend 📤</h2>
        <div className="bg-gray-50 rounded-xl p-3 mb-3">
          <p className="text-gray-600 text-sm italic">"{idea.shareText}"</p>
        </div>
        <button
          onClick={() => navigator.clipboard?.writeText(idea.shareText)}
          className="w-full py-2.5 rounded-xl font-bold text-white text-sm active:scale-95 transition-transform"
          style={{ background: idea.bgGradient }}
        >
          Copy to Clipboard
        </button>
      </div>
    </div>
  )
}

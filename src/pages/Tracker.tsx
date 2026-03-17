import { useState, useEffect } from 'react'

interface Sale {
  id: string
  item: string
  sellPrice: number
  cost: number
  platform: string
  date: string
}

const STORAGE_KEY = 'alex-sales-tracker'
const DEFAULT_GOAL = 100

export default function Tracker() {
  const [sales, setSales] = useState<Sale[]>([])
  const [goal, setGoal] = useState(DEFAULT_GOAL)
  const [form, setForm] = useState({ item: '', sellPrice: '', cost: '', platform: '', date: '' })
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      setSales(parsed.sales || [])
      setGoal(parsed.goal || DEFAULT_GOAL)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ sales, goal }))
  }, [sales, goal])

  const totalRevenue = sales.reduce((sum, s) => sum + s.sellPrice, 0)
  const totalCost = sales.reduce((sum, s) => sum + s.cost, 0)
  const totalProfit = totalRevenue - totalCost
  const progress = Math.min(Math.round((totalProfit / goal) * 100), 100)

  function addSale() {
    if (!form.item || !form.sellPrice) return
    const newSale: Sale = {
      id: Date.now().toString(),
      item: form.item,
      sellPrice: parseFloat(form.sellPrice) || 0,
      cost: parseFloat(form.cost) || 0,
      platform: form.platform || 'Unknown',
      date: form.date || new Date().toISOString().split('T')[0],
    }
    setSales(prev => [newSale, ...prev])
    setForm({ item: '', sellPrice: '', cost: '', platform: '', date: '' })
    setShowForm(false)
  }

  function deleteSale(id: string) {
    setSales(prev => prev.filter(s => s.id !== id))
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="animated-gradient px-4 pt-8 pb-6 text-white">
        <h1 className="text-2xl font-black mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Income Tracker 📊</h1>
        <p className="text-white/90 text-sm font-semibold">Track every sale. Watch it grow.</p>
      </div>

      {/* Totals */}
      <div className="mx-4 -mt-3 bg-white rounded-2xl shadow-md p-4 border border-gray-100">
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <div className="text-xl font-black text-[#00E5A0]" style={{ fontFamily: 'Poppins, sans-serif' }}>${totalRevenue.toFixed(0)}</div>
            <div className="text-xs text-gray-500 font-bold">Revenue</div>
          </div>
          <div className="text-center border-x border-gray-100">
            <div className="text-xl font-black text-gray-500" style={{ fontFamily: 'Poppins, sans-serif' }}>${totalCost.toFixed(0)}</div>
            <div className="text-xs text-gray-500 font-bold">Cost</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-black text-[#FF2D78]" style={{ fontFamily: 'Poppins, sans-serif' }}>${totalProfit.toFixed(0)}</div>
            <div className="text-xs text-gray-500 font-bold">Profit</div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mx-4 mt-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <div className="font-black text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
            🎯 Goal: ${goal}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={goal}
              onChange={e => setGoal(Number(e.target.value))}
              className="w-16 border border-gray-200 rounded-lg px-2 py-1 text-sm font-bold text-center focus:outline-none focus:border-[#FF2D78]"
            />
          </div>
        </div>
        <div className="bg-gray-100 rounded-full h-4 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #FF2D78, #8B5CF6)',
            }}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-xs text-gray-400 font-bold">${totalProfit.toFixed(0)} profit</span>
          <span className="text-xs text-[#FF2D78] font-bold">{progress}%</span>
        </div>
        {totalProfit >= goal && (
          <div className="mt-2 text-center text-base font-black text-[#00E5A0]">
            🎉 You hit your goal!! Let's go!!
          </div>
        )}
      </div>

      {/* Add Sale Button */}
      <div className="mx-4 mt-4">
        <button
          onClick={() => setShowForm(!showForm)}
          className="w-full py-3 rounded-2xl font-black text-white text-base active:scale-95 transition-transform"
          style={{ background: 'linear-gradient(135deg, #FF2D78, #8B5CF6)' }}
        >
          {showForm ? '✕ Cancel' : '+ Add a Sale'}
        </button>
      </div>

      {/* Add Sale Form */}
      {showForm && (
        <div className="mx-4 mt-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <h3 className="font-black text-base mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>New Sale</h3>
          <div className="flex flex-col gap-3">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">Item Name *</label>
              <input
                type="text"
                placeholder="e.g. Levi's 501 jeans"
                value={form.item}
                onChange={e => setForm(p => ({ ...p, item: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#FF2D78]"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">Sell Price ($) *</label>
                <input
                  type="number"
                  placeholder="45"
                  value={form.sellPrice}
                  onChange={e => setForm(p => ({ ...p, sellPrice: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#FF2D78]"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">Your Cost ($)</label>
                <input
                  type="number"
                  placeholder="8"
                  value={form.cost}
                  onChange={e => setForm(p => ({ ...p, cost: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#FF2D78]"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">Platform</label>
                <select
                  value={form.platform}
                  onChange={e => setForm(p => ({ ...p, platform: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#FF2D78] bg-white"
                >
                  <option value="">Select…</option>
                  <option>Depop</option>
                  <option>Vinted</option>
                  <option>Poshmark</option>
                  <option>eBay</option>
                  <option>Mercari</option>
                  <option>Instagram DM</option>
                  <option>In person</option>
                  <option>Etsy</option>
                  <option>Gumroad</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={e => setForm(p => ({ ...p, date: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#FF2D78]"
                />
              </div>
            </div>
            <button
              onClick={addSale}
              className="w-full py-3 rounded-xl font-black text-white active:scale-95 transition-transform"
              style={{ background: 'linear-gradient(135deg, #00E5A0, #0099ff)' }}
            >
              Save Sale ✓
            </button>
          </div>
        </div>
      )}

      {/* Sales Log */}
      <div className="mx-4 mt-4 mb-6">
        <h3 className="font-black text-base mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Sales Log {sales.length > 0 && `(${sales.length})`}
        </h3>
        {sales.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            <div className="text-4xl mb-3">📭</div>
            <div className="font-bold">No sales yet!</div>
            <div className="text-sm">Add your first sale above ↑</div>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {sales.map(sale => (
              <div key={sale.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <div className="font-black text-sm truncate" style={{ fontFamily: 'Poppins, sans-serif' }}>{sale.item}</div>
                  <div className="text-xs text-gray-500 font-semibold mt-0.5">{sale.platform} · {sale.date}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[#00E5A0] font-black text-sm">+${sale.sellPrice.toFixed(0)}</div>
                  <div className="text-[#FF2D78] font-bold text-xs">
                    ${(sale.sellPrice - sale.cost).toFixed(0)} profit
                  </div>
                </div>
                <button
                  onClick={() => deleteSale(sale.id)}
                  className="text-gray-300 hover:text-red-400 text-lg ml-1 transition-colors"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

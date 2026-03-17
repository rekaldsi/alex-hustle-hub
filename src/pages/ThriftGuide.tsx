import { useState } from 'react'
import { getBrandsByCategory } from '../data/thriftBrands'

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'band-tees', label: 'Band Tees 🎸' },
  { id: 'denim', label: 'Denim 👖' },
  { id: 'streetwear', label: 'Streetwear 🏍️' },
  { id: 'character-tees', label: 'Character Tees 🐭' },
  { id: 'avoid', label: 'What to Avoid 🚫' },
]

const platforms = [
  { name: 'Vinted', fee: 'No seller fees', best: 'Everyday clothes, denim', speed: '3–10 days' },
  { name: 'Depop', fee: '~10% fee', best: 'Vintage, streetwear, teen items', speed: '1–7 days' },
  { name: 'Poshmark', fee: '20% fee', best: 'Brands, accessories', speed: '3–14 days' },
  { name: 'Mercari', fee: '10% fee', best: 'Variety, electronics', speed: '3–10 days' },
  { name: 'eBay', fee: '13.25% fee', best: 'Vintage, rare, band tees', speed: '1–14 days' },
]

export default function ThriftGuide() {
  const [activeTab, setActiveTab] = useState('all')
  const filtered = getBrandsByCategory(activeTab)

  return (
    <div>
      {/* Hero */}
      <div className="px-4 pt-8 pb-6" style={{ background: 'linear-gradient(135deg, #00E5A0, #0099ff)' }}>
        <div className="text-4xl mb-2">🛍️</div>
        <h1 className="text-2xl font-black text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Your Secret Weapon at Goodwill
        </h1>
        <p className="text-white/90 text-sm font-semibold">
          Know exactly what to look for before you go. This is your edge.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="px-4 pt-4 bg-white sticky top-0 z-10 border-b border-gray-100 pb-3">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#00E5A0] text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Brand Cards */}
      <div className="px-4 pt-4 flex flex-col gap-4">
        {filtered.map(brand => (
          <div key={brand.id} className={`rounded-2xl overflow-hidden shadow-sm border ${brand.category === 'avoid' ? 'border-red-200' : 'border-gray-100'}`}>
            <div
              className="px-4 py-3 flex items-center gap-3"
              style={{
                background: brand.category === 'avoid'
                  ? 'linear-gradient(135deg, #fee2e2, #fecaca)'
                  : 'linear-gradient(135deg, #00E5A0, #0099ff)',
              }}
            >
              <div className="text-3xl">{brand.emoji}</div>
              <div>
                <div className="font-black text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: brand.category === 'avoid' ? '#991b1b' : 'white' }}>
                  {brand.name}
                </div>
                <div className="text-xs font-semibold" style={{ color: brand.category === 'avoid' ? '#dc2626' : 'rgba(255,255,255,0.8)' }}>
                  Era: {brand.era}
                </div>
              </div>
            </div>
            <div className="bg-white p-4 flex flex-col gap-3">
              <div>
                <div className="text-xs font-black text-gray-400 uppercase tracking-wider mb-1">What to Look For</div>
                <p className="text-gray-700 text-sm leading-relaxed">{brand.whatToLookFor}</p>
              </div>
              {brand.category !== 'avoid' && (
                <div className="flex gap-3">
                  <div className="flex-1 bg-green-50 rounded-xl p-3 text-center">
                    <div className="text-green-700 font-black text-sm">{brand.buyPrice}</div>
                    <div className="text-green-600 text-xs font-bold">Buy at</div>
                  </div>
                  <div className="flex-1 bg-[#FF2D78]/10 rounded-xl p-3 text-center">
                    <div className="text-[#FF2D78] font-black text-sm">{brand.sellPrice}</div>
                    <div className="text-[#FF2D78]/70 text-xs font-bold">Resell for</div>
                  </div>
                </div>
              )}
              <div className="bg-[#FFE600]/20 rounded-xl p-3">
                <div className="text-xs font-black text-yellow-600 uppercase tracking-wider mb-1">🔥 Hot Tip</div>
                <p className="text-gray-700 text-sm leading-relaxed">{brand.hotTip}</p>
              </div>
              {brand.category !== 'avoid' && (
                <div>
                  <div className="text-xs font-black text-gray-400 uppercase tracking-wider mb-1">Where to Sell</div>
                  <div className="text-gray-700 text-sm font-semibold">{brand.wherToSell}</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Spotter Tips */}
      <div className="mx-4 mt-6 bg-[#0d0d0d] rounded-2xl p-5 text-white">
        <h2 className="font-black text-lg mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>🔍 Spotter Tips</h2>
        <div className="flex flex-col gap-4">
          {[
            { icon: '🏷️', title: 'Check the Tag First', desc: '"Made in USA" = pre-1990s = more valuable. Single-stitch collar = pre-1994 = vintage.' },
            { icon: '🧵', title: 'Single Stitch = Vintage', desc: 'Flip the sleeve hem. One row of stitching = vintage. Two rows = modern. This is the fastest test.' },
            { icon: '🎨', title: 'Cracked Print = Premium', desc: "Cracked, faded screen print is NOT damage — it's patina. It adds value. Buyers love authentic wear." },
            { icon: '📐', title: 'Check the Fit', desc: 'High-waisted denim from the 90s is worth way more than modern cuts. Try it on — proportion matters.' },
            { icon: '🌟', title: 'Soft Fabric = Worn = Good', desc: "Very soft, thin t-shirt fabric means it's been washed many times. That's desirable for vintage buyers." },
          ].map(tip => (
            <div key={tip.title} className="flex gap-3 items-start">
              <div className="text-2xl">{tip.icon}</div>
              <div>
                <div className="font-black text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{tip.title}</div>
                <div className="text-gray-400 text-sm leading-relaxed">{tip.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Comparison */}
      <div className="mx-4 mt-6 mb-6 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-100">
          <h2 className="font-black text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Where to Sell 📱</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {platforms.map(p => (
            <div key={p.name} className="px-4 py-3 flex items-center gap-3">
              <div className="w-20 font-black text-sm shrink-0" style={{ fontFamily: 'Poppins, sans-serif' }}>{p.name}</div>
              <div className="flex-1">
                <div className="text-xs text-gray-500 font-semibold">{p.fee}</div>
                <div className="text-xs text-gray-400">{p.best}</div>
              </div>
              <div className="text-xs text-[#00E5A0] font-bold shrink-0">{p.speed}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

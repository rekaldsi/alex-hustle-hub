export default function Pricing() {
  return (
    <div className="flex flex-col pb-8">
      {/* Hero */}
      <div className="px-4 pt-8 pb-6" style={{ background: 'linear-gradient(135deg, #00E5A0, #3b82f6)' }}>
        <div className="text-4xl mb-2">💰</div>
        <h1 className="text-2xl font-black text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Price your work right
        </h1>
        <p className="text-white/90 text-sm font-semibold">
          Don't undersell. You're not doing charity — you're running a business.
        </p>
      </div>

      <div className="flex flex-col gap-4 px-4 pt-5">

        {/* Don't Undersell */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="px-4 py-3" style={{ background: 'linear-gradient(135deg, #FF2D78, #ff6b9d)' }}>
            <div className="font-black text-white text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
              🚨 The #1 Teen Hustle Mistake
            </div>
          </div>
          <div className="bg-white p-4">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              Charging too little. "I'll only charge $3 because I don't want to seem greedy" — this is the mindset that kills hustle.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              When you charge too little, people think your work isn't worth much. Price signals quality. A $5 nail set feels cheap. A $12 nail set feels custom and special.
            </p>
            <div className="bg-[#FF2D78]/10 rounded-xl p-3">
              <div className="font-black text-sm text-[#FF2D78] mb-1">The rule:</div>
              <div className="text-gray-700 text-sm">
                If you're nervous your price is too high — you're probably priced right. If it feels totally comfortable, you're probably too low.
              </div>
            </div>
          </div>
        </div>

        {/* The Formula */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="px-4 py-3" style={{ background: 'linear-gradient(135deg, #00E5A0, #0ea5e9)' }}>
            <div className="font-black text-white text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
              🧮 The Pricing Formula
            </div>
          </div>
          <div className="bg-white p-4 flex flex-col gap-4">
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="font-black text-lg text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Cost of Materials<br />
                <span className="text-gray-400 font-normal text-base">+</span><br />
                Your Time (hourly rate × hours)<br />
                <span className="text-gray-400 font-normal text-base">+</span><br />
                Profit Margin (20–40%)<br />
                <span className="text-gray-400 font-normal text-base">=</span><br />
                <span className="text-[#00E5A0]">Your Price</span>
              </div>
            </div>
            {[
              {
                title: 'Press-on nails example',
                calc: 'Materials: $3 · Time: 45 min at $10/hr = $7.50 · Total cost: $10.50 · Add 20%: $12.60 → Charge $12–15',
                color: '#FF2D78',
              },
              {
                title: 'Candle example',
                calc: 'Materials: $7 · Time: 30 min at $10/hr = $5 · Total cost: $12 · Add 30%: $15.60 → Charge $15–18',
                color: '#f97316',
              },
              {
                title: 'Caption writing example',
                calc: 'Materials: $0 · Time: 30 min at $12/hr = $6 · Total cost: $6 · Add 50%: $9 → Charge $8–10',
                color: '#8B5CF6',
              },
            ].map(ex => (
              <div key={ex.title} className="rounded-xl overflow-hidden border border-gray-100">
                <div className="px-3 py-2" style={{ background: ex.color }}>
                  <div className="font-black text-white text-xs">{ex.title}</div>
                </div>
                <div className="p-3 bg-white">
                  <div className="text-gray-600 text-xs leading-relaxed">{ex.calc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hourly Rate Thinking */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="px-4 py-3" style={{ background: 'linear-gradient(135deg, #8B5CF6, #3b82f6)' }}>
            <div className="font-black text-white text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
              ⏰ Your Time Is Worth Real Money
            </div>
          </div>
          <div className="bg-white p-4 flex flex-col gap-3">
            <p className="text-gray-700 text-sm leading-relaxed">
              Think of yourself as earning at least <span className="font-black text-[#8B5CF6]">$10–15/hr</span> for your time. That's a minimum. Your skills are worth more as you improve.
            </p>
            {[
              { label: 'Beginner (starting out)', rate: '$8–10/hr', note: 'You\'re learning — that\'s fine, but still charge for your time' },
              { label: 'Established (5+ sales)', rate: '$12–15/hr', note: 'You have proof you deliver — raise your rate' },
              { label: 'Experienced (20+ sales, reviews)', rate: '$15–20/hr', note: 'You\'re the real deal — price like it' },
            ].map(tier => (
              <div key={tier.label} className="flex gap-3 items-start bg-gray-50 rounded-xl p-3">
                <div className="flex-1">
                  <div className="font-bold text-sm text-gray-900">{tier.label}</div>
                  <div className="text-[#8B5CF6] font-black text-sm">{tier.rate}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{tier.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Raise Prices */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="px-4 py-3" style={{ background: 'linear-gradient(135deg, #FFE600, #f97316)' }}>
            <div className="font-black text-white text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
              📈 How to Raise Your Prices Without Losing Customers
            </div>
          </div>
          <div className="bg-white p-4 flex flex-col gap-3">
            {[
              { step: '1', text: 'Raise prices for NEW customers first — existing regulars get a grace period' },
              { step: '2', text: 'Post on stories: "Prices going up on [date] — DM me now to lock in current pricing" (creates urgency AND is honest)' },
              { step: '3', text: 'Raise by 20–30% at a time, not 100% at once — gradual increases stick better' },
              { step: '4', text: 'Add value when you raise prices: better packaging, faster delivery, a small freebie' },
            ].map(s => (
              <div key={s.step} className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full flex items-center justify-center font-black text-sm shrink-0 text-white" style={{ background: '#FFE600' }}>
                  <span className="text-gray-900">{s.step}</span>
                </div>
                <span className="text-gray-700 text-sm leading-relaxed">{s.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Price Sheet */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="font-black text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>Sample Price Sheet 📋</div>
            <div className="text-gray-500 text-xs">Copy these as starting points</div>
          </div>
          <div className="bg-white divide-y divide-gray-100">
            {[
              { hustle: 'Press-on nail set (10 nails)', low: '$10', high: '$18', notes: 'Custom designs add $3–5' },
              { hustle: 'Custom phone charm', low: '$8', high: '$15', notes: 'Name charms add $3' },
              { hustle: 'Instagram caption', low: '$5', high: '$10', notes: 'Bundle 5 captions for $20' },
              { hustle: 'Digital sticker pack (6)', low: '$3', high: '$5', notes: 'Bundle 3 packs for $10' },
              { hustle: 'Dog walk (30 min)', low: '$15', high: '$22', notes: 'Extra dog add $5' },
              { hustle: 'Babysitting (per hour)', low: '$12', high: '$18', notes: 'Extra kids add $3/hr' },
              { hustle: 'Tutoring (per hour)', low: '$12', high: '$20', notes: 'Test prep add $3/hr' },
              { hustle: 'Hand-poured candle', low: '$12', high: '$22', notes: 'Holiday bundles for gifting' },
              { hustle: 'Beaded earrings (pair)', low: '$8', high: '$15', notes: 'Custom color add $2' },
              { hustle: 'Event flyer design', low: '$15', high: '$30', notes: '2 revisions included' },
            ].map(row => (
              <div key={row.hustle} className="px-4 py-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-sm text-gray-900">{row.hustle}</div>
                    <div className="text-gray-400 text-xs">{row.notes}</div>
                  </div>
                  <div className="text-right shrink-0 ml-2">
                    <div className="font-black text-sm text-[#00E5A0]">{row.low} – {row.high}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tip */}
        <div className="rounded-2xl p-4" style={{ background: 'linear-gradient(135deg, #00E5A0, #3b82f6)' }}>
          <div className="font-black text-white text-sm mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            🔥 Pro Tip
          </div>
          <p className="text-white text-sm leading-relaxed font-semibold">
            If you're selling out consistently — raise your prices. That's the market telling you you're undercharging. Supply and demand is real, even at 15.
          </p>
        </div>

      </div>
    </div>
  )
}

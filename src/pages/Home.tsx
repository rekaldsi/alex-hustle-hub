import { Link, useNavigate } from 'react-router-dom'
import { ideas } from '../data/ideas'

export default function Home() {
  const navigate = useNavigate()
  const featuredIdeas = ideas.slice(0, 6)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="animated-gradient px-5 pt-12 pb-10 text-white text-center">
        <div className="text-5xl mb-3">👋</div>
        <h1 className="text-3xl font-black leading-tight mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Hey Alex,<br />ready to make<br />your first $100?
        </h1>
        <p className="text-white/90 text-base mb-6 font-semibold">
          Your personal business idea portal. Built just for you.
        </p>
        <button
          onClick={() => navigate('/quiz')}
          className="bg-white text-[#FF2D78] font-black text-base px-6 py-3 rounded-full shadow-lg active:scale-95 transition-transform"
        >
          ✨ What kind of hustler are you?
        </button>
      </div>

      {/* Stats Row */}
      <div className="flex divide-x divide-gray-100 bg-white shadow-sm">
        {[
          { number: String(ideas.length), label: 'Ideas to explore' },
          { number: '$40', label: 'Start with this' },
          { number: '1 wk', label: 'First sale goal' },
        ].map(stat => (
          <div key={stat.label} className="flex-1 text-center py-4">
            <div className="text-2xl font-black text-[#FF2D78]" style={{ fontFamily: 'Poppins, sans-serif' }}>{stat.number}</div>
            <div className="text-xs text-gray-500 font-semibold">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Ideas Grid */}
      <div className="px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-black" style={{ fontFamily: 'Poppins, sans-serif' }}>Explore Ideas 💡</h2>
          <Link to="/ideas" className="text-[#FF2D78] font-bold text-sm">See all →</Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {featuredIdeas.map(idea => (
            <Link
              key={idea.id}
              to={`/ideas/${idea.id}`}
              className="card-hover rounded-2xl p-4 text-white shadow-md"
              style={{ background: idea.bgGradient }}
            >
              <div className="text-3xl mb-2">{idea.emoji}</div>
              <div className="font-black text-sm leading-tight mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{idea.name}</div>
              <div className="text-white/80 text-xs mb-2 leading-snug">{idea.tagline}</div>
              <div className="bg-white/20 rounded-full px-2 py-0.5 text-xs font-bold inline-block">
                {idea.startupCost}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Thrift CTA */}
      <div className="mx-4 mb-4 rounded-2xl overflow-hidden shadow-md" style={{ background: 'linear-gradient(135deg, #00E5A0, #0099ff)' }}>
        <Link to="/thrift" className="block p-5 text-white">
          <div className="text-3xl mb-2">🛍️</div>
          <div className="font-black text-lg mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Thrift Spotter Guide</div>
          <div className="text-white/90 text-sm mb-3">Know exactly what to grab at Goodwill. Your secret weapon.</div>
          <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-bold inline-block">Open Guide →</div>
        </Link>
      </div>

      {/* Guides */}
      <div className="px-4 mb-4">
        <h2 className="text-xl font-black mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Hustle Guides 📖</h2>
        <div className="flex flex-col gap-3">
          <Link to="/guides/pricing" className="card-hover rounded-2xl overflow-hidden shadow-md block" style={{ background: 'linear-gradient(135deg, #00E5A0, #3b82f6)' }}>
            <div className="p-5 text-white">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-black text-lg mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Pricing Guide</div>
              <div className="text-white/90 text-sm mb-3">Don't undersell. Know your worth and charge it.</div>
              <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-bold inline-block">Read Guide →</div>
            </div>
          </Link>
          <Link to="/guides/social-media" className="card-hover rounded-2xl overflow-hidden shadow-md block" style={{ background: 'linear-gradient(135deg, #FF2D78, #8B5CF6)' }}>
            <div className="p-5 text-white">
              <div className="text-3xl mb-2">📱</div>
              <div className="font-black text-lg mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Social Media Guide</div>
              <div className="text-white/90 text-sm mb-3">Grow on Instagram, TikTok & Depop. Sell more.</div>
              <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-bold inline-block">Read Guide →</div>
            </div>
          </Link>
        </div>
      </div>

      {/* Dad's Message */}
      <div className="mx-4 mb-6 rounded-2xl bg-[#0d0d0d] p-5 text-white">
        <div className="text-2xl mb-3">🧡</div>
        <h3 className="font-black text-lg mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>From Dad</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          "Hey kid. I built this for you because I see something in you — the curiosity, the creativity, the way you light up when you find something cool. Starting your own thing doesn't have to be complicated or scary. Pick one idea. Try it. See what happens. Your mom and I are behind you 100%. Need startup money? Come talk to us. We'll invest in you. Love you."
        </p>
        <div className="mt-3 text-[#FF2D78] font-bold text-sm">— Dad 🧡</div>
      </div>
    </div>
  )
}

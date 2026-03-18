export default function SocialMedia() {
  return (
    <div className="flex flex-col pb-8">
      {/* Hero */}
      <div className="px-4 pt-8 pb-6" style={{ background: 'linear-gradient(135deg, #FF2D78, #8B5CF6)' }}>
        <div className="text-4xl mb-2">📱</div>
        <h1 className="text-2xl font-black text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Grow on social. Sell more.
        </h1>
        <p className="text-white/90 text-sm font-semibold">
          Your phone is a store. Here's how to run it right.
        </p>
      </div>

      <div className="flex flex-col gap-4 px-4 pt-5">

        {/* Platform Comparison */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="px-4 py-3" style={{ background: 'linear-gradient(135deg, #FF2D78, #ff6b9d)' }}>
            <div className="font-black text-white text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
              📲 Instagram vs TikTok vs Depop
            </div>
          </div>
          <div className="bg-white p-4 flex flex-col gap-3">
            {[
              {
                platform: 'Instagram',
                emoji: '📸',
                bestFor: 'Product photos, DM orders, local buyers',
                postType: 'Reels + Stories',
                color: '#FF2D78',
                tip: 'Stories sell. Post your product in a story with a "DM to order" sticker — this converts better than a feed post.',
              },
              {
                platform: 'TikTok',
                emoji: '🎵',
                bestFor: 'Process videos, going viral, brand building',
                postType: 'Short-form video',
                color: '#00E5A0',
                tip: '"Making of" content goes crazy on TikTok. A 15-second video of you crocheting or packing a snack bag can hit thousands of views from zero followers.',
              },
              {
                platform: 'Depop',
                emoji: '🛍️',
                bestFor: 'Reselling clothes, thrift flips, vintage',
                postType: 'Product listings',
                color: '#8B5CF6',
                tip: 'Depop buyers are already ready to spend. Your job is just to have good photos and respond to offers fast.',
              },
            ].map(p => (
              <div key={p.platform} className="rounded-xl overflow-hidden border border-gray-100">
                <div className="px-3 py-2 flex items-center gap-2" style={{ background: p.color }}>
                  <span>{p.emoji}</span>
                  <div className="font-black text-white text-xs">{p.platform}</div>
                  <div className="ml-auto text-white/80 text-xs font-semibold">{p.postType}</div>
                </div>
                <div className="p-3 bg-white flex flex-col gap-1">
                  <div className="text-gray-600 text-xs leading-relaxed">
                    <span className="font-bold text-gray-800">Best for:</span> {p.bestFor}
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-gray-600 text-xs leading-relaxed">
                    💡 {p.tip}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Posting Cadence */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="px-4 py-3" style={{ background: 'linear-gradient(135deg, #00E5A0, #3b82f6)' }}>
            <div className="font-black text-white text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
              📅 Posting Cadence That Actually Works
            </div>
          </div>
          <div className="bg-white p-4 flex flex-col gap-3">
            <p className="text-gray-700 text-sm leading-relaxed">
              You don't need to post every day. You need to post <span className="font-black text-[#00E5A0]">consistently</span>. Here's a schedule that's doable for a student:
            </p>
            {[
              { day: 'Mon', action: "Post a Story — show something you're making or planning. Just a quick snap." },
              { day: 'Wed', action: 'Post a Reel or TikTok — the process of making or packing something.' },
              { day: 'Fri', action: '"Drop" post — "5 bags available this weekend 🫶 DM to order". Creates weekly urgency.' },
              { day: 'Daily', action: 'Reply to DMs within a few hours — fast response = more sales.' },
            ].map(s => (
              <div key={s.day} className="flex gap-3 items-start">
                <div
                  className="w-10 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 text-white"
                  style={{ background: 'linear-gradient(135deg, #00E5A0, #3b82f6)' }}
                >
                  {s.day}
                </div>
                <span className="text-gray-700 text-sm leading-relaxed">{s.action}</span>
              </div>
            ))}
            <div className="bg-[#00E5A0]/10 rounded-xl p-3 mt-1">
              <div className="font-black text-sm text-[#00E5A0] mb-1">Real talk:</div>
              <div className="text-gray-700 text-sm">
                3 intentional posts a week beats 14 random ones. Quality + consistency wins every time.
              </div>
            </div>
          </div>
        </div>

        {/* DM Etiquette */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="px-4 py-3" style={{ background: 'linear-gradient(135deg, #8B5CF6, #FF2D78)' }}>
            <div className="font-black text-white text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
              💬 DM Etiquette — Close the Sale
            </div>
          </div>
          <div className="bg-white p-4 flex flex-col gap-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              Most teen hustlers lose sales in the DMs. Here's how to not do that.
            </p>
            <div className="flex flex-col gap-3">
              {[
                {
                  label: '✅ Do this',
                  items: [
                    'Reply within a few hours — speed closes deals',
                    "Give a clear price upfront: \"It's $12 shipped 💅\"",
                    'Send them a payment link first, then confirm when paid',
                    "Send a photo when it's ready / shipped",
                    'End with: "Lmk if you want to order again!" — repeat buyers are gold',
                  ],
                  bg: '#00E5A0',
                  textColor: 'text-[#00E5A0]',
                  bgCard: 'bg-green-50',
                },
                {
                  label: '❌ Avoid this',
                  items: [
                    "Leaving people on read for days — they'll buy elsewhere",
                    'Vague pricing: "idk like $10 maybe?" — sounds unprofessional',
                    'Not confirming payment before you start making it',
                    'Going ghost after you get paid — kills your reputation fast',
                  ],
                  bg: '#FF2D78',
                  textColor: 'text-[#FF2D78]',
                  bgCard: 'bg-red-50',
                },
              ].map(col => (
                <div key={col.label} className={`rounded-xl p-3 ${col.bgCard}`}>
                  <div className={`font-black text-sm ${col.textColor} mb-2`}>{col.label}</div>
                  <ul className="flex flex-col gap-1.5">
                    {col.items.map((item, i) => (
                      <li key={i} className="text-gray-700 text-xs leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Building a Following */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="px-4 py-3" style={{ background: 'linear-gradient(135deg, #FFE600, #f97316)' }}>
            <div className="font-black text-white text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
              📈 How to Build a Following That Buys
            </div>
          </div>
          <div className="bg-white p-4 flex flex-col gap-3">
            <p className="text-gray-700 text-sm leading-relaxed">
              You don't need 10,000 followers to make money. You need <span className="font-black">200 real ones</span> who actually want what you sell.
            </p>
            {[
              { step: '1', text: 'Start with your existing followers — your first buyers are people who already know you.' },
              { step: '2', text: 'Post content that shows your process, not just your product. People follow the person, not the item.' },
              { step: '3', text: 'Use 3–5 niche hashtags (not generic ones). #ChicagoNails beats #nails with 100M posts.' },
              { step: '4', text: 'Reply to every comment for the first 30 minutes after posting — the algorithm rewards engagement.' },
              { step: '5', text: 'Collab with a friend who has followers — feature each other in a story swap.' },
              { step: '6', text: 'When someone buys, ask them to tag you in a story wearing/using it. Social proof hits different.' },
            ].map(s => (
              <div key={s.step} className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full flex items-center justify-center font-black text-sm shrink-0 text-gray-900" style={{ background: '#FFE600' }}>
                  {s.step}
                </div>
                <span className="text-gray-700 text-sm leading-relaxed">{s.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bio Setup */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="font-black text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>Your Bio Setup 📋</div>
            <div className="text-gray-500 text-xs">Make it clear in 3 seconds what you sell</div>
          </div>
          <div className="bg-white p-4 flex flex-col gap-3">
            <div className="bg-gray-50 rounded-xl p-4 text-sm font-mono text-gray-700 leading-relaxed">
              <div className="font-black text-gray-900 mb-1">Example bio:</div>
              <div>💅 Custom press-on nails</div>
              <div>📍 Chicago</div>
              <div>DM to order | Sets from $12</div>
              <div className="text-blue-500 mt-1">linktr.ee/alexnails</div>
            </div>
            {[
              { element: 'What you sell', why: 'Say it in the first line — people decide in 2 seconds.' },
              { element: 'Where you are', why: 'Chicago buyers love supporting local. Include your city.' },
              { element: 'Call to action', why: '"DM to order" or "Link below" — tell them exactly what to do.' },
              { element: 'Price hint', why: '"Sets from $12" removes the "how much does it cost" DM and pre-qualifies buyers.' },
            ].map(row => (
              <div key={row.element} className="flex gap-3 items-start">
                <div className="flex-1">
                  <div className="font-bold text-sm text-gray-900">{row.element}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{row.why}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tip */}
        <div className="rounded-2xl p-4" style={{ background: 'linear-gradient(135deg, #FF2D78, #8B5CF6)' }}>
          <div className="font-black text-white text-sm mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            🔥 Pro Tip
          </div>
          <p className="text-white text-sm leading-relaxed font-semibold">
            Your phone camera and natural window light is all you need. Perfect photos don't sell products — authentic ones do. Show your personality, not just your product.
          </p>
        </div>

      </div>
    </div>
  )
}

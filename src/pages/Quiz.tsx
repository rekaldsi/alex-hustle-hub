import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ideas } from '../data/ideas'

interface Question {
  id: number
  question: string
  options: { label: string; value: string }[]
}

const questions: Question[] = [
  {
    id: 1,
    question: "What sounds more fun to you? 🎨",
    options: [
      { label: 'Making things with my hands', value: 'making' },
      { label: 'Styling and putting looks together', value: 'styling' },
      { label: 'Writing and storytelling', value: 'writing' },
      { label: 'Finding deals and flipping', value: 'deals' },
    ],
  },
  {
    id: 2,
    question: "How much money do you have to start? 💰",
    options: [
      { label: '$0 — literally nothing', value: 'zero' },
      { label: '$20–50 — some starter cash', value: 'low' },
      { label: '$50–100 — ready to invest', value: 'medium' },
    ],
  },
  {
    id: 3,
    question: "How much time can you give this? ⏰",
    options: [
      { label: '30 minutes a day max', value: 'minimal' },
      { label: 'A few hours per week', value: 'moderate' },
      { label: 'Whenever I feel like it', value: 'flexible' },
    ],
  },
  {
    id: 4,
    question: "Where do you want to sell? 📍",
    options: [
      { label: 'At school — to classmates', value: 'school' },
      { label: 'Online only', value: 'online' },
      { label: 'Both — wherever works', value: 'both' },
    ],
  },
  {
    id: 5,
    question: "What do your friends actually pay for? 🤑",
    options: [
      { label: 'Food and drinks', value: 'food' },
      { label: 'Accessories and fashion', value: 'fashion' },
      { label: 'Digital stuff and apps', value: 'digital' },
      { label: 'Clothes and vintage finds', value: 'clothes' },
    ],
  },
  {
    id: 6,
    question: "What is your vibe with people? 🤝",
    options: [
      { label: 'Introvert — I prefer solo, behind-the-scenes work', value: 'introvert' },
      { label: 'Extrovert — I love chatting, selling, connecting', value: 'extrovert' },
      { label: 'Mixed — depends on the day', value: 'mixed' },
    ],
  },
]

interface Result {
  type: string
  emoji: string
  description: string
  ideaIds: string[]
}

function getResult(answers: Record<number, string>): Result {
  const { 1: q1, 2: q2, 4: q4, 5: q5, 6: q6 } = answers

  // Introvert → digital/creative ideas
  if (q6 === 'introvert') {
    if (q1 === 'writing' || q5 === 'digital') {
      return {
        type: 'The Digital Creative',
        emoji: '🌸',
        description: "Solo work, infinite scale. You create once and sell forever — no chatting required. Pure profit machine.",
        ideaIds: ['digital-packs', 'caption-queen', 'custom-stickers'],
      }
    }
    return {
      type: 'The Quiet Craftsperson',
      emoji: '🎨',
      description: "You do your best work solo. Make beautiful things, sell them online — no small talk needed.",
      ideaIds: ['digital-packs', 'custom-stickers', 'crochet-accessories'],
    }
  }

  // Extrovert → in-person / relationship-driven hustles
  if (q6 === 'extrovert') {
    if (q5 === 'food' || q4 === 'school') {
      return {
        type: 'The School Hustler',
        emoji: '📦',
        description: "Your energy is your edge. You know your market — it's right around you every day. People buy from people they like.",
        ideaIds: ['snack-preorders', 'dog-walking', 'tutoring'],
      }
    }
    return {
      type: 'The People-Powered Hustler',
      emoji: '🤝',
      description: "You thrive in person. Your charisma turns strangers into repeat customers. Use that energy.",
      ideaIds: ['dog-walking', 'tutoring', 'snack-preorders'],
    }
  }

  if (q1 === 'writing') {
    return {
      type: 'The Caption Queen',
      emoji: '✍️',
      description: "You're a natural communicator — your words have power. Start making money with what you're already good at.",
      ideaIds: ['caption-queen', 'digital-packs', 'custom-stickers'],
    }
  }

  if (q1 === 'deals' || q5 === 'clothes') {
    return {
      type: 'The Thrift Hustler',
      emoji: '🛍️',
      description: "You have an eye for value. You walk into Goodwill and see money where others see junk. That's a real skill.",
      ideaIds: ['thrift-flip', 'style-upcycling', 'phone-charms'],
    }
  }

  if (q5 === 'digital' || q2 === 'zero') {
    return {
      type: 'The Digital Creative',
      emoji: '🌸',
      description: "Zero startup cost, unlimited potential. You create once and sell forever. Pure profit machine.",
      ideaIds: ['digital-packs', 'caption-queen', 'custom-stickers'],
    }
  }

  if (q1 === 'making' || q5 === 'fashion') {
    return {
      type: 'The Artisan Boss',
      emoji: '💅',
      description: "You make things that people wear. Your creativity literally becomes cash. Fashion and crafts are your lane.",
      ideaIds: ['press-on-nails', 'phone-charms', 'crochet-accessories'],
    }
  }

  if (q4 === 'school' || q5 === 'food') {
    return {
      type: 'The School Hustler',
      emoji: '📦',
      description: "You know your market — it's right around you every day. You're good at connecting with people and reading what they want.",
      ideaIds: ['snack-preorders', 'custom-stickers', 'press-on-nails'],
    }
  }

  // Default
  return {
    type: 'The Multi-Hustle Maven',
    emoji: '⚡',
    description: "You can do it all. Pick the one that sounds most fun right now — you can always add more later.",
    ideaIds: ['thrift-flip', 'press-on-nails', 'caption-queen'],
  }
}

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [result, setResult] = useState<Result | null>(null)

  function selectAnswer(qId: number, value: string) {
    const newAnswers = { ...answers, [qId]: value }
    setAnswers(newAnswers)

    if (currentQ < questions.length - 1) {
      setTimeout(() => setCurrentQ(q => q + 1), 300)
    } else {
      const res = getResult(newAnswers)
      setTimeout(() => setResult(res), 300)
    }
  }

  function reset() {
    setCurrentQ(0)
    setAnswers({})
    setResult(null)
  }

  if (result) {
    const recommendedIdeas = result.ideaIds.map(id => ideas.find(i => i.id === id)).filter(Boolean)

    return (
      <div className="flex flex-col min-h-screen">
        <div className="animated-gradient px-4 pt-12 pb-8 text-white text-center">
          <div className="text-6xl mb-3">{result.emoji}</div>
          <div className="text-sm font-bold text-white/70 uppercase tracking-wider mb-1">You're a</div>
          <h1 className="text-2xl font-black mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{result.type}</h1>
          <p className="text-white/90 text-sm leading-relaxed">{result.description}</p>
        </div>

        <div className="px-4 pt-6">
          <h2 className="font-black text-lg mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Your Top 3 Ideas 🔥</h2>
          <div className="flex flex-col gap-3">
            {recommendedIdeas.map((idea, i) => idea && (
              <Link
                key={idea.id}
                to={`/ideas/${idea.id}`}
                className="card-hover flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: idea.bgGradient }}
                >
                  {idea.emoji}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#FF2D78] text-white text-xs font-black px-1.5 py-0.5 rounded-full">#{i + 1}</span>
                    <span className="font-black text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>{idea.name}</span>
                  </div>
                  <div className="text-gray-500 text-sm mt-0.5">{idea.tagline}</div>
                  <div className="text-[#FF2D78] font-bold text-xs mt-1">{idea.startupCost} to start →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mx-4 mt-6 mb-6 flex flex-col gap-3">
          <button
            onClick={reset}
            className="w-full py-3 rounded-2xl font-black text-[#FF2D78] bg-[#FF2D78]/10 text-base active:scale-95 transition-transform"
          >
            Take Quiz Again
          </button>
          <Link
            to="/ideas"
            className="block w-full py-3 rounded-2xl font-black text-white text-base text-center active:scale-95 transition-transform"
            style={{ background: 'linear-gradient(135deg, #FF2D78, #8B5CF6)' }}
          >
            Browse All {ideas.length} Ideas
          </Link>
        </div>
      </div>
    )
  }

  const q = questions[currentQ]
  const progressPct = Math.round((currentQ / questions.length) * 100)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="px-4 pt-8 pb-4 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h1 className="font-black text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>What kind of hustler are you? ✨</h1>
          <span className="text-sm text-gray-400 font-bold">{currentQ + 1}/{questions.length}</span>
        </div>
        <div className="bg-gray-100 rounded-full h-2">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPct}%`, background: 'linear-gradient(90deg, #FF2D78, #8B5CF6)' }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="px-4 pt-8 pb-6 flex-1">
        <h2 className="text-xl font-black mb-6 leading-snug" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {q.question}
        </h2>
        <div className="flex flex-col gap-3">
          {q.options.map(opt => (
            <button
              key={opt.value}
              onClick={() => selectAnswer(q.id, opt.value)}
              className={`w-full text-left px-4 py-4 rounded-2xl border-2 font-bold text-base transition-all active:scale-95 ${
                answers[q.id] === opt.value
                  ? 'border-[#FF2D78] bg-[#FF2D78]/10 text-[#FF2D78]'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

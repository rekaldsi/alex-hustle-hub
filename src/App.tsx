import { Routes, Route } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import Ideas from './pages/Ideas'
import IdeaDetail from './pages/IdeaDetail'
import ThriftGuide from './pages/ThriftGuide'
import Tracker from './pages/Tracker'
import Quiz from './pages/Quiz'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/ideas/:id" element={<IdeaDetail />} />
        <Route path="/thrift" element={<ThriftGuide />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      <BottomNav />
    </div>
  )
}

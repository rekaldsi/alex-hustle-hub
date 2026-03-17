import { NavLink } from 'react-router-dom'

const navItems = [
  { path: '/', icon: '🏠', label: 'Home' },
  { path: '/ideas', icon: '💡', label: 'Ideas' },
  { path: '/thrift', icon: '🛍️', label: 'Thrift' },
  { path: '/tracker', icon: '📊', label: 'Tracker' },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white border-t border-gray-100 shadow-lg z-50">
      <div className="flex">
        {navItems.map(({ path, icon, label }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center py-3 text-xs font-bold font-body transition-colors ${
                isActive ? 'text-[#FF2D78]' : 'text-gray-400'
              }`
            }
          >
            <span className="text-2xl">{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

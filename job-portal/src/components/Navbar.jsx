import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Briefcase, LayoutDashboard, FileText, User, LogOut, Menu, X } from 'lucide-react'

function Navbar() {
  const { role, setRole } = useAuth()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  function handleLogout() {
    setRole('guest')
    setMenuOpen(false)
    navigate('/')
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <nav className="bg-white/5 backdrop-blur-lg border-b border-white/10 px-6 py-4 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold flex items-center gap-1" onClick={closeMenu}>
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Job
          </span>
          <span className="text-white">Portal</span>
        </Link>

        {/* Hamburger button — sirf mobile pe dikhega */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop links — sirf medium+ screens pe dikhenge */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/jobs" className="text-gray-300 hover:text-white flex items-center gap-1.5">
            <Briefcase size={16} />
            Jobs
          </Link>

          {role === 'guest' && (
            <>
              <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
              <Link to="/register" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-4 py-2 rounded-lg font-semibold transition-all">
                Sign Up
              </Link>
            </>
          )}

          {role === 'seeker' && (
            <>
              <Link to="/seeker/dashboard" className="text-gray-300 hover:text-white flex items-center gap-1.5">
                <LayoutDashboard size={16} /> Dashboard
              </Link>
              <Link to="/seeker/applications" className="text-gray-300 hover:text-white flex items-center gap-1.5">
                <FileText size={16} /> My Applications
              </Link>
              <Link to="/seeker/profile" className="text-gray-300 hover:text-white flex items-center gap-1.5">
                <User size={16} /> Profile
              </Link>
              <button onClick={handleLogout} className="text-red-400 hover:text-red-300 flex items-center gap-1.5">
                <LogOut size={16} /> Logout
              </button>
            </>
          )}

          {role === 'recruiter' && (
            <>
              <Link to="/recruiter/dashboard" className="text-gray-300 hover:text-white flex items-center gap-1.5">
                <LayoutDashboard size={16} /> Dashboard
              </Link>
              <Link to="/recruiter/post-job" className="text-gray-300 hover:text-white flex items-center gap-1.5">
                <Briefcase size={16} /> Post a Job
              </Link>
              <Link to="/recruiter/manage-jobs" className="text-gray-300 hover:text-white flex items-center gap-1.5">
                <FileText size={16} /> Manage Jobs
              </Link>
              <button onClick={handleLogout} className="text-red-400 hover:text-red-300 flex items-center gap-1.5">
                <LogOut size={16} /> Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile dropdown menu — sirf jab menuOpen true ho */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 pb-2">
          <Link to="/jobs" onClick={closeMenu} className="text-gray-300 hover:text-white flex items-center gap-2">
            <Briefcase size={16} /> Jobs
          </Link>

          {role === 'guest' && (
            <>
              <Link to="/login" onClick={closeMenu} className="text-gray-300 hover:text-white">Login</Link>
              <Link
                to="/register"
                onClick={closeMenu}
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-4 py-2 rounded-lg font-semibold text-center transition-all"
              >
                Sign Up
              </Link>
            </>
          )}

          {role === 'seeker' && (
            <>
              <Link to="/seeker/dashboard" onClick={closeMenu} className="text-gray-300 hover:text-white flex items-center gap-2">
                <LayoutDashboard size={16} /> Dashboard
              </Link>
              <Link to="/seeker/applications" onClick={closeMenu} className="text-gray-300 hover:text-white flex items-center gap-2">
                <FileText size={16} /> My Applications
              </Link>
              <Link to="/seeker/profile" onClick={closeMenu} className="text-gray-300 hover:text-white flex items-center gap-2">
                <User size={16} /> Profile
              </Link>
              <button onClick={handleLogout} className="text-red-400 hover:text-red-300 flex items-center gap-2">
                <LogOut size={16} /> Logout
              </button>
            </>
          )}

          {role === 'recruiter' && (
            <>
              <Link to="/recruiter/dashboard" onClick={closeMenu} className="text-gray-300 hover:text-white flex items-center gap-2">
                <LayoutDashboard size={16} /> Dashboard
              </Link>
              <Link to="/recruiter/post-job" onClick={closeMenu} className="text-gray-300 hover:text-white flex items-center gap-2">
                <Briefcase size={16} /> Post a Job
              </Link>
              <Link to="/recruiter/manage-jobs" onClick={closeMenu} className="text-gray-300 hover:text-white flex items-center gap-2">
                <FileText size={16} /> Manage Jobs
              </Link>
              <button onClick={handleLogout} className="text-red-400 hover:text-red-300 flex items-center gap-2">
                <LogOut size={16} /> Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
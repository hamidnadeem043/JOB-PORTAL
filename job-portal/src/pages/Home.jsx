import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, Users, TrendingUp } from 'lucide-react'

function Home() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: '#0b0f1a' }}>

      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 py-20">

        {/* Small badge */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 text-sm text-gray-300">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          Now connecting talent with opportunity
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 max-w-3xl leading-tight">
          Find Your Next{' '}
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Job or Internship
          </span>
        </h1>

        <p className="text-gray-400 text-lg mb-10 max-w-xl">
          Connecting job seekers with the right opportunities, and recruiters with the right talent — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link
            to="/register"
            className="group bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 px-7 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
          >
            Get Started
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/jobs"
            className="bg-white/5 hover:bg-white/10 border border-white/10 px-7 py-3.5 rounded-xl font-semibold transition-colors"
          >
            Browse Jobs
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 text-left">
          <div className="flex items-center gap-3">
            <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
              <Briefcase size={20} className="text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-gray-500 text-sm">Active Listings</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
              <Users size={20} className="text-violet-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">1,200+</p>
              <p className="text-gray-500 text-sm">Job Seekers</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
              <TrendingUp size={20} className="text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">300+</p>
              <p className="text-gray-500 text-sm">Companies Hiring</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
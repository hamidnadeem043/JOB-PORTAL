import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center" style={{ backgroundColor: '#0b0f1a' }}>
      <h1 className="text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-white mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all"
      >
        <Home size={18} />
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound
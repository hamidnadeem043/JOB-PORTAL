import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
      >
        <Home size={18} />
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound
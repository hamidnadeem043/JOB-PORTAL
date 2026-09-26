import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white animate-fade-in">
      
      
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-5xl font-bold mb-4">
          Find Your Next Job or Internship
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-xl">
          Connecting job seekers with the right opportunities, and recruiters with the right talent.
        </p>

        <div className="flex gap-4">
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
          >
            Get Started
          </Link>
          <Link
            to="/jobs"
            className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-lg font-semibold"
          >
            Browse Jobs
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home
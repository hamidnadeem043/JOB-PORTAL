import { Link } from 'react-router-dom'
import { MapPin, Building2 } from 'lucide-react'

function JobCard({ job }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 flex flex-col justify-between hover:ring-2 hover:ring-blue-500 transition animate-fade-in-up">
      <div>
        <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-3">
          {job.type}
        </span>
        <h2 className="text-xl font-semibold text-white mb-1">
          {job.title}
        </h2>

        <p className="text-gray-400 mb-1 flex items-center gap-1.5">
          <Building2 size={15} />
          {job.company}
        </p>
        <p className="text-gray-500 text-sm mb-4 flex items-center gap-1.5">
          <MapPin size={14} />
          {job.location}
        </p>

        <p className="text-gray-300 text-sm mb-4">
          {job.description}
        </p>
      </div>

      <Link
        to={`/jobs/${job.id}`}
        className="text-blue-400 hover:underline font-medium"
      >
        View Details →
      </Link>
    </div>
  )
}

export default JobCard
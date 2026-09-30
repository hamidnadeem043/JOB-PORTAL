import { Link } from 'react-router-dom'
import { MapPin, Building2, ArrowUpRight } from 'lucide-react'

function JobCard({ job }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/[0.07] hover:border-blue-500/50 transition-all">
      <div>
        <div className="flex items-start justify-between mb-4">
          <span className="inline-block bg-blue-500/10 text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-500/20">
            {job.type}
          </span>
          <ArrowUpRight
            size={18}
            className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          />
        </div>

        <h2 className="text-lg font-bold text-white mb-2">
          {job.title}
        </h2>

        <p className="text-gray-400 text-sm mb-1 flex items-center gap-1.5">
          <Building2 size={14} />
          {job.company}
        </p>
        <p className="text-gray-500 text-sm mb-4 flex items-center gap-1.5">
          <MapPin size={14} />
          {job.location}
        </p>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {job.description}
        </p>
      </div>

      <Link
        to={`/jobs/${job.id}`}
        className="text-blue-400 text-sm font-semibold hover:text-blue-300"
      >
        View Details
      </Link>
    </div>
  )
}

export default JobCard
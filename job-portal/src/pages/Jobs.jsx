import { useState, useEffect } from 'react'
import JobCard from '../components/JobCard'
import { Search } from 'lucide-react'
import { JOB_TYPES } from '../constants/jobTypes'
import { getAllJobs } from '../services/jobsService'

function Jobs() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState('All')

  const types = ['All', ...JOB_TYPES]

  useEffect(() => {
    async function fetchJobs() {
      const data = await getAllJobs()
      setJobs(data)
      setLoading(false)
    }
    fetchJobs()
  }, [])

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType = typeFilter === 'All' || job.type === typeFilter

    return matchesSearch && matchesType
  })

  return (
    <div className="min-h-screen px-6 py-10" style={{ backgroundColor: '#0b0f1a' }}>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-white mb-3">
          Explore{' '}
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Opportunities
          </span>
        </h1>
        <p className="text-gray-400">Find the role that fits you best</p>
      </div>

      <div className="max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by job title or company..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:ring-2 focus:ring-blue-500"
        >
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="text-gray-400 text-center mt-10">Loading jobs...</p>
      ) : (
        <>
          <p className="text-gray-400 text-center mb-6 text-sm">
            {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
          </p>

          {filteredJobs.length === 0 ? (
            <p className="text-gray-400 text-center mt-10">
              No jobs match your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </>
      )}

    </div>
  )
}

export default Jobs
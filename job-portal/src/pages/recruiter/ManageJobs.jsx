import { useState } from 'react'
import { Link } from 'react-router-dom'
import dummyJobs from '../../data/dummyJobs'

function ManageJobs() {
  const [jobs, setJobs] = useState(dummyJobs)

  function handleDelete(id) {
    const confirmDelete = window.confirm('Are you sure you want to delete this job?')
    if (confirmDelete) {
      setJobs(jobs.filter((job) => job.id !== id))
    }
  }

  return (
    <div className="min-h-screen px-6 py-10" style={{ backgroundColor: '#0b0f1a' }}>
      <div className="max-w-4xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Manage Jobs</h1>
          <Link
            to="/recruiter/post-job"
            className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-5 py-2 rounded-lg font-semibold transition-all"
          >
            + Post a Job
          </Link>
        </div>

        {jobs.length === 0 ? (
          <p className="text-gray-400 text-center mt-10">
            No jobs posted yet.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-white font-semibold">{job.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {job.type} · {job.location}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    to={`/recruiter/edit-job/${job.id}`}
                    className="text-blue-400 hover:underline text-sm font-medium"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="text-red-400 hover:underline text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default ManageJobs
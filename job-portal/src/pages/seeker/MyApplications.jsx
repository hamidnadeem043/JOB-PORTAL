import { useState } from 'react'
import dummyApplications from '../../data/dummyApplications'
import StatusBadge from '../../components/StatusBadge'

function MyApplications() {
  const [filter, setFilter] = useState('All')

  const filters = ['All', 'Pending', 'Accepted', 'Rejected']

  const filteredApps =
    filter === 'All'
      ? dummyApplications
      : dummyApplications.filter((app) => app.status === filter)

  return (
    <div className="min-h-screen px-6 py-10" style={{ backgroundColor: '#0b0f1a' }}>
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-white mb-6">My Applications</h1>

        <div className="flex gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filter === f
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white'
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {filteredApps.length === 0 ? (
          <p className="text-gray-400 text-center mt-10">
            No applications found for "{filter}".
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-white font-semibold">{app.jobTitle}</h3>
                  <p className="text-gray-400 text-sm">
                    {app.company} · Applied on {app.appliedDate}
                  </p>
                </div>

                <StatusBadge status={app.status} />
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default MyApplications
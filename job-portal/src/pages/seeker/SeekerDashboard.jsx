import { Link } from 'react-router-dom'
import dummyApplications from '../../data/dummyApplications'
import StatCard from '../../components/StatCard'
import StatusBadge from '../../components/StatusBadge'
import { FileText, CheckCircle, Clock } from 'lucide-react'

function SeekerDashboard() {
  const totalApplications = dummyApplications.length
  const accepted = dummyApplications.filter((a) => a.status === 'Accepted').length
  const pending = dummyApplications.filter((a) => a.status === 'Pending').length

  return (
    <div className="min-h-screen px-6 py-10" style={{ backgroundColor: '#0b0f1a' }}>
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome back 👋</h1>
          <Link
            to="/jobs"
            className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-5 py-2 rounded-lg font-semibold transition-all"
          >
            Browse Jobs
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <StatCard label="Total Applications" value={totalApplications} icon={FileText} />
          <StatCard label="Accepted" value={accepted} valueColor="text-green-400" icon={CheckCircle} />
          <StatCard label="Pending" value={pending} valueColor="text-yellow-400" icon={Clock} />
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Recent Applications</h2>
          <Link
            to="/seeker/applications"
            className="text-blue-400 hover:underline text-sm font-medium"
          >
            View All →
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {dummyApplications.map((app) => (
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

      </div>
    </div>
  )
}

export default SeekerDashboard
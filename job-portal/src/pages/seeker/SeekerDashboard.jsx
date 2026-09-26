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
    <div className="min-h-screen bg-gray-900 px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome back 👋</h1>
          <Link
            to="/jobs"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold"
          >
            Browse Jobs
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <StatCard label="Total Applications" value={totalApplications} icon={FileText} />
<StatCard label="Accepted" value={accepted} valueColor="text-green-400" icon={CheckCircle} />
<StatCard label="Pending" value={pending} valueColor="text-yellow-400" icon={Clock} />
        </div>

        {/* Recent Applications */}
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
              className="bg-gray-800 rounded-xl p-5 flex items-center justify-between"
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
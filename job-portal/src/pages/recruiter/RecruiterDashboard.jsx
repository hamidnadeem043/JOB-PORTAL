import { Link } from 'react-router-dom'
import dummyJobs from '../../data/dummyJobs'
import dummyApplicants from '../../data/dummyApplicants'
import StatCard from '../../components/StatCard'
import { Briefcase, Users, TrendingUp, Plus } from 'lucide-react'

function RecruiterDashboard() {
  const totalJobs = dummyJobs.length
  const totalApplicants = dummyApplicants.length

  return (
    <div className="min-h-screen px-6 py-10" style={{ backgroundColor: '#0b0f1a' }}>
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Recruiter Dashboard</h1>
          <div className="flex gap-3">
            <Link
              to="/recruiter/manage-jobs"
              className="border border-white/10 bg-white/5 hover:bg-white/10 text-white px-5 py-2 rounded-lg font-semibold transition-colors"
            >
              Manage Jobs
            </Link>
            <Link
              to="/recruiter/post-job"
              className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all"
            >
              <Plus size={18} />
              Post a Job
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <StatCard label="Jobs Posted" value={totalJobs} icon={Briefcase} />
          <StatCard label="Total Applicants" value={totalApplicants} icon={Users} />
          <StatCard label="Active Listings" value={totalJobs} icon={TrendingUp} />
        </div>

        <h2 className="text-xl font-semibold text-white mb-4">Your Posted Jobs</h2>

        <div className="flex flex-col gap-4">
          {dummyJobs.map((job) => {
            const count = dummyApplicants.filter((a) => a.jobId === job.id).length
            return (
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

                <div className="flex items-center gap-6">
                  <p className="text-gray-300 text-sm">{count} applicants</p>
                  <Link
                    to={`/recruiter/applicants/${job.id}`}
                    className="text-blue-400 hover:underline text-sm font-medium"
                  >
                    View Applicants →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default RecruiterDashboard
import { Link } from 'react-router-dom'
import dummyJobs from '../../data/dummyJobs'
import dummyApplicants from '../../data/dummyApplicants'
import StatCard from "../../components/StatCard";
import { Briefcase, Users, TrendingUp } from 'lucide-react'
import { Plus } from 'lucide-react'

function RecruiterDashboard() {
  const totalJobs = dummyJobs.length
  const totalApplicants = dummyApplicants.length

  return (
    <div className="min-h-screen bg-gray-900 px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Recruiter Dashboard</h1>
          <div className="flex gap-3">
            <Link
              to="/recruiter/manage-jobs"
              className="border border-gray-600 hover:border-gray-400 text-white px-5 py-2 rounded-lg font-semibold"
            >
              Manage Jobs
            </Link>
            <Link to="/recruiter/post-job" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2">
  <Plus size={18} />
  Post a Job
</Link>
          </div>
        </div>

        {/* Stats Cards */}
       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
  <StatCard label="Jobs Posted" value={totalJobs} icon={Briefcase} />
<StatCard label="Total Applicants" value={totalApplicants} icon={Users} />
<StatCard label="Active Listings" value={totalJobs} icon={TrendingUp} />
</div>

        {/* Posted Jobs List */}
        <h2 className="text-xl font-semibold text-white mb-4">Your Posted Jobs</h2>

        <div className="flex flex-col gap-4">
          {dummyJobs.map((job) => {
            const count = dummyApplicants.filter((a) => a.jobId === job.id).length
            return (
              <div key={job.id} className="bg-gray-800 rounded-xl p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{job.title}</h3>
                  <p className="text-gray-400 text-sm">{job.type} · {job.location}</p>
                </div>
                <div className="flex items-center gap-6">
                  <p className="text-gray-300 text-sm">{count} applicants</p>
                  <Link to={`/recruiter/applicants/${job.id}`} className="text-blue-400 hover:underline text-sm font-medium">
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
import { useParams, Link } from 'react-router-dom'
import dummyApplicants from '../../data/dummyApplicants'
import dummyJobs from '../../data/dummyJobs'
import StatusBadge from '../../components/StatusBadge'

function ViewApplicants() {
  const { jobId } = useParams()

  const job = dummyJobs.find((j) => j.id === Number(jobId))
  const applicants = dummyApplicants.filter((a) => a.jobId === Number(jobId))

  return (
    <div className="min-h-screen px-6 py-10" style={{ backgroundColor: '#0b0f1a' }}>
      <div className="max-w-4xl mx-auto">

        <Link to="/recruiter/dashboard" className="text-blue-400 hover:underline text-sm">
          ← Back to Dashboard
        </Link>

        <h1 className="text-3xl font-bold text-white mt-4 mb-1">
          Applicants for {job ? job.title : 'this job'}
        </h1>
        <p className="text-gray-400 mb-8">
          {applicants.length} applicant{applicants.length !== 1 ? 's' : ''} found
        </p>

        {applicants.length === 0 ? (
          <p className="text-gray-400 text-center mt-10">
            No applicants yet for this job.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {applicants.map((a) => (
              <div
                key={a.id}
                className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-white font-semibold">{a.name}</h3>
                  <p className="text-gray-400 text-sm">{a.email}</p>
                  <p className="text-gray-500 text-xs mt-1">
                    Applied on {a.appliedDate}
                  </p>
                </div>

                <StatusBadge status={a.status} />
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default ViewApplicants
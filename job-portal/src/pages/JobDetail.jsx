import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import dummyJobs from '../data/dummyJobs'

function JobDetail() {
  const { id } = useParams()
  const job = dummyJobs.find((j) => j.id === Number(id))

  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverLetter: '',
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Application submitted:', { jobId: job.id, ...formData })
    // Yahan baad me Python backend ko POST request bhejenge
    setSubmitted(true)
  }

  function closeModal() {
    setShowModal(false)
    setSubmitted(false)
    setFormData({ name: '', email: '', coverLetter: '' })
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-white text-xl">Job not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl p-8">

        <Link to="/jobs" className="text-blue-400 hover:underline text-sm">
          ← Back to Jobs
        </Link>

        <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full mt-4 mb-3">
          {job.type}
        </span>

        <h1 className="text-3xl font-bold text-white mb-2">{job.title}</h1>
        <p className="text-gray-400 mb-1">{job.company}</p>
        <p className="text-gray-500 text-sm mb-6">{job.location}</p>

        <h2 className="text-lg font-semibold text-white mb-2">Description</h2>
        <p className="text-gray-300 mb-8">{job.description}</p>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Apply Now
        </button>

      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-4 z-50">
          <div className="bg-gray-800 rounded-2xl p-8 w-full max-w-md relative">

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <p className="text-4xl mb-3">✅</p>
                <h2 className="text-xl font-bold text-white mb-2">
                  Application Sent!
                </h2>
                <p className="text-gray-400 mb-6">
                  Your application for {job.title} has been submitted.
                </p>
                <button
                  onClick={closeModal}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-white mb-1">
                  Apply for {job.title}
                </h2>
                <p className="text-gray-400 text-sm mb-6">{job.company}</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-gray-300 text-sm mb-1 block">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-gray-300 text-sm mb-1 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-gray-300 text-sm mb-1 block">Cover Letter</label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Why are you a good fit for this role?"
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold mt-2"
                  >
                    Submit Application
                  </button>
                </form>
              </>
            )}

          </div>
        </div>
      )}
    </div>
  )
}

export default JobDetail
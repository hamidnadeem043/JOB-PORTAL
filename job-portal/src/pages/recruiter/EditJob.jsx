import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import dummyJobs from '../../data/dummyJobs'
import { JOB_TYPES } from '../../constants/jobTypes'

function EditJob() {
  const { id } = useParams()
  const navigate = useNavigate()

  const existingJob = dummyJobs.find((j) => j.id === Number(id))

  const [formData, setFormData] = useState({
    title: existingJob?.title || '',
    company: existingJob?.company || '',
    location: existingJob?.location || '',
    type: existingJob?.type || 'Internship',
    description: existingJob?.description || '',
  })

  if (!existingJob) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-white text-xl">Job not found.</p>
      </div>
    )
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Updated job:', { id: existingJob.id, ...formData })
    navigate('/recruiter/manage-jobs')
  }

  return (
    <div className="min-h-screen bg-gray-900 px-6 py-10">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-white mb-2">Edit Job</h1>
        <p className="text-gray-400 mb-6">Update the details of this job posting.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div>
            <label className="text-gray-300 text-sm mb-1 block">Job Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm mb-1 block">Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-300 text-sm mb-1 block">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm mb-1 block">Job Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              >
                {JOB_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-gray-300 text-sm mb-1 block">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold mt-2"
          >
            Save Changes
          </button>

        </form>
      </div>
    </div>
  )
}

export default EditJob
import { useState } from 'react'

function SeekerProfile() {
  const [formData, setFormData] = useState({
    name: 'Hamid Nadeem',
    email: 'hamid@example.com',
    phone: '',
    education: 'Software Engineering, Superior University, Lahore',
    skills: 'React, Tailwind CSS, JavaScript, Python',
    bio: '',
  })

  const [saved, setSaved] = useState(false)
  const [profilePic, setProfilePic] = useState(null)
  const [cvFile, setCvFile] = useState(null)

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setSaved(false)
  }

  function handleImageChange(e) {
    const file = e.target.files[0]
    if (file) {
      setProfilePic(URL.createObjectURL(file))
    }
  }

  function handleCvChange(e) {
    const file = e.target.files[0]
    if (file) {
      setCvFile(file)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Updated profile:', formData)
    console.log('CV file:', cvFile)
    // Yahan baad me Python backend ko FormData (profilePic + cvFile + formData) bhejenge
    setSaved(true)
  }

  return (
    <div className="min-h-screen bg-gray-900 px-6 py-10">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-white mb-2">My Profile</h1>
        <p className="text-gray-400 mb-6">Keep your profile updated to get better job matches.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Profile Picture */}
          <div className="flex flex-col items-center mb-4">
            <div className="w-24 h-24 rounded-full bg-gray-700 overflow-hidden flex items-center justify-center mb-3">
              {profilePic ? (
                <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-400 text-3xl">👤</span>
              )}
            </div>

            <label className="text-blue-400 hover:underline text-sm cursor-pointer">
              Change Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

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
            <label className="text-gray-300 text-sm mb-1 block">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+92 300 1234567"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm mb-1 block">Education</label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm mb-1 block">
              Skills <span className="text-gray-500">(comma separated)</span>
            </label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="React, Node.js, Python"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm mb-1 block">Short Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={3}
              placeholder="Tell recruiters a bit about yourself..."
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* CV / Resume Upload */}
          <div>
            <label className="text-gray-300 text-sm mb-1 block">Resume / CV</label>

            <label className="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-700 text-gray-300 cursor-pointer hover:bg-gray-600">
              <span className="text-sm truncate">
                {cvFile ? cvFile.name : 'Choose a PDF file...'}
              </span>
              <span className="text-blue-400 text-sm font-medium ml-3 shrink-0">
                Browse
              </span>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleCvChange}
                className="hidden"
              />
            </label>

            {cvFile && (
              <p className="text-gray-500 text-xs mt-1">
                {(cvFile.size / 1024).toFixed(0)} KB selected
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold mt-2"
          >
            Save Profile
          </button>

          {saved && (
            <p className="text-green-400 text-sm text-center">
              ✓ Profile updated successfully
            </p>
          )}

        </form>
      </div>
    </div>
  )
}

export default SeekerProfile
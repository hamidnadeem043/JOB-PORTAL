import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Register() {
  const { setRole: setAuthRole } = useAuth()
  const navigate = useNavigate()

  const [role, setRole] = useState('seeker')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
  })

  const [errors, setErrors] = useState({})

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setErrors({
      ...errors,
      [e.target.name]: '',
    })
  }

  function validate() {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (role === 'recruiter' && !formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setAuthRole(role)
    navigate(role === 'recruiter' ? '/recruiter/dashboard' : '/seeker/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#0b0f1a' }}>
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-white mb-2 text-center">
          Create Account
        </h1>
        <p className="text-gray-400 text-center mb-6">
          Join JobPortal as a Job Seeker or Recruiter
        </p>

        <div className="flex bg-white/5 border border-white/10 rounded-lg p-1 mb-6">
          <button
            type="button"
            onClick={() => setRole('seeker')}
            className={`flex-1 py-2 rounded-lg font-semibold transition ${
              role === 'seeker' ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white' : 'text-gray-300'
            }`}
          >
            Job Seeker
          </button>
          <button
            type="button"
            onClick={() => setRole('recruiter')}
            className={`flex-1 py-2 rounded-lg font-semibold transition ${
              role === 'recruiter' ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white' : 'text-gray-300'
            }`}
          >
            Recruiter
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

          <div>
            <label className="text-gray-300 text-sm mb-1 block">
              {role === 'seeker' ? 'Full Name' : 'Your Name'}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:ring-2 ${
                errors.name ? 'ring-2 ring-red-500' : 'focus:ring-blue-500'
              }`}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          {role === 'recruiter' && (
            <div>
              <label className="text-gray-300 text-sm mb-1 block">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Acme Corp"
                className={`w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:ring-2 ${
                  errors.companyName ? 'ring-2 ring-red-500' : 'focus:ring-blue-500'
                }`}
              />
              {errors.companyName && (
                <p className="text-red-400 text-xs mt-1">{errors.companyName}</p>
              )}
            </div>
          )}

          <div>
            <label className="text-gray-300 text-sm mb-1 block">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:ring-2 ${
                errors.email ? 'ring-2 ring-red-500' : 'focus:ring-blue-500'
              }`}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="text-gray-300 text-sm mb-1 block">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className={`w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:ring-2 ${
                errors.password ? 'ring-2 ring-red-500' : 'focus:ring-blue-500'
              }`}
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="text-gray-300 text-sm mb-1 block">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className={`w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:ring-2 ${
                errors.confirmPassword ? 'ring-2 ring-red-500' : 'focus:ring-blue-500'
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white py-2 rounded-lg font-semibold mt-2 transition-all"
          >
            Create Account
          </button>

        </form>

        <p className="text-gray-400 text-center mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Register
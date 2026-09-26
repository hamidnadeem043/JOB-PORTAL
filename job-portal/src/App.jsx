import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Jobs from './pages/Jobs'
import SeekerDashboard from './pages/seeker/SeekerDashboard'
import RecruiterDashboard from './pages/recruiter/RecruiterDashboard'
import JobDetail from './pages/JobDetail'
import PostJob from './pages/recruiter/PostJob'
import ManageJobs from './pages/recruiter/ManageJobs'
import MyApplications from './pages/seeker/MyApplications'
import ViewApplicants from './pages/recruiter/ViewApplicants'
import EditJob from './pages/recruiter/EditJob'
import SeekerProfile from './pages/seeker/SeekerProfile'
import NotFound from './pages/NotFound'



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/seeker/dashboard" element={<SeekerDashboard />} />
        <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/recruiter/post-job" element={<PostJob />} />
        <Route path="/recruiter/manage-jobs" element={<ManageJobs />} />
        <Route path="/seeker/applications" element={<MyApplications />} />
        <Route path="/recruiter/applicants/:jobId" element={<ViewApplicants />} />
        <Route path="/recruiter/edit-job/:id" element={<EditJob />} />
        <Route path="/seeker/profile" element={<SeekerProfile />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
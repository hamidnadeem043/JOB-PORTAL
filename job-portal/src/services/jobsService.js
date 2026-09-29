import dummyJobs from '../data/dummyJobs'

// Abhi ye dummy data return karta hai.
// Jab backend ready ho, sirf yahan fetch() call add karni hogi — baaki app nahi badlegi.

export async function getAllJobs() {
  return dummyJobs
}

export async function getJobById(id) {
  return dummyJobs.find((job) => job.id === Number(id))
}
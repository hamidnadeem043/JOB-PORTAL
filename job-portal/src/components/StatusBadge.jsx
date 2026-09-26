function StatusBadge({ status }) {
  const colors = {
    Accepted: 'bg-green-600',
    Rejected: 'bg-red-600',
    Pending: 'bg-yellow-600',
  }

  return (
    <span className={`text-white text-xs px-3 py-1 rounded-full ${colors[status] || 'bg-gray-600'}`}>
      {status}
    </span>
  )
}

export default StatusBadge
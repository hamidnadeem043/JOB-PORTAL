function StatCard({ label, value, valueColor = 'text-white', icon: Icon }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 flex items-center justify-between">
      <div>
        <p className="text-gray-400 text-sm mb-1">{label}</p>
        <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
      </div>
      {Icon && (
        <div className="bg-gray-700 p-3 rounded-lg">
          <Icon size={22} className={valueColor} />
        </div>
      )}
    </div>
  )
}

export default StatCard
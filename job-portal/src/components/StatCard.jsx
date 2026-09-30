function StatCard({ label, value, valueColor = 'text-white', icon: Icon }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between">
      <div>
        <p className="text-gray-400 text-sm mb-1">{label}</p>
        <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
      </div>
      {Icon && (
        <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
          <Icon size={22} className={valueColor} />
        </div>
      )}
    </div>
  )
}

export default StatCard
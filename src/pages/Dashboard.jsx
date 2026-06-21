function Dashboard() {
  const stats = [
    { label: "Total Reviews", value: 50 },
    { label: "Positive", value: 35 },
    { label: "Neutral", value: 10 },
    { label: "Negative", value: 5 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Dashboard
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200"
          >
            <p className="text-2xl font-bold text-purple-600">{stat.value}</p>
            <p className="text-gray-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Reviews
        </h2>
        <ul className="space-y-3 text-left">
          <li className="border-b pb-2 text-gray-700">
            "Lovely stay, very clean rooms." — <span className="text-green-600 font-medium">Positive</span>
          </li>
          <li className="border-b pb-2 text-gray-700">
            "Food could be better." — <span className="text-yellow-600 font-medium">Neutral</span>
          </li>
          <li className="text-gray-700">
            "WiFi did not work at all." — <span className="text-red-600 font-medium">Negative</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard

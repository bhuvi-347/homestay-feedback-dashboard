function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Homestay Feedback Analytics Dashboard
        </h1>
        <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto">
          AI-powered insights to help homestay owners understand guest feedback and improve service quality.
        </p>
      </section>

      {/* Cards Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Sentiment Analysis
          </h2>
          <p className="text-gray-600">
            Automatically classify guest reviews as positive, neutral, or negative using AI.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Smart Recommendations
          </h2>
          <p className="text-gray-600">
            Get AI-generated suggestions to improve cleanliness, service, and guest experience.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home

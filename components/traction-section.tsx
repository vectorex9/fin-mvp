export function TractionSection() {
  const metrics = [
    { value: "$15M", label: "Annual recurring revenue" },
    { value: "793", label: "Customers and counting" },
    { value: "198%", label: "Year on year growth" },
    { value: "92%", label: "Customer retention rate" },
    { value: "2+", label: "Years in business" },
    { value: "28", label: "Team members" },
  ]

  return (
    <section className="relative min-h-screen bg-gray-100 flex items-center justify-center px-8 lg:px-16 overflow-hidden">
      {/* Header */}
      <div className="absolute top-16 left-16">
        <span className="text-xs tracking-widest text-gray-600 uppercase font-mono">TRACTION</span>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-20 max-w-4xl">What you have achieved so far</h2>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl lg:text-6xl font-light text-gray-900 mb-4">{metric.value}</div>
              <div className="text-lg text-gray-600 max-w-xs mx-auto">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Blue Lines - Top Right */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 300 400" fill="none">
          {Array.from({ length: 8 }, (_, i) => (
            <path
              key={i}
              d={`M ${200 + i * 15} 0 Q ${100 + i * 20} 200 ${200 + i * 15} 400`}
              stroke="#3B82F6"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
          ))}
        </svg>
      </div>

      {/* Decorative Blue Lines - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 300 400" fill="none">
          {Array.from({ length: 8 }, (_, i) => (
            <path
              key={i}
              d={`M ${i * 15} 400 Q ${100 + i * 20} 200 ${i * 15} 0`}
              stroke="#3B82F6"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
          ))}
        </svg>
      </div>
    </section>
  )
}

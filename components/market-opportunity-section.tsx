export function MarketOpportunitySection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row w-full">
      {/* Left Side - Light */}
      <div className=" bg-gray-100 flex items-center justify-center px-8 lg:px-16 relative overflow-hidden md:w-1/2 w-full">
        {/* Header */}
        <div className="absolute top-16 left-16">
          <span className="text-xs tracking-widest text-gray-600 uppercase font-mono">MARKET OPPORTUNITY</span>
        </div>

        <div className="max-w-lg">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
            The potential market or customer base that you are trying to tap into
          </h2>
        </div>

        {/* Decorative Blue Lines */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
            {Array.from({ length: 10 }, (_, i) => (
              <path
                key={i}
                d={`M ${i * 40} 200 Q ${200} 100 ${i * 40 + 200} 0`}
                stroke="#3B82F6"
                strokeWidth="1"
                fill="none"
                opacity="0.4"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Right Side - Dark */}
      <div className="bg-gray-900 flex items-center justify-center p-8 lg:px-16 w-full md:w-1/2">
        <div className="relative">
          {/* Concentric Circles */}
          <div className="relative w-80 h-80">
            {/* TAM Circle */}
            <div className="absolute inset-0 w-80 h-80 rounded-full bg-blue-900 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-xs tracking-widest mb-2 opacity-80">TAM</div>
                <div className="text-2xl font-light">$4.5B</div>
              </div>
            </div>

            {/* SAM Circle */}
            <div className="absolute top-8 left-8 w-64 h-64 rounded-full bg-blue-700 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-xs tracking-widest mb-2 opacity-80">SAM</div>
                <div className="text-2xl font-light">$2B</div>
              </div>
            </div>

            {/* SOM Circle */}
            <div className="absolute top-16 left-16 w-48 h-48 rounded-full bg-blue-500 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-xs tracking-widest mb-2 opacity-80">SOM</div>
                <div className="text-2xl font-light">$876M</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

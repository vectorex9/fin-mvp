export function FinancialsSection() {
  const financialData = [
    { year: "Year 1", actual: 20, projected: 0 },
    { year: "Year 2", actual: 35, projected: 0 },
    { year: "Year 3", actual: 50, projected: 15 },
    { year: "Year 4", actual: 0, projected: 70 },
    { year: "Year 5", actual: 0, projected: 85 },
    { year: "Year 6", actual: 0, projected: 100 },
  ]

  return (
    <section id="financials" className="py-20 px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">PROBLEM</p>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-8">Financials</h2>

            <div className="space-y-6 text-gray-700">
              <p>
                Lorem ipsum dolor sit amet consectetur. Est facilisis amet consectetur eu egestas gravida eu. Tempor
                malesuada posuere id consequat eu tortor quam aenean. Tortor turpis lectus sem proin.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Est facilisis amet consectetur eu egestas gravida eu. Tempor
                malesuada posuere id consequat eu tortor quam aenean. Tortor turpis lectus sem proin.
              </p>
            </div>
          </div>

          {/* Right Content - Chart */}
          <div className="space-y-6">
            {/* Legend */}
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-black"></div>
                <span className="text-sm text-gray-600">ACTUAL</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-black bg-opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,black_2px,black_4px)]"></div>
                <span className="text-sm text-gray-600">PROJECTED</span>
              </div>
            </div>

            {/* Chart */}
            <div className="relative">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-80 flex flex-col justify-between text-sm text-gray-600">
                <span>$XX</span>
                <span>$XX</span>
                <span>$XX</span>
                <span>$XX</span>
                <span>$XX</span>
              </div>

              {/* Chart area */}
              <div className="ml-12 border-l border-b border-gray-300 h-80 relative">
                <div className="flex items-end justify-between h-full px-4">
                  {financialData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 flex-1">
                      <div className="flex flex-col items-center justify-end h-64 w-12">
                        {data.actual > 0 && (
                          <div className="w-full bg-black" style={{ height: `${(data.actual / 100) * 100}%` }}></div>
                        )}
                        {data.projected > 0 && (
                          <div
                            className="w-full bg-black bg-opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,black_2px,black_4px)]"
                            style={{ height: `${(data.projected / 100) * 100}%` }}
                          ></div>
                        )}
                      </div>
                      <span className="text-sm text-gray-600">{data.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

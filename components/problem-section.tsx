import Image from "next/image"

export function ProblemSection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row w-full">
      {/* Left Side - Light */}
      <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center px-8 lg:px-16">
        <div className="max-w-lg">
          {/* Header */}
          <div className="mb-8">
            <span className="text-xs tracking-widest text-gray-600 uppercase font-mono">PROBLEM</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-16">
            A challenge or issue that your company is trying to solve
          </h2>

          {/* Statistic Circle */}
          <div className="flex items-center gap-8">
            <div className="relative w-24 h-24">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#E5E7EB" strokeWidth="8" fill="none" />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#1F2937"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${87 * 2.51} ${(100 - 87) * 2.51}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-light text-gray-900">87%</span>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-lg text-gray-700 leading-relaxed">
                A fact to back up your problem statement - Purus aenean odio egestas pellentesque
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 relative">
        <Image src="/professional-business-meeting-with-diverse-team-di.png" alt="Business meeting" fill className="object-cover" />
      </div>
    </section>
  )
}

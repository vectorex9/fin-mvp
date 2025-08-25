export function WorldMapSection() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-center px-8 lg:px-16 relative overflow-hidden">
      {/* Left Content */}
      <div className="w-1/2 z-10">
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs tracking-widest text-gray-400 uppercase font-mono">SUBHEADING</span>
        </div>

        <h2 className="text-5xl lg:text-6xl font-light mb-16">
          Lorem ipsum
          <br />
          dolor
        </h2>

        {/* Stats */}
        <div className="flex gap-16">
          <div>
            <div className="text-4xl font-light mb-2">XX XX</div>
            <div className="text-gray-400">Lorem ipsum dolor</div>
          </div>
          <div>
            <div className="text-4xl font-light mb-2">XX XX</div>
            <div className="text-gray-400">Lorem ipsum dolor</div>
          </div>
        </div>
      </div>

      {/* World Map SVG */}
      <div className="absolute right-0 top-0 w-3/4 h-full opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none">
          {/* Simplified world map outline */}
          <path
            d="M150 200 Q200 180 250 200 L300 190 Q350 200 400 210 L450 200 Q500 190 550 200 L600 210 Q650 200 700 190 L750 200 Q800 210 850 200"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M100 250 Q150 240 200 250 L250 240 Q300 250 350 260 L400 250 Q450 240 500 250 L550 260 Q600 250 650 240 L700 250 Q750 260 800 250"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M200 300 Q250 290 300 300 L350 290 Q400 300 450 310 L500 300 Q550 290 600 300 L650 310 Q700 300 750 290"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
    </section>
  )
}

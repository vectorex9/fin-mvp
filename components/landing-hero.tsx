export function LandingHero() {
    return (
        <section
            id='home'
            className='relative min-h-screen bg-gray-900 text-white flex items-center justify-between px-8 lg:px-16 overflow-hidden pt-16'
        >
            {/* Pitch Deck Label */}
            {/* <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
        <span className="text-xs tracking-widest text-gray-400 uppercase">PITCH DECK</span>
      </div> */}

            {/* Main Content */}
            <div className='max-w-2xl'>
                <h1 className='text-6xl lg:text-7xl font-light leading-tight mb-8'>
                    The leading
                    <br />
                    essential
                    <br />
                    investment firm
                </h1>
            </div>

            <div className='absolute -right-56 top-0 w-1/2 h-full flex items-center justify-center'>
                <img
                    src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%20Illustration-KNH72Gw0c73TqWwTgjOsaONpIWSiFL.svg'
                    alt='Vector Illustration'
                    className='w-full h-auto max-w-lg opacity-80'
                />
            </div>
        </section>
    );
}

export function HeroSection() {
  return (
    <section id="hero" className="w-full bg-white px-8 py-20 pt-32">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center text-center">
        {/* Tagline */}
        <p className="mb-4 text-lg font-medium text-gray-600">
          Anytime, Anywhere.
        </p>

        {/* Main Heading */}
        <h1 className="mb-6 text-5xl font-bold text-gray-900">
          Buy Airtime & Data Instantly
        </h1>

        {/* Description */}
        <p className="mb-8 max-w-2xl text-lg text-gray-600">
          Purchase international airtime and data bundles in seconds.
          <br />
          Fast delivery, secure payment, no stress.
        </p>

        {/* CTA Button */}
        <button className="flex items-center gap-2 rounded-lg bg-[#0D9488] px-8 py-4 text-base font-semibold text-white hover:bg-[#0F766E] transition-colors">
          Download App
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16666 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

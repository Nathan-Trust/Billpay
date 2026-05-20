export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full bg-[#0D9488] px-8 py-20">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Title */}
        <div className="mb-16 flex items-center justify-center gap-8">
          <div className="h-px w-24 bg-white"></div>
          <h2 className="text-center text-3xl font-bold text-white">
            HOW IT WORKS
          </h2>
          <div className="h-px w-24 bg-white"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Step 1 - Select Network */}
          <div className="flex flex-col items-start">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white">
              <span className="text-3xl font-bold text-[#0D9488]">1</span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">
              Select Network
            </h3>
            <p className="text-lg text-white/90">
              Choose from our wide range of supported networks and countries.
            </p>
          </div>

          {/* Step 2 - Enter Details */}
          <div className="flex flex-col items-start">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white">
              <span className="text-3xl font-bold text-[#0D9488]">2</span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">
              Enter Details
            </h3>
            <p className="text-lg text-white/90">
              Input the phone number and select your airtime or data amount.
            </p>
          </div>

          {/* Step 3 - Instant Delivery */}
          <div className="flex flex-col items-start">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white">
              <span className="text-3xl font-bold text-[#0D9488]">3</span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">
              Instant Delivery
            </h3>
            <p className="text-lg text-white/90">
              Pay securely and airtime or data is delivered in seconds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

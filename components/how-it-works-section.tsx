export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full bg-[#0B5132] px-8 py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex items-center justify-center gap-8">
          <div className="h-px w-24 bg-white"></div>
          <h2 className="text-center text-3xl font-bold text-white">
            HOW IT WORKS
          </h2>
          <div className="h-px w-24 bg-white"></div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white">
              <span className="text-3xl font-bold text-[#0B5132]">1</span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">
              Select Network
            </h3>
            <p className="text-lg text-white/90">
              Choose from our wide range of supported networks and countries.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white">
              <span className="text-3xl font-bold text-[#0B5132]">2</span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">
              Enter Details
            </h3>
            <p className="text-lg text-white/90">
              Input the phone number and select your airtime or data amount.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white">
              <span className="text-3xl font-bold text-[#0B5132]">3</span>
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

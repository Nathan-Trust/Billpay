export function FeaturesSection() {
  return (
    <section id="features" className="w-full bg-white px-8 py-20">
      <div className="mx-auto max-w-[1440px]">
        {/* Top section - Heading and Description */}
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Heading */}
          <div>
            <h2 className="text-5xl font-bold leading-tight text-gray-900">
              Designed to Help You
              <br />
              Buy Airtime & Data With
              <br />
              Zero Hassle
            </h2>
          </div>

          {/* Right - Description */}
          <div className="flex items-center">
            <p className="text-lg text-gray-600">
              Our app lets you purchase international airtime and mobile data
              bundles instantly without complications. Whether you&apos;re
              topping up for yourself or sending airtime to loved ones abroad,
              we make the process seamless, secure, and beautifully intuitive so
              you can stay connected effortlessly.
            </p>
          </div>
        </div>

        {/* Bottom section - Feature Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Simple Experience */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Simple Experience
            </h3>
            <p className="text-lg text-gray-600">
              Purchase airtime and data bundles instantly — fast, simple, and
              secure.
            </p>
          </div>

          {/* Global Coverage */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              International Coverage
            </h3>
            <p className="text-lg text-gray-600">
              Send airtime and data to multiple countries and networks. Stay
              connected with loved ones anywhere in the world.
            </p>
          </div>

          {/* Secure Payments */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Secure Payments
            </h3>
            <p className="text-lg text-gray-600">
              Enjoy fast, protected transactions with top-tier security that
              keeps your personal and financial information safe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

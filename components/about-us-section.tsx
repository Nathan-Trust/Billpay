import Image from "next/image";

export function AboutUsSection() {
  return (
    <section id="about" className="w-full bg-white px-8 py-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left side - Image */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-gray-100">
          <Image
            src="/5858f3c301db6732124768580ca73b34ee97b05a.png"
            alt="Person using Billpay app on multiple devices"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col">
          <span className="mb-4 inline-block w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0B5132]">
            About us
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Staying connected, made simple
          </h2>

          <div className="mb-8 space-y-4 text-lg leading-relaxed text-gray-600">
            <p>
              We believe staying connected should be simple. That&apos;s why we
              created Billpay — a utility app that makes purchasing international
              airtime and mobile data bundles effortless. From selection to
              delivery, we&apos;ve designed every step to be smooth, fast, and
              reliable.
            </p>

            <p>
              Whether you&apos;re topping up your own phone, sending airtime to
              family abroad, or managing your data usage, our goal is to make
              the experience seamless. We&apos;re here to offer instant
              delivery, secure transactions, and a service you can count on
              every day.
            </p>
          </div>

          {/* CTA Button */}
          <button className="group flex w-fit items-center gap-2 rounded-xl bg-[#0B5132] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all hover:-translate-y-0.5 hover:bg-[#063D24] hover:shadow-xl">
            Download App
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:translate-x-1"
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
      </div>
    </section>
  );
}

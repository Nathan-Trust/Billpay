import { Zap, Globe2, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Simple Experience",
    body: "Purchase airtime and data bundles instantly — fast, simple, and secure.",
  },
  {
    icon: Globe2,
    title: "International Coverage",
    body: "Send airtime and data to multiple countries and networks. Stay connected with loved ones anywhere in the world.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    body: "Enjoy fast, protected transactions with top-tier security that keeps your personal and financial information safe.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="w-full bg-white px-8 py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Top section - Heading and Description */}
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="mb-4 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0B5132]">
              Why Billpay
            </span>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
              Designed to help you buy{" "}
              <span className="text-[#0B5132]">airtime &amp; data</span> with
              zero hassle
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-lg leading-relaxed text-gray-600">
              Our app lets you purchase international airtime and mobile data
              bundles instantly without complications. Whether you&apos;re
              topping up for yourself or sending airtime to loved ones abroad,
              we make the process seamless, secure, and beautifully intuitive
              so you can stay connected effortlessly.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-[#0B5132] transition-colors group-hover:bg-[#0B5132] group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
              <p className="text-base leading-relaxed text-gray-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

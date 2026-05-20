import { Signal, PhoneCall, Send } from "lucide-react";

const steps = [
  {
    icon: Signal,
    title: "Select Network",
    body: "Choose from our wide range of supported networks and countries.",
  },
  {
    icon: PhoneCall,
    title: "Enter Details",
    body: "Input the phone number and select your airtime or data amount.",
  },
  {
    icon: Send,
    title: "Instant Delivery",
    body: "Pay securely and airtime or data is delivered in seconds.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative w-full overflow-hidden bg-[#0B5132] px-8 py-24"
    >
      {/* Soft radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Three simple steps
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            How it works
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Connecting dashed line on desktop */}
          <div
            aria-hidden
            className="absolute top-8 left-[16%] right-[16%] hidden border-t-2 border-dashed border-white/25 md:block"
          />

          {steps.map(({ icon: Icon, title, body }, idx) => (
            <div
              key={title}
              className="relative flex flex-col items-center text-center md:items-start md:text-left"
            >
              {/* Numbered icon badge */}
              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#0B5132] shadow-lg">
                <Icon className="h-7 w-7" />
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-300 text-sm font-bold text-[#0B5132] ring-4 ring-[#0B5132]">
                  {idx + 1}
                </span>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-white">{title}</h3>
              <p className="max-w-xs text-base leading-relaxed text-white/80">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

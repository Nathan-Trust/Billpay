import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-white px-8 pt-32 pb-24"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-32 -right-20 h-80 w-80 rounded-full bg-emerald-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center justify-center text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-[#0B5132] shadow-sm backdrop-blur">
          <Sparkles className="h-4 w-4" />
          Anytime, anywhere — instantly delivered
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 max-w-4xl text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
          Buy Airtime & Data{" "}
          <span className="relative inline-block text-[#0B5132]">
            Instantly
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-emerald-200/70"
            />
          </span>
        </h1>

        {/* Description */}
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
          Top up any number, any network, anywhere in the world. Secure
          payments, instant delivery, zero stress.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/download"
            className="group flex items-center gap-2 rounded-xl bg-[#0B5132] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all hover:-translate-y-0.5 hover:bg-[#063D24] hover:shadow-xl hover:shadow-emerald-900/25"
          >
            Download App
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#how-it-works"
            className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-white px-7 py-4 text-base font-semibold text-[#0B5132] transition-colors hover:bg-emerald-50"
          >
            See how it works
          </Link>
        </div>

        {/* Trust strip */}
        <div className="mt-14 grid grid-cols-1 gap-6 text-sm text-gray-600 sm:grid-cols-3 sm:gap-10">
          <div className="flex items-center justify-center gap-2">
            <Zap className="h-4 w-4 text-[#0B5132]" />
            Delivered in seconds
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#0B5132]" />
            Bank-grade security
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-[#0B5132]" />
            150+ networks worldwide
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    quote:
      "I've tried different platforms, but this one is by far the most seamless. My gift cards arrive instantly and the payment process is smooth and secure.",
    name: "Chinedu Okonkwo",
    location: "Lagos",
  },
  {
    id: 2,
    quote:
      "Secure, fast, and very reliable. I use it almost every week for gaming cards and it has never failed me.",
    name: "Adaeze Nwachukwu",
    location: "Abuja",
  },
  {
    id: 3,
    quote:
      "The best platform for buying gift cards in Nigeria. The rates are always competitive and customer support is top-notch!",
    name: "Oluwaseun Adeyemi",
    location: "Ibadan",
  },
  {
    id: 4,
    quote:
      "I was skeptical at first, but after my first transaction I became a loyal customer. Very trustworthy service!",
    name: "Amina Yusuf",
    location: "Kano",
  },
  {
    id: 5,
    quote:
      "Quick delivery, easy to use, and the app is super intuitive. I recommend this to all my friends and family.",
    name: "Emeka Eze",
    location: "Port Harcourt",
  },
  {
    id: 6,
    quote:
      "Finally, a platform that understands what Nigerians need. No stress, no delays, just smooth transactions every time.",
    name: "Funmilayo Bakare",
    location: "Enugu",
  },
];

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full bg-gradient-to-b from-white via-emerald-50/40 to-white px-8 py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section Title */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0B5132]">
            What people are saying
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Loved by users across Nigeria
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5">
                  {/* Quote Icon */}
                  <div className="mb-4 text-[#0B5132]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.695-1.327-.825-.55-.13-1.07-.14-1.54-.03-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.012z" />
                    </svg>
                  </div>

                  {/* Quote Text */}
                  <p className="mb-6 flex-grow leading-relaxed text-gray-700">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-[#0B5132]">
                      {initialsOf(testimonial.name)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}, Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

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

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full bg-white px-8 py-20">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Title */}
        <div className="mb-16 flex items-center justify-center gap-8">
          <div className="h-px w-24 bg-gray-300"></div>
          <h2 className="text-center text-3xl font-bold text-gray-900">
            TESTIMONIALS
          </h2>
          <div className="h-px w-24 bg-gray-300"></div>
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
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border-2 border-[#0D9488] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  {/* Quote Icon */}
                  <div className="mb-4 text-[#0D9488]">
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
                  <p className="mb-6 flex-grow text-gray-700 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#0D9488]">
                      {testimonial.location}, Nigeria
                    </p>
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

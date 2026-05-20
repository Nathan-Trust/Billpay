"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-white px-4 py-4 md:px-8 md:py-6 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 z-50"
        >
          <Image
            src="/Billpay%20logo.png"
            alt="Billpay Logo"
            width={141}
            height={48}
            priority
            className="w-[100px] h-auto md:w-[141px]"
          />
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-base font-medium text-gray-900 hover:text-[#0D9488] transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-base font-medium text-gray-900 hover:text-[#0D9488] transition-colors"
          >
            Why Choose Us?
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-base font-medium text-gray-900 hover:text-[#0D9488] transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-base font-medium text-gray-900 hover:text-[#0D9488] transition-colors"
          >
            Testimonials
          </button>
        </div>

        {/* Desktop CTA Button */}
        <Link
          href="/download"
          className="hidden lg:flex items-center gap-2 rounded-lg bg-[#0D9488] px-6 py-3 text-base font-semibold text-white hover:bg-[#0F766E] transition-colors"
        >
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
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden z-50 p-2 text-gray-900 hover:text-[#0D9488] transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            // Close icon
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[64px] md:top-[88px] left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-left text-base font-medium text-gray-900 hover:text-[#0D9488] transition-colors py-2"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-left text-base font-medium text-gray-900 hover:text-[#0D9488] transition-colors py-2"
          >
            Why Choose Us?
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-left text-base font-medium text-gray-900 hover:text-[#0D9488] transition-colors py-2"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-left text-base font-medium text-gray-900 hover:text-[#0D9488] transition-colors py-2"
          >
            Testimonials
          </button>
          <Link
            href="/download"
            className="flex items-center justify-center gap-2 rounded-lg bg-[#0D9488] px-6 py-3 text-base font-semibold text-white hover:bg-[#0F766E] transition-colors mt-2"
          >
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
          </Link>
        </div>
      </div>
    </nav>
  );
}

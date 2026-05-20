import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="px-8 py-20 pt-32">
        <div className="mx-auto max-w-4xl">
          {/* Back Link */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-[#0B5132] hover:text-[#063D24] transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8333 10H4.16666M4.16666 10L9.16666 5M4.16666 10L9.16666 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </Link>

          {/* Page Title */}
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Privacy Policy
          </h1>

          <p className="mb-8 text-lg text-gray-600">
            Effective Date: May 20, 2026
          </p>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              Billpay (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, store, and protect your information when you
              use the Billpay mobile application (&quot;App&quot; or
              &quot;Service&quot;).
            </p>

            <p className="mb-6">
              By using Billpay, you agree to the practices described in this
              Privacy Policy.
            </p>

            {/* Section 1 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              1. Information We Collect
            </h2>
            <p className="mb-4">We may collect the following information:</p>
            <ul className="mb-6 list-disc pl-6 space-y-2">
              <li>Full name</li>
              <li>Email address</li>
            </ul>

            {/* Section 2 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information collected to:</p>
            <ul className="mb-6 list-disc pl-6 space-y-2">
              <li>Provide and maintain the Billpay service</li>
              <li>Communicate service updates and important notices</li>
              <li>Improve app functionality and user experience</li>
              <li>Prevent fraud and unauthorized activities</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>

            {/* Section 3 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              3. Sharing of Information
            </h2>
            <p className="mb-4">
              We do not sell or rent your personal information. We may share
              information only with:
            </p>
            <ul className="mb-6 list-disc pl-6 space-y-2">
              <li>
                Telecom operators involved in service delivery, where necessary
              </li>
              <li>Technical service providers supporting app functionality</li>
              <li>
                Law enforcement or regulatory authorities when required by law
              </li>
            </ul>

            {/* Section 4 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              4. Data Security
            </h2>
            <p className="mb-6">
              We implement reasonable technical and organizational measures to
              protect your information against unauthorized access, loss, or
              misuse. However, no method of transmission over the internet is
              completely secure.
            </p>

            {/* Section 5 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              5. Data Retention
            </h2>
            <p className="mb-6">
              We retain personal information only for as long as necessary to
              provide our services, comply with legal obligations, and resolve
              disputes.
            </p>

            {/* Section 6 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              6. User Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="mb-6 list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>
                Request deletion of your data, subject to legal requirements
              </li>
              <li>Withdraw consent where applicable</li>
            </ul>

            {/* Section 7 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              7. Children&apos;s Privacy
            </h2>
            <p className="mb-6">
              Billpay is intended for general use. We do not knowingly collect
              personal information from children without parental consent.
            </p>

            {/* Section 8 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              8. Changes to This Privacy Policy
            </h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. Updates will
              be posted within the App or on our website.
            </p>

            {/* Section 9 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              9. Governing Law
            </h2>
            <p className="mb-6">
              This Privacy Policy is governed by the laws of the Federal
              Republic of Nigeria.
            </p>

            {/* Section 10 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              10. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <p className="mb-2">
              <strong>Email:</strong> officialbillpay2@gmail.com
            </p>
            <p className="mb-6">
              <strong>App Name:</strong> Billpay
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

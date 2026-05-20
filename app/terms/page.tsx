import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function TermsPage() {
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
            Terms and Conditions
          </h1>

          <p className="mb-8 text-lg text-gray-600">
            Effective Date: May 20, 2026
          </p>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              These Terms and Conditions (&quot;Terms&quot;) govern your access
              to and use of the Billpay mobile application (&quot;App&quot; or
              &quot;Service&quot;). By using Billpay, you agree to these Terms.
              If you do not agree, please discontinue use of the App.
            </p>

            {/* Section 1 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              1. Description of Service
            </h2>
            <p className="mb-4">
              Billpay is a utility application that allows users to:
            </p>
            <ul className="mb-6 list-disc pl-6 space-y-2">
              <li>Purchase international airtime</li>
              <li>Purchase mobile data bundles</li>
              <li>Manage and monitor airtime and data usage</li>
            </ul>

            {/* Section 2 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              2. Eligibility
            </h2>
            <p className="mb-6">
              Billpay is available to users of all ages. Users are responsible
              for ensuring that their use of the App complies with applicable
              laws and regulations in their country.
            </p>

            {/* Section 3 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              3. User Account Responsibilities
            </h2>
            <p className="mb-6">
              You are responsible for safeguarding your login credentials. All
              activities performed through your account are your responsibility.
              You must notify Billpay immediately if you suspect unauthorized
              access.
            </p>

            {/* Section 4 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              4. Airtime & Data Services
            </h2>
            <p className="mb-6">
              Airtime and data are delivered through third-party telecom
              providers. Delivery depends on correct recipient phone number and
              selected network. Once airtime or data is successfully delivered,
              the transaction cannot be reversed.
            </p>

            {/* Section 5 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              5. Payments & Charges
            </h2>
            <p className="mb-6">
              All prices are displayed before transaction confirmation. Payment
              must be completed before service delivery. Billpay may update
              pricing or service charges at any time without prior notice.
            </p>

            {/* Section 6 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              6. Refunds & Failed Transactions
            </h2>
            <p className="mb-6">
              Completed airtime and data purchases are non-refundable. Refunds
              may be considered only if payment was successful but service was
              not delivered due to a technical issue on Billpay&apos;s platform.
            </p>

            {/* Section 7 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              7. Prohibited Activities
            </h2>
            <p className="mb-6">
              Users must not use the App for fraudulent, abusive, or illegal
              purposes, provide false information, disrupt system security, or
              exploit system errors.
            </p>

            {/* Section 8 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              8. Service Availability
            </h2>
            <p className="mb-6">
              Billpay aims to provide reliable service but does not guarantee
              uninterrupted access. Temporary downtime may occur due to
              maintenance, upgrades, or network issues.
            </p>

            {/* Section 9 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              9. Third-Party Providers
            </h2>
            <p className="mb-6">
              Billpay integrates with third-party telecom operators and technical
              service providers. Billpay is not responsible for service failures
              caused by these third parties.
            </p>

            {/* Section 10 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              10. Limitation of Liability
            </h2>
            <p className="mb-6">
              Billpay shall not be liable for indirect or consequential damages.
              Liability shall not exceed the amount paid for the affected
              transaction.
            </p>

            {/* Section 11 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              11. Intellectual Property
            </h2>
            <p className="mb-6">
              All content, trademarks, logos, software, and designs within
              Billpay are owned by or licensed to Billpay.
            </p>

            {/* Section 12 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              12. Account Suspension & Termination
            </h2>
            <p className="mb-6">
              Billpay may suspend or terminate access without notice if these
              Terms are violated, fraud is suspected, or required by law.
            </p>

            {/* Section 13 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              13. Governing Law
            </h2>
            <p className="mb-6">
              These Terms and Conditions shall be governed by and interpreted in
              accordance with the laws of the Federal Republic of Nigeria.
            </p>

            {/* Section 14 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              14. Changes to These Terms
            </h2>
            <p className="mb-6">
              Billpay may revise these Terms at any time. Continued use of the
              App constitutes acceptance of updated Terms.
            </p>

            {/* Section 15 */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
              15. Contact Information
            </h2>
            <p className="mb-2">
              <strong>Email:</strong> officialbillpay@gmail.com
            </p>
            <p className="mb-2">
              <strong>App Name:</strong> Billpay
            </p>
            <p className="mb-6">
              <strong>Category:</strong> Utility Application
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

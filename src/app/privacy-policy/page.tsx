import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy Policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 22, 2025";

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              {siteConfig.name}
            </Link>
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Effective Date:</strong> {lastUpdated}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Last Updated:</strong> {lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              1. Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Welcome to {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              We respect your privacy and are committed to protecting your personal data. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website{" "}
              <a
                href={siteConfig.url}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                {siteConfig.url}
              </a>{" "}
              and use our services.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              By accessing or using our website, you agree to the terms outlined in this Privacy
              Policy. If you do not agree with our policies and practices, please do not use our
              services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              2. Information We Collect
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We collect several types of information from and about users of our website:
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                2.1 Personal Information
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may collect personally identifiable information that you voluntarily provide to
                us, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Billing and shipping information</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Account credentials (username and password)</li>
                <li>Order history and preferences</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                2.2 Automatically Collected Information
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When you access our website, we automatically collect certain information about
                your device and browsing activity:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>IP address and device identifiers</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring URLs and pages visited</li>
                <li>Time and date of visits</li>
                <li>Clickstream data and navigation patterns</li>
                <li>Geographic location information</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                2.3 Cookies and Tracking Technologies
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We use cookies, web beacons, and similar tracking technologies to collect
                information about your browsing activities and to remember your preferences.
              </p>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Processing and fulfilling your orders</li>
              <li>Communicating with you about your orders, products, and services</li>
              <li>Providing customer support and responding to your inquiries</li>
              <li>Personalizing your shopping experience</li>
              <li>Sending promotional emails and marketing communications (with your consent)</li>
              <li>Improving our website, products, and services</li>
              <li>Analyzing usage trends and preferences</li>
              <li>Detecting, preventing, and addressing fraud, security issues, and technical problems</li>
              <li>Complying with legal obligations and enforcing our terms and conditions</li>
              <li>Conducting research and analytics</li>
            </ul>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience on our
              website. Cookies are small data files stored on your device that help us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Provide personalized content and recommendations</li>
              <li>Analyze website performance and traffic</li>
              <li>Deliver targeted advertising</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              You can control cookies through your browser settings. However, disabling cookies
              may affect the functionality of our website.
            </p>

            <div className="space-y-3 mt-4">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Types of Cookies We Use:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and personalize your experience</li>
                <li><strong>Marketing Cookies:</strong> Track your browsing activity to deliver relevant advertisements</li>
              </ul>
            </div>
          </section>

          {/* Data Sharing and Third Parties */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              5. Data Sharing and Third-Party Services
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may share your information with third parties in the following circumstances:
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                5.1 Service Providers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We work with trusted third-party service providers who assist us in operating our
                website and conducting our business, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Payment processors (for secure payment processing)</li>
                <li>Shipping and fulfillment partners</li>
                <li>Email service providers</li>
                <li>Analytics and marketing platforms</li>
                <li>Cloud hosting and infrastructure providers</li>
                <li>Customer support tools</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                5.2 Business Transfers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                In the event of a merger, acquisition, reorganization, or sale of assets, your
                information may be transferred as part of that transaction.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                5.3 Legal Requirements
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may disclose your information if required by law, court order, or governmental
                regulation, or if we believe disclosure is necessary to protect our rights, your
                safety, or the safety of others.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                5.4 Social Media Platforms
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may share content and information with social media platforms (including
                Pinterest, Instagram, Facebook, and Twitter) for marketing and promotional purposes.
                These platforms have their own privacy policies that govern how they use your data.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              6. Data Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect
              your personal information from unauthorized access, alteration, disclosure, or
              destruction. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure socket layer (SSL) technology</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication protocols</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              However, no method of transmission over the internet or electronic storage is 100%
              secure. While we strive to protect your personal information, we cannot guarantee
              absolute security.
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              7. Your Rights and Choices
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal
              information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a structured, commonly used format</li>
              <li><strong>Restriction:</strong> Request restriction of processing of your personal information</li>
              <li><strong>Objection:</strong> Object to our processing of your personal information</li>
              <li><strong>Withdraw Consent:</strong> Withdraw your consent to data processing at any time</li>
            </ul>

            <div className="space-y-3 mt-4">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Marketing Communications
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You can opt out of receiving promotional emails from us by clicking the
                &quot;unsubscribe&quot; link in any marketing email or by contacting us directly.
                Please note that even if you opt out of marketing communications, we may still
                send you transactional emails related to your orders and account.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Do Not Track Signals
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Some browsers include a &quot;Do Not Track&quot; (DNT) feature. Currently, there
                is no industry standard for how to respond to DNT signals. Our website does not
                currently respond to DNT signals.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              8. Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our website and services are not intended for children under the age of 13 (or 16
              in certain jurisdictions). We do not knowingly collect personal information from
              children. If we become aware that we have collected personal information from a
              child without parental consent, we will take steps to delete that information as
              quickly as possible.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you believe we have collected information from a child, please contact us
              immediately at{" "}
              <a
                href={`mailto:privacy@${siteConfig.url.replace("https://", "").replace("http://", "")}`}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                privacy@{siteConfig.url.replace("https://", "").replace("http://", "")}
              </a>
              .
            </p>
          </section>

          {/* International Data Transfers */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              9. International Data Transfers
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Your information may be transferred to, stored, and processed in countries other
              than your country of residence. These countries may have data protection laws that
              differ from the laws of your country.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When we transfer your personal information internationally, we ensure appropriate
              safeguards are in place to protect your data in accordance with this Privacy Policy
              and applicable laws, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Standard contractual clauses approved by relevant authorities</li>
              <li>Adequacy decisions recognizing equivalent data protection standards</li>
              <li>Binding corporate rules for transfers within our organization</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              10. Data Retention
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes
              outlined in this Privacy Policy, unless a longer retention period is required or
              permitted by law. The criteria we use to determine retention periods include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>The length of time we have an ongoing relationship with you</li>
              <li>Whether there is a legal obligation to retain the data</li>
              <li>Whether retention is advisable in light of our legal position (such as for statute of limitations, litigation, or regulatory investigations)</li>
            </ul>
          </section>

          {/* Third-Party Links */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              11. Third-Party Links and Services
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our website may contain links to third-party websites, services, or applications that
              are not operated by us. This Privacy Policy does not apply to third-party sites. We
              are not responsible for the privacy practices of third parties.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We encourage you to review the privacy policies of any third-party sites you visit
              or services you use.
            </p>
          </section>

          {/* California Privacy Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              12. California Privacy Rights (CCPA)
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you are a California resident, you have additional rights under the California
              Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Right to know what personal information we collect, use, disclose, and sell</li>
              <li>Right to request deletion of your personal information</li>
              <li>Right to opt-out of the sale of your personal information (we do not sell personal information)</li>
              <li>Right to non-discrimination for exercising your CCPA rights</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              To exercise these rights, please contact us using the contact information provided below.
            </p>
          </section>

          {/* GDPR Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              13. European Privacy Rights (GDPR)
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you are located in the European Economic Area (EEA), United Kingdom, or
              Switzerland, you have certain rights under the General Data Protection Regulation
              (GDPR):
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
              <li>Right to lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Our legal basis for processing your personal data includes consent, contractual
              necessity, legal obligations, and legitimate interests.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              14. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, technology, legal requirements, or other factors. We will notify you of
              any material changes by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Posting the updated Privacy Policy on this page</li>
              <li>Updating the &quot;Last Updated&quot; date at the top of this policy</li>
              <li>Sending you an email notification (for significant changes)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Your continued use of our website after any changes indicates your acceptance of
              the updated Privacy Policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              15. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or
              our data practices, please contact us:
            </p>
            <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Company Name:</strong> {siteConfig.name}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:privacy@${siteConfig.url.replace("https://", "").replace("http://", "")}`}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  privacy@{siteConfig.url.replace("https://", "").replace("http://", "")}
                </a>
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href={siteConfig.url}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  {siteConfig.url}
                </a>
              </p>
              <p>
                <strong>Contact Page:</strong>{" "}
                <Link
                  href="/contact-us"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  {siteConfig.url}/contact-us
                </Link>
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              We will respond to your inquiry within a reasonable timeframe, typically within 30
              days.
            </p>
          </section>

          {/* Consent */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              16. Consent
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              By using our website and services, you consent to the collection, use, and disclosure
              of your information as described in this Privacy Policy.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {siteConfig.name} All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/terms-of-service"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact-us"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: `Terms of Service for ${siteConfig.name}. Please read these terms carefully before using our services.`,
};

export default function TermsOfServicePage() {
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
              Terms of Service
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
              1. Introduction and Acceptance of Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Welcome to {siteConfig.name}. These Terms of Service (&quot;Terms,&quot;
              &quot;Agreement&quot;) govern your access to and use of our website located at{" "}
              <a
                href={siteConfig.url}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                {siteConfig.url}
              </a>{" "}
              (&quot;Website,&quot; &quot;Service&quot;) and any products or services offered
              through the Website.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              By accessing or using our Website, you agree to be bound by these Terms and all
              applicable laws and regulations. If you do not agree with any part of these Terms,
              you must not use our Website or services.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Please read these Terms carefully before using our Service. These Terms constitute
              a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or
              &quot;your&quot;) and {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;).
            </p>
          </section>

          {/* Eligibility */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              2. Eligibility
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To use our Website and purchase products, you must:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Be at least 18 years of age or the age of majority in your jurisdiction</li>
              <li>Have the legal capacity to enter into a binding contract</li>
              <li>Not be prohibited from using our services under applicable law</li>
              <li>Provide accurate, current, and complete information during registration</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              By using our Website, you represent and warrant that you meet all of these
              eligibility requirements. If you do not meet these requirements, you must not
              access or use the Website.
            </p>
          </section>

          {/* Account Registration */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              3. Account Registration and Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To access certain features of our Website, you may be required to create an account.
              When creating an account, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Provide accurate, truthful, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security and confidentiality of your account credentials</li>
              <li>Notify us immediately of any unauthorized access or security breach</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Not share your account credentials with any third party</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              We reserve the right to suspend or terminate your account if we suspect any
              fraudulent, abusive, or illegal activity, or if you violate these Terms.
            </p>
          </section>

          {/* Products and Services */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              4. Products and Services
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {siteConfig.name} offers minimalist, high-quality apparel and related products for
              sale through our Website.
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                4.1 Product Descriptions
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We strive to provide accurate descriptions, images, and specifications for all
                products. However, we do not warrant that product descriptions, colors, images,
                or other content are accurate, complete, reliable, current, or error-free.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                4.2 Product Availability
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                All products are subject to availability. We reserve the right to limit the
                quantity of products offered, discontinue any product at any time, or impose
                conditions on the sale of products. We may refuse any order at our sole
                discretion.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                4.3 Product Modifications
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We reserve the right to modify, update, or discontinue products without notice.
                We will not be liable to you or any third party for any modification, price
                change, suspension, or discontinuance of any product.
              </p>
            </div>
          </section>

          {/* Pricing and Payment */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              5. Pricing and Payment
            </h2>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                5.1 Pricing
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                All prices are listed in United States Dollars (USD) unless otherwise specified
                and are subject to change without notice. We reserve the right to correct any
                pricing errors on our Website. If a product&apos;s correct price is higher than
                the stated price, we may either contact you before shipping or cancel your order
                and notify you of the cancellation.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                5.2 Payment
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We accept various forms of payment, including major credit cards, debit cards,
                and other payment methods as displayed during checkout. By providing payment
                information, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>You are authorized to use the payment method provided</li>
                <li>The payment information you provide is accurate and complete</li>
                <li>You will pay all charges incurred by you or on your behalf at the prices in effect when such charges are incurred</li>
                <li>You will pay any applicable taxes related to your purchases</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                5.3 Payment Processing
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                All payment transactions are processed through secure third-party payment
                processors. We do not store your complete payment card information on our
                servers. Payment processing is subject to the terms and privacy policies of our
                payment processors.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                5.4 Taxes
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You are responsible for paying all applicable federal, state, and local taxes,
                duties, and tariffs associated with your purchase. Sales tax will be added to
                orders where required by law.
              </p>
            </div>
          </section>

          {/* Shipping and Delivery */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              6. Shipping and Delivery
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We will make reasonable efforts to ship products within the timeframes specified
              on our Website. However, delivery times are estimates only and we do not guarantee
              delivery dates.
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                6.1 Shipping Costs
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Shipping costs are calculated based on the shipping method selected, destination,
                and weight/size of your order. Shipping costs will be clearly displayed before
                you complete your purchase.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                6.2 Risk of Loss
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                All purchases of physical products are made pursuant to a shipment contract.
                The risk of loss and title for products pass to you upon delivery to the carrier.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                6.3 International Shipping
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                For international orders, you are responsible for complying with all applicable
                customs regulations, import duties, and taxes. Additional fees may apply and are
                the sole responsibility of the customer.
              </p>
            </div>
          </section>

          {/* Returns and Refunds */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              7. Returns, Exchanges, and Refunds
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We want you to be completely satisfied with your purchase. Please review our return
              and refund policy:
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                7.1 Return Policy
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You may return most new, unopened, and unused products within 30 days of delivery
                for a full refund. Products must be returned in their original packaging and
                condition. Certain products may not be eligible for return due to hygiene or
                other reasons.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                7.2 Refund Processing
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Once we receive and inspect your return, we will process your refund within
                10 business days. Refunds will be issued to the original payment method used
                for the purchase. Shipping costs are non-refundable unless the return is due
                to our error.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                7.3 Exchanges
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We accept exchanges for different sizes or colors, subject to availability.
                Contact us to arrange an exchange.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                7.4 Damaged or Defective Products
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If you receive a damaged or defective product, please contact us immediately
                with photos of the defect. We will arrange for a replacement or full refund,
                including return shipping costs.
              </p>
            </div>
          </section>

          {/* Intellectual Property Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              8. Intellectual Property Rights
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              All content on our Website, including but not limited to text, graphics, logos,
              images, designs, photographs, software, and other materials (collectively,
              &quot;Content&quot;), is the exclusive property of {siteConfig.name} or its
              licensors and is protected by copyright, trademark, and other intellectual property
              laws.
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                8.1 License Grant
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We grant you a limited, non-exclusive, non-transferable, revocable license to
                access and use our Website for personal, non-commercial purposes. This license
                does not include the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Modify, copy, distribute, transmit, display, reproduce, or create derivative works from the Content</li>
                <li>Use the Content for commercial purposes</li>
                <li>Remove any copyright, trademark, or other proprietary notices</li>
                <li>Use any data mining, robots, or similar data gathering methods</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                8.2 Trademarks
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {siteConfig.name} and our logo are trademarks of our company. You may not use
                our trademarks without our prior written consent.
              </p>
            </div>
          </section>

          {/* User Content */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              9. User Content and Reviews
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our Website may allow you to post reviews, comments, photos, or other content
              (&quot;User Content&quot;). By posting User Content, you grant us a worldwide,
              non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right
              to use, reproduce, modify, adapt, publish, translate, create derivative works from,
              distribute, and display such User Content.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You represent and warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>You own or have the necessary rights to post the User Content</li>
              <li>Your User Content does not violate any third-party rights</li>
              <li>Your User Content is accurate and not misleading</li>
              <li>Your User Content does not contain unlawful, harmful, or offensive material</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              We reserve the right to remove, edit, or refuse to post any User Content that
              violates these Terms or that we find objectionable for any reason.
            </p>
          </section>

          {/* Prohibited Activities */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              10. Prohibited Activities
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Violating any applicable laws, regulations, or these Terms</li>
              <li>Infringing on any intellectual property rights</li>
              <li>Transmitting any viruses, malware, or harmful code</li>
              <li>Attempting to gain unauthorized access to our systems or networks</li>
              <li>Interfering with or disrupting the Website or servers</li>
              <li>Using the Website for any fraudulent or unlawful purpose</li>
              <li>Impersonating any person or entity</li>
              <li>Collecting or harvesting any user information without consent</li>
              <li>Engaging in any automated use of the system (scraping, bots, etc.)</li>
              <li>Uploading or transmitting any objectionable, offensive, or illegal content</li>
              <li>Harassing, threatening, or intimidating other users</li>
            </ul>
          </section>

          {/* Disclaimers */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              11. Disclaimers and Warranties
            </h2>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed uppercase font-semibold mb-4">
                IMPORTANT - PLEASE READ CAREFULLY
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                THE WEBSITE AND ALL PRODUCTS AND SERVICES ARE PROVIDED ON AN &quot;AS IS&quot;
                AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
                OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ANY OTHER WARRANTY.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                WE DO NOT WARRANT THAT:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                <li>The Website will be uninterrupted, secure, or error-free</li>
                <li>The results obtained from using the Website will be accurate or reliable</li>
                <li>The quality of any products, services, or information will meet your expectations</li>
                <li>Any errors or defects in the Website will be corrected</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              12. Limitation of Liability
            </h2>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, {siteConfig.name.toUpperCase()},
                ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT
                BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
                DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR
                OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mt-4">
                <li>Your access to or use of (or inability to access or use) the Website</li>
                <li>Any conduct or content of any third party on the Website</li>
                <li>Any content obtained from the Website</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES
                OF ACTION EXCEED THE AMOUNT YOU HAVE PAID TO US IN THE PAST TWELVE (12) MONTHS,
                OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
              </p>
            </div>
          </section>

          {/* Indemnification */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              13. Indemnification
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You agree to defend, indemnify, and hold harmless {siteConfig.name}, its affiliates,
              officers, directors, employees, agents, licensors, and service providers from and
              against any and all claims, liabilities, damages, losses, costs, expenses, or fees
              (including reasonable attorneys&apos; fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Your violation of these Terms</li>
              <li>Your violation of any law or rights of any third party</li>
              <li>Your use of the Website or products</li>
              <li>Any User Content you post or submit</li>
              <li>Your conduct in connection with the Website</li>
            </ul>
          </section>

          {/* Termination */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              14. Termination
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We reserve the right, at our sole discretion, to suspend or terminate your access
              to the Website and your account at any time, with or without notice, for any reason,
              including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Violation of these Terms</li>
              <li>Fraudulent, abusive, or illegal activity</li>
              <li>Extended periods of inactivity</li>
              <li>At your request</li>
              <li>For any other reason we deem appropriate</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Upon termination, your right to use the Website will immediately cease. All
              provisions of these Terms that by their nature should survive termination shall
              survive, including ownership provisions, warranty disclaimers, indemnification,
              and limitations of liability.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              15. Dispute Resolution and Arbitration
            </h2>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                15.1 Informal Resolution
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                In the event of any dispute, controversy, or claim arising out of or relating to
                these Terms or your use of the Website, you agree to first contact us to attempt
                to resolve the dispute informally. Contact us at{" "}
                <a
                  href={`mailto:support@${siteConfig.url.replace("https://", "").replace("http://", "")}`}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  support@{siteConfig.url.replace("https://", "").replace("http://", "")}
                </a>{" "}
                with a description of the dispute.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                15.2 Arbitration Agreement
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If we cannot resolve a dispute informally, any controversy or claim shall be
                settled by binding arbitration in accordance with the rules of the American
                Arbitration Association. The arbitration shall be conducted in English and the
                seat of arbitration shall be determined by mutual agreement.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                15.3 Class Action Waiver
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                YOU AGREE THAT ANY ARBITRATION OR PROCEEDING SHALL BE LIMITED TO THE DISPUTE
                BETWEEN YOU AND US INDIVIDUALLY. YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS
                ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              16. Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the
              United States, without regard to its conflict of law provisions. Any legal action
              or proceeding arising under these Terms will be brought exclusively in the federal
              or state courts located in the United States, and you hereby consent to personal
              jurisdiction and venue therein.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              17. Changes to These Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We reserve the right to modify, update, or replace these Terms at any time at our
              sole discretion. We will provide notice of material changes by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Posting the updated Terms on this page</li>
              <li>Updating the &quot;Last Updated&quot; date at the top of this page</li>
              <li>Sending you an email notification (for significant changes)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Your continued use of the Website after any changes to these Terms constitutes
              your acceptance of the new Terms. It is your responsibility to review these Terms
              periodically for changes.
            </p>
          </section>

          {/* Severability */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              18. Severability
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid by a court
              of competent jurisdiction, such provision shall be limited or eliminated to the
              minimum extent necessary so that these Terms shall otherwise remain in full force
              and effect and enforceable.
            </p>
          </section>

          {/* Waiver */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              19. Waiver
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our failure to enforce any right or provision of these Terms will not be considered
              a waiver of those rights. Any waiver of any provision of these Terms will be
              effective only if in writing and signed by an authorized representative of
              {" "}{siteConfig.name}.
            </p>
          </section>

          {/* Entire Agreement */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              20. Entire Agreement
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These Terms, together with our Privacy Policy and any other legal notices published
              by us on the Website, constitute the entire agreement between you and {siteConfig.name}
              concerning your use of the Website and supersede all prior agreements and
              understandings with respect to the same.
            </p>
          </section>

          {/* Contact Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              21. Contact Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you have any questions, concerns, or comments about these Terms of Service,
              please contact us:
            </p>
            <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Company Name:</strong> {siteConfig.name}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:support@${siteConfig.url.replace("https://", "").replace("http://", "")}`}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  support@{siteConfig.url.replace("https://", "").replace("http://", "")}
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
          </section>

          {/* Acknowledgment */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              22. Acknowledgment
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              BY USING OUR WEBSITE OR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS
              OF SERVICE AND AGREE TO BE BOUND BY THEM.
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
                href="/privacy-policy"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Privacy Policy
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

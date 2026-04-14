import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Raidlayer Webhost Private Limited.',
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Privacy Policy"
        subtitle={`Last updated: ${new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}`}
      />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Introduction</h2>
              <p>Raidlayer Webhost Private Limited ("Raidlayer", "we", "us", or "our") is committed to protecting the privacy of individuals who interact with our website and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, company name, and phone number when you submit an inquiry or contact form.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring URLs.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Communicate about our services, updates, and relevant information</li>
                <li>Improve our website and service offerings</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our website and conducting our business, subject to confidentiality agreements.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Data Security</h2>
              <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Cookies</h2>
              <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect certain functionality of our website.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Your Rights</h2>
              <p>You have the right to access, correct, or request deletion of your personal information. To exercise these rights, please contact us at <a href="mailto:info@raidlayer.com" className="text-blue-600 hover:underline">info@raidlayer.com</a>.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Changes to This Policy</h2>
              <p>We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on this page with an updated date.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Contact</h2>
              <p>For privacy-related inquiries, contact us at: <a href="mailto:info@raidlayer.com" className="text-blue-600 hover:underline">info@raidlayer.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

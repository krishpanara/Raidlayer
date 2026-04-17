import type { Metadata } from 'next'
import Script from 'next/script'
import PageHero from '@/components/PageHero'
import { buildMetadata, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service — Raidlayer Webhost Private Limited',
  description:
    'Terms of Service for Raidlayer Webhost Private Limited — governing the use of our website, cloud hosting services, and technology solutions.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <>
      <Script id="schema-breadcrumb-terms" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Terms of Service', url: '/terms' }])) }} />

      <PageHero
        badge="Legal"
        title="Terms of Service"
        subtitle={`Last updated: ${new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}`}
      />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using the website and services of Raidlayer Webhost Private Limited ("Raidlayer"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Services</h2>
              <p>Raidlayer provides cloud hosting, infrastructure management, offshore development team services, and related technology services. The specific terms of any service engagement will be governed by a separate service agreement between Raidlayer and the client.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. Use of Website</h2>
              <p>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Transmit any unsolicited or unauthorized advertising material</li>
                <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use of the website</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, and software, is the property of Raidlayer Webhost Private Limited and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Disclaimer of Warranties</h2>
              <p>This website and its content are provided "as is" without any warranties, express or implied. Raidlayer does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, Raidlayer shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or our services.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Governing Law</h2>
              <p>These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in India.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after changes constitutes acceptance of the new terms.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Contact</h2>
              <p>For questions about these Terms of Service, contact us at: <a href="mailto:info@raidlayer.com" className="text-blue-600 hover:underline">info@raidlayer.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

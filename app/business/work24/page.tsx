import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Users, Briefcase, Code2, Monitor, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'Work24 — Remote Development Teams',
  description: 'Dedicated offshore development teams from India with full operational management, fractional CTO services, and pre-vetted engineers.',
}

const engagementModels = [
  { title: 'Dedicated Team', desc: 'A fully dedicated team of engineers working exclusively on your product, managed by Work24 operationally and by you technically.' },
  { title: 'Staff Augmentation', desc: 'Extend your existing team with pre-vetted engineers who integrate into your workflows, tools, and culture.' },
  { title: 'Fractional CTO', desc: 'Experienced technical leadership on a fixed, profit-sharing, or equity basis — providing strategic oversight without full-time cost.' },
  { title: 'Project-Based Engagement', desc: 'Scoped engagements for defined deliverables, with clear milestones, accountability, and quality standards.' },
]

const techStack = {
  Frontend: ['React', 'Next.js', 'Svelte', 'TypeScript', 'Vue.js', 'Tailwind CSS'],
  Backend: ['Node.js', 'NestJS', 'Express', 'Python', 'Go', 'PHP'],
  Mobile: ['Flutter', 'React Native', 'Android (Kotlin)', 'iOS (Swift)'],
  Database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase'],
}

export default function Work24Page() {
  return (
    <>
      <PageHero
        badge="Work24 — Remote Development"
        title="Dedicated Offshore Development Teams, Fully Managed"
        subtitle="Work24 provides access to India's top engineering talent with complete operational infrastructure — recruitment, retention, payroll, and secure workspaces handled end-to-end."
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Build Your Team <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/services/offshore-teams">View Engagement Models</Link>
          </Button>
        </div>
      </PageHero>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Work24 Model</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Work24 is not a staffing agency. We are an offshore team infrastructure partner. We handle every operational aspect of building and maintaining your remote development team — so you can focus entirely on product direction and outcomes.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our engineers work from secure, monitored smart workspaces with controlled environments, ensuring data security, productivity, and professional standards that enterprise clients require.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Recruitment & Vetting', icon: Users },
                  { label: 'Payroll & Compliance', icon: Briefcase },
                  { label: 'Technical Oversight', icon: Code2 },
                  { label: 'Workspace Management', icon: Monitor },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                    <item.icon className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Remote development team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engagement Models"
            title="Flexible structures for every stage of growth"
            subtitle="Whether you're a startup building your first team or an enterprise scaling an existing one, we have an engagement model that fits."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engagementModels.map((m) => (
              <Card key={m.title} className="p-6 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-slate-900 text-lg mb-2">{m.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{m.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Technology Expertise"
            title="Engineers across the full modern stack"
          />
          <Tabs defaultValue="Frontend" className="max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-4 w-full">
              {Object.keys(techStack).map((cat) => (
                <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
              ))}
            </TabsList>
            {Object.entries(techStack).map(([cat, techs]) => (
              <TabsContent key={cat} value={cat}>
                <div className="flex flex-wrap gap-3 justify-center pt-4">
                  {techs.map((t) => (
                    <Badge key={t} variant="secondary" className="text-sm px-4 py-2">{t}</Badge>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Workspace Model */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                alt="Secure smart workspace"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Secure Smart Workspaces</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Work24 engineers operate from purpose-built, monitored workspaces designed to meet enterprise security and productivity standards. These environments are not home offices — they are professionally managed facilities with controlled access and oversight.
              </p>
              <ul className="space-y-3">
                {[
                  'Controlled physical access environments',
                  'Activity monitoring and productivity tracking',
                  'Secure network infrastructure with VPN access',
                  'Device management and endpoint security',
                  'Regular security audits and compliance checks',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to build your offshore team?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Tell us about your technical requirements and we'll design an engagement model that fits your goals and budget.</p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">Start the Conversation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

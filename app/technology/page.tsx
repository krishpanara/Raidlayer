import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { buildMetadata, breadcrumbSchema, SITE_URL, SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Technology Stack — Frontend, Backend, Mobile & Cloud Technologies',
  description:
    'Raidlayer\'s full technology stack: React, Next.js, Node.js, NestJS, Flutter, PostgreSQL, Docker, Kubernetes, and more — covering frontend, backend, mobile, database, and cloud infrastructure.',
  path: '/technology',
})

const techSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Technology Stack — Raidlayer Webhost',
  url: `${SITE_URL}/technology`,
  description: "Raidlayer's full technology stack covering frontend, backend, mobile, database, and cloud infrastructure technologies.",
  provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
}

const stack = {
  Frontend: {
    color: 'bg-blue-50 text-blue-700 border-blue-100',
    techs: ['React', 'Next.js', 'TypeScript', 'Svelte', 'SvelteKit', 'Vue.js', 'Tailwind CSS', 'Vite', 'Webpack', 'Storybook'],
  },
  Backend: {
    color: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    techs: ['Node.js', 'NestJS', 'Express.js', 'Python', 'FastAPI', 'Django', 'Go', 'PHP', 'Laravel', 'GraphQL', 'REST APIs'],
  },
  Mobile: {
    color: 'bg-violet-50 text-violet-700 border-violet-100',
    techs: ['Flutter', 'React Native', 'Android (Kotlin)', 'iOS (Swift)', 'Expo', 'Capacitor'],
  },
  Database: {
    color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase', 'SQLite', 'Elasticsearch', 'ClickHouse'],
  },
  Infrastructure: {
    color: 'bg-orange-50 text-orange-700 border-orange-100',
    techs: ['Linux (Ubuntu, CentOS)', 'Docker', 'Kubernetes', 'Nginx', 'Apache', 'cPanel/WHM', 'CI/CD Pipelines', 'GitHub Actions', 'Terraform', 'AWS', 'Cloudflare'],
  },
}

export default function TechnologyPage() {
  return (
    <>
      <Script id="schema-tech" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techSchema) }} />
      <Script id="schema-breadcrumb-tech" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Technology Stack', url: '/technology' }])) }} />

      <PageHero
        badge="Technology Stack"
        title="Engineering Expertise Across the Full Modern Technology Stack"
        subtitle="Our teams are proficient across a broad range of technologies — enabling us to work within your existing stack or recommend the right tools for your requirements."
      />

      <section className="py-20 bg-white" aria-label="Technology Stack">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {Object.entries(stack).map(([category, { color, techs }]) => (
              <div key={category}>
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">{category}</h2>
                  <div className="flex-1 h-px bg-slate-200" aria-hidden="true" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className={`inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium ${color}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50" aria-label="Contact CTA">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Don't see your technology stack listed?</h2>
          <p className="text-slate-500 mb-6 max-w-xl mx-auto">
            Our engineers have experience across many additional technologies. Contact us to discuss your specific requirements and we'll confirm our capability to support your stack.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center h-10 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
              Discuss Your Requirements
            </Link>
            <Link href="/services/offshore-teams" className="inline-flex items-center justify-center h-10 px-5 py-2 border border-slate-300 text-slate-700 text-sm font-medium rounded-md hover:bg-slate-50 transition-colors">
              View Offshore Teams
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

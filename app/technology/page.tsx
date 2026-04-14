import type { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'Technology Stack',
  description: 'Full technology stack supported by Raidlayer — frontend, backend, mobile, database, and infrastructure technologies.',
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
      <PageHero
        badge="Technology Stack"
        title="Engineering Expertise Across the Full Modern Stack"
        subtitle="Our teams are proficient across a broad range of technologies — enabling us to work within your existing stack or recommend the right tools for your requirements."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {Object.entries(stack).map(([category, { color, techs }]) => (
              <div key={category}>
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">{category}</h2>
                  <div className="flex-1 h-px bg-slate-200" />
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

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Don't see your stack listed?</h2>
          <p className="text-slate-500 mb-6 max-w-xl mx-auto">
            Our engineers have experience across many additional technologies. Contact us to discuss your specific requirements and we'll confirm our capability to support your stack.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center h-10 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
            Discuss Your Requirements
          </a>
        </div>
      </section>
    </>
  )
}

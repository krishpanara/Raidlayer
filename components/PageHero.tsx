import { Badge } from '@/components/ui/badge'

interface PageHeroProps {
  badge?: string
  title: string
  subtitle: string
  children?: React.ReactNode
}

export default function PageHero({ badge, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && <Badge variant="outline" className="mb-4">{badge}</Badge>}
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
          {title}
        </h1>
        <p className="mt-5 text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}

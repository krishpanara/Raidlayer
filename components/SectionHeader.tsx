import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({ badge, title, subtitle, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-12', className)}>
      {badge && (
        <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-4 tracking-wide uppercase">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">{title}</h2>
      {subtitle && (
        <p className={cn('mt-4 text-lg text-slate-500 leading-relaxed', centered ? 'max-w-2xl mx-auto' : 'max-w-2xl')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

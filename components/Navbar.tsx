'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Server } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'About', href: '/about' },
  {
    label: 'Business Units',
    children: [
      { label: 'Raidlayer — Infrastructure', href: '/business/raidlayer' },
      { label: 'Work24 — Remote Teams', href: '/business/work24' },
      { label: 'Hanarad — RAD Platform', href: '/business/hanarad' },
    ],
  },
  {
    label: 'Services',
    children: [
      { label: 'DevOps & Infrastructure Support', href: '/services/devops-infrastructure' },
      { label: 'Email & Communication Infrastructure', href: '/services/email-infrastructure' },
      { label: 'Offshore Development Teams', href: '/services/offshore-teams' },
      { label: 'CTO & Technical Leadership', href: '/services/cto-leadership' },
      { label: 'Rapid Application Development', href: '/services/rapid-development' },
    ],
  },
  { label: 'Technology', href: '/technology' },
  { label: 'Industries', href: '/industries' },
  {
    label: 'Infrastructure',
    children: [
      { label: 'Infrastructure', href: '/infrastructure' },
      { label: 'Cloud & Hosting Solutions', href: '/services/cloud-hosting' },
      { label: 'HANA Cloud — Managed Infrastructure', href: '/services/hana-cloud' },
    ],
  },
  { label: 'Careers', href: '/careers' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false); setActiveDropdown(null) }, [pathname])

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
      scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm' : 'bg-white border-b border-slate-100'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Server className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-slate-900 text-sm tracking-tight">RAIDLAYER</span>
              <span className="text-[10px] text-slate-500 tracking-wide">WEBHOST PVT. LTD.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm text-slate-600 hover:text-blue-600 font-medium rounded-md hover:bg-slate-50 transition-colors">
                    {link.label}
                    <ChevronDown className={cn('w-3.5 h-3.5 transition-transform', activeDropdown === link.label && 'rotate-180')} />
                  </button>
                  {activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl border border-slate-200 shadow-lg py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                    pathname === link.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild size="sm">
              <Link href="/contact">Request Consultation</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">{link.label}</p>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-3 py-2 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-3 border-t border-slate-100">
            <Button asChild className="w-full">
              <Link href="/contact">Request Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

import Link from 'next/link'
import { Server, Mail, MapPin, Phone } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const footerLinks = {
  'Business Units': [
    { label: 'Raidlayer Infrastructure', href: '/business/raidlayer' },
    { label: 'Work24 Remote Teams', href: '/business/work24' },
    { label: 'Hanarad RAD Platform', href: '/business/hanarad' },
  ],
  Services: [
    { label: 'Cloud & Hosting', href: '/services/cloud-hosting' },
    { label: 'Email Infrastructure', href: '/services/email-infrastructure' },
    { label: 'Offshore Development', href: '/services/offshore-teams' },
    { label: 'CTO Leadership', href: '/services/cto-leadership' },
    { label: 'Rapid Development', href: '/services/rapid-development' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Technology Stack', href: '/technology' },
    { label: 'Industries Served', href: '/industries' },
    { label: 'Infrastructure & Security', href: '/infrastructure' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Server className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-sm tracking-tight">RAIDLAYER</span>
                <span className="text-[10px] text-slate-500 tracking-wide">WEBHOST PVT. LTD.</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Enterprise infrastructure, offshore development teams, and rapid application development — powering businesses at scale across India and globally.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-slate-500 shrink-0" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <a href="mailto:live@raidlayer.com" className="hover:text-white transition-colors">live@raidlayer.com</a>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 bg-slate-800" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Raidlayer Webhost Private Limited. All rights reserved.</p>
          <p>CIN: Registered in India</p>
        </div>
      </div>
    </footer>
  )
}

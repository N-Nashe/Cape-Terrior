import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '@/assets/Cape-Terroir.png'

const TRIPADVISOR_URL =
  'https://www.tripadvisor.co.za/Attraction_Review-g312659-d8430111-Reviews-Cape_Terroir_Wine_Masterclass_Tours-Cape_Town_Central_Western_Cape.html'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Offers', to: '/offers' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm uppercase tracking-widest font-medium transition-colors duration-200 pb-0.5 border-b-2 ${
      isActive
        ? 'text-wine-900 border-gold-600'
        : 'text-gray-700 border-transparent hover:text-wine-900 hover:border-gold-600'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => setOpen(false)}>
          <img src={logo} alt="Cape Terroir" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(({ label, to }) => (
            <NavLink key={to} to={to} end={to === '/'} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* TripAdvisor CTA (desktop) */}
        <a
          href={TRIPADVISOR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#34E0A1] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#2bc48e] transition-colors duration-200"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm0 2.25a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 2a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5z" />
          </svg>
          Reviews
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-wine-900 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6 pt-4 shadow-lg">
          <nav className="flex flex-col gap-5">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <a
              href={TRIPADVISOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-[#34E0A1] text-white text-xs font-semibold uppercase tracking-wider rounded-sm"
              onClick={() => setOpen(false)}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm0 2.25a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 2a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5z" />
              </svg>
              See Our Reviews on TripAdvisor
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

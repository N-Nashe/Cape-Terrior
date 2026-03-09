import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import logo from '@/assets/Cape-Terroir.png'

const TRIPADVISOR_URL =
  'https://www.tripadvisor.co.za/Attraction_Review-g312659-d8430111-Reviews-Cape_Terroir_Wine_Masterclass_Tours-Cape_Town_Central_Western_Cape.html'

export default function Footer() {
  return (
    <footer className="bg-wine-950 text-cream">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <img src={logo} alt="Cape Terroir" className="h-14 w-auto object-contain mb-4 brightness-200" />
          <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
            Private wine tours in the heart of the Cape Winelands, led by expert winemaker Mathieu Labaki.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://www.facebook.com/capeterroir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-gold-500 transition-colors duration-200"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/capeterroir/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-gold-500 transition-colors duration-200"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={TRIPADVISOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TripAdvisor"
              className="text-gray-400 hover:text-gold-500 transition-colors duration-200"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm0 2.25a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 2a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold-500 font-semibold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            {[
              { label: 'Home', to: '/' },
              { label: 'Our Offers', to: '/offers' },
              { label: 'About Us', to: '/about' },
              { label: 'Contact', to: '/contact' },
            ].map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold-400 transition-colors duration-200">
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={TRIPADVISOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-400 transition-colors duration-200"
              >
                TripAdvisor Reviews ↗
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold-500 font-semibold mb-5">Get in Touch</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-gold-500 shrink-0" />
              <a href="mailto:contact@capeterroir.com" className="hover:text-gold-400 transition-colors duration-200">
                contact@capeterroir.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-gold-500 shrink-0" />
              <a href="tel:+27724631681" className="hover:text-gold-400 transition-colors duration-200">
                +27 072 463 16 81
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <Link to="/contact" className="btn-outline border-gold-500 text-gold-400 hover:bg-gold-600 hover:text-white hover:border-gold-600 text-xs">
              Book a Tour
            </Link>
          </div>
        </div>

      </div>

      <div className="border-t border-wine-900 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Cape Terroir. All rights reserved.</span>
          <span>Cape Town, Western Cape, South Africa</span>
        </div>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'
import { Clock, Sun, Calendar, Star } from 'lucide-react'

const TRIPADVISOR_URL =
  'https://www.tripadvisor.co.za/Attraction_Review-g312659-d8430111-Reviews-Cape_Terroir_Wine_Masterclass_Tours-Cape_Town_Central_Western_Cape.html'

const offers = [
  {
    icon: <Clock size={32} className="text-gold-600" />,
    tag: '2 Hours',
    title: 'Wine Masterclass',
    description:
      'An intimate exploration of South African wine in the heart of Cape Town. Taste 6 carefully selected wines while Mathieu guides you through the art of tasting, the history of SA wine, and the winemaking process.',
    to: '/offers#masterclass',
  },
  {
    icon: <Sun size={32} className="text-gold-600" />,
    tag: 'Full Day',
    title: 'Wine Tour',
    description:
      'A private full-day journey through Stellenbosch, Paarl, and Franschhoek. From morning pick-up to an evening return, discover the diversity of the Cape Winelands alongside a professional winemaker.',
    to: '/offers#wine-tour',
  },
  {
    icon: <Calendar size={32} className="text-gold-600" />,
    tag: '3 Days / 2 Nights',
    title: 'Complete Wine Tour',
    description:
      'The ultimate immersion — exclusive estates, farm stays, traditional South African meals, and deep conversations with the winemakers themselves. For those who want to go beyond the surface.',
    to: '/offers#complete-tour',
  },
]

export default function Home() {
  return (
    <main>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(43,14,20,0.62) 0%, rgba(43,14,20,0.42) 60%, rgba(43,14,20,0.72) 100%), url('https://images.unsplash.com/photo-1560493676-04071185bf90?w=1800&q=80')",
        }}
      >
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-4 font-sans font-medium">
            Cape Town, South Africa
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream leading-tight mb-6">
            Discover the Soul<br />
            <em className="text-gold-400">of South African Wine</em>
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed mb-10 max-w-xl mx-auto font-light">
            Private wine tours crafted by expert winemaker Mathieu Labaki — from intimate
            masterclasses to multi-day escapes through the Cape Winelands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/offers" className="btn-primary">
              Explore Our Offers
            </Link>
            <Link to="/contact" className="btn-outline border-cream text-cream hover:bg-white hover:text-wine-900">
              Book a Tour
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-cream/50 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-600 text-xs uppercase tracking-[0.3em] mb-3 font-sans font-medium">
            Our Philosophy
          </p>
          <h2 className="section-heading text-center">More Than a Wine Tasting</h2>
          <div className="divider mx-auto" />
          <p className="text-gray-600 text-lg leading-relaxed">
            At Cape Terroir, we believe wine is a story — of the land, the people, and the seasons.
            With over 12 years of winemaking experience in South Africa, Mathieu Labaki shares not
            just wines, but the richness and beauty of the Western Cape Winelands. After a tour with
            us, you will understand the differences between wine ranges and regions, and most
            importantly, <em>find your own taste</em>.
          </p>
        </div>
      </section>

      {/* ── Offer Cards ───────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-xs uppercase tracking-[0.3em] mb-3 font-sans font-medium">
              Tailored Experiences
            </p>
            <h2 className="section-heading text-center">Our Offers</h2>
            <div className="divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map(({ icon, tag, title, description, to }) => (
              <div key={title} className="card group flex flex-col">
                <div className="bg-cream px-8 pt-10 pb-6 flex flex-col items-start gap-4 flex-1">
                  <div className="p-3 bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    {icon}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold font-sans">
                    {tag}
                  </span>
                  <h3 className="font-serif text-2xl text-wine-900">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{description}</p>
                </div>
                <div className="px-8 pb-8 pt-4 bg-white">
                  <Link
                    to={to}
                    className="text-wine-900 text-sm font-medium font-sans uppercase tracking-wider border-b border-gold-600 hover:text-gold-700 hover:border-gold-700 transition-colors duration-200 pb-0.5"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TripAdvisor Strip ─────────────────────────────────────────── */}
      <section className="bg-wine-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="text-gold-400 fill-gold-400" />
            ))}
          </div>
          <blockquote className="font-serif italic text-cream text-xl md:text-2xl leading-relaxed mb-6">
            "More than just a wine tasting — it is an exploration of the South African Terroir!"
          </blockquote>
          <p className="text-gray-300 text-sm mb-8">
            Rated <span className="text-gold-400 font-semibold">Excellent</span> on TripAdvisor by guests from around the world
          </p>
          <a
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#34E0A1] text-white text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-[#2bc48e] transition-colors duration-200"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm0 2.25a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 2a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5z" />
            </svg>
            Read Reviews on TripAdvisor
          </a>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section
        className="relative py-28 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(107,39,55,0.88), rgba(107,39,55,0.60)), url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1800&q=80')",
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
            Ready to Explore the Winelands?
          </h2>
          <p className="text-gray-200 text-lg mb-10 font-light leading-relaxed">
            Whether you're a novice or a connoisseur, Mathieu will tailor the experience
            to your palate. Reach out and let's plan your wine journey.
          </p>
          <Link to="/contact" className="btn-primary bg-gold-600 hover:bg-gold-700 text-white border-0">
            Contact Us
          </Link>
        </div>
      </section>

    </main>
  )
}

import { Link } from 'react-router-dom'
import { Award, Heart, Users } from 'lucide-react'

const TRIPADVISOR_URL =
  'https://www.tripadvisor.co.za/Attraction_Review-g312659-d8430111-Reviews-Cape_Terroir_Wine_Masterclass_Tours-Cape_Town_Central_Western_Cape.html'

const values = [
  {
    icon: <Award size={28} className="text-gold-600" />,
    title: 'Deep Expertise',
    description:
      'With formal training in Champagne, Alsace, and Bordeaux — and over a decade as a hands-on winemaker in South Africa — Mathieu brings unmatched depth to every tour.',
  },
  {
    icon: <Heart size={28} className="text-gold-600" />,
    title: 'Genuine Passion',
    description:
      'Cape Terroir was founded purely from love of wine and this land. Every tour reflects that passion — you\'ll feel it in every pour, every story, every moment in the vineyard.',
  },
  {
    icon: <Users size={28} className="text-gold-600" />,
    title: 'Truly Private',
    description:
      'No crowd, no coach tours. Your group, your pace, your questions. Each experience is crafted around you — whether you\'re a complete beginner or a seasoned collector.',
  },
]

const pressLinks = [
  {
    label: 'Le Républicain Lorrain (France)',
    href: 'http://www.capeterroir.com/img/article-presse-republicain-lorrain-mathieu-labaki-winemaker.pdf',
  },
  {
    label: 'Cape Town Etc — "Become a Wine Master in Two Hours"',
    href: 'http://www.capetownetc.com/blog/wine/become-a-wine-master-in-two-hours/',
  },
  {
    label: 'Top Billing — SCBC3 (South Africa)',
    href: 'http://www.capeterroir.com/img/article-presse-republicain-lorrain-mathieu-labaki-winemaker.pdf',
  },
]

export default function About() {
  return (
    <main className="pt-24">

      {/* ── Page Header ───────────────────────────────────────────────── */}
      <section
        className="relative py-24 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(43,14,20,0.72) 0%, rgba(43,14,20,0.52) 100%), url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1800&q=80')",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-3 font-sans font-medium">
            The Story Behind the Wine
          </p>
          <h1 className="font-serif text-5xl text-cream mb-4">About Us</h1>
          <div className="w-16 h-0.5 bg-gold-600 mx-auto" />
        </div>
      </section>

      {/* ── Story Section ─────────────────────────────────────────────── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold-600 text-xs uppercase tracking-[0.3em] mb-3 font-sans font-medium">
              Mathieu Labaki
            </p>
            <h2 className="font-serif text-4xl text-wine-900 mb-4">
              A Winemaker Who Fell in Love with <em>South Africa</em>
            </h2>
            <div className="w-12 h-0.5 bg-gold-600 mb-8" />
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Trained with extensive practical knowledge in wine-making and viticulture in the
                Champagne, Alsace, and Bordeaux regions, Mathieu Labaki arrived in South Africa in
                2004 — and never truly left.
              </p>
              <p>
                As head winemaker for one of the major players in the South African wine export
                market, he was responsible for the entire winemaking process from grape to bottle.
                He went on to serve as winemaker and manager for a premium range exporter, and then
                as a consultant winemaker — continuously deepening both his knowledge and his
                affection for South African wines.
              </p>
              <p>
                In 2014, after a decade in the heart of the South African vineyards, Mathieu made
                the decision to share his passion. And so <strong className="text-wine-900">Cape Terroir</strong> was born — based in Cape
                Town, with a single mission: to share the wealth and beauty of the Western Cape
                Winelands with the world.
              </p>
              <p className="font-serif italic text-wine-800 text-lg border-l-4 border-gold-500 pl-5">
                "After a tour with us, you will find your own taste — which style of wine you like, and why.
                You'll feel more confident ordering wine wherever you are."
              </p>
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="rounded-sm overflow-hidden shadow-2xl h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=900&q=80"
                alt="Mathieu Labaki - Cape Terroir"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative gold border offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold-500 rounded-sm -z-10" />
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold-600 text-xs uppercase tracking-[0.3em] mb-3 font-sans font-medium">
              Why Cape Terroir
            </p>
            <h2 className="section-heading text-center">What Sets Us Apart</h2>
            <div className="divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon, title, description }) => (
              <div key={title} className="text-center px-6 py-8 bg-cream rounded-sm">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full shadow mb-5">
                  {icon}
                </div>
                <h3 className="font-serif text-xl text-wine-900 mb-3">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cape Winelands Context ────────────────────────────────────── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold-600 text-xs uppercase tracking-[0.3em] mb-3 font-sans font-medium">
              The Region
            </p>
            <h2 className="section-heading text-center">The Cape Winelands</h2>
            <div className="divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 leading-relaxed">
            <div className="space-y-4">
              <p>
                The Cape Winelands — encompassing Stellenbosch, Franschhoek, Paarl, Wellington,
                and beyond — are among the most scenic and historically significant wine-producing
                regions in the world.
              </p>
              <p>
                South Africa's wine history stretches back to 1660, when the first Cape harvest
                was made. The arrival of French Huguenot refugees in 1688 brought French
                winemaking techniques and established the foundations of what would become a
                world-class wine industry.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Today, the Western Cape offers extraordinary diversity: from elegant Chenin Blancs
                and Sauvignon Blancs to bold Cabernets and unique Pinotage — a cultivar born
                entirely in South Africa.
              </p>
              <p>
                The Mediterranean climate, ancient soils, and remarkable biodiversity create a
                "terroir" unlike anywhere else — and Cape Terroir exists to help you explore every
                nuance of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Press ─────────────────────────────────────────────────────── */}
      <section className="bg-wine-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-3 font-sans font-medium">
            Featured In
          </p>
          <h2 className="font-serif text-3xl text-cream mb-10">They're Talking About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {pressLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-wine-800 hover:bg-wine-700 rounded-sm px-5 py-4 text-sm text-gray-200 hover:text-cream transition-colors duration-200 text-center"
              >
                {label} ↗
              </a>
            ))}
          </div>
          <a
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#34E0A1] text-white text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-[#2bc48e] transition-colors duration-200"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm0 2.25a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 2a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5z" />
            </svg>
            Read Guest Reviews on TripAdvisor
          </a>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-wine-900 mb-4">
          Ready to Meet Mathieu in the Winelands?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
          Browse our tour offers or get in touch directly to design an experience around your group.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/offers" className="btn-primary">View Our Offers</Link>
          <Link to="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </section>

    </main>
  )
}

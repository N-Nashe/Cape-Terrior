import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Clock, Sun, Calendar, CheckCircle, AlertCircle } from 'lucide-react'

const TRIPADVISOR_URL =
  'https://www.tripadvisor.co.za/Attraction_Review-g312659-d8430111-Reviews-Cape_Terroir_Wine_Masterclass_Tours-Cape_Town_Central_Western_Cape.html'

const offers = [
  {
    id: 'masterclass',
    tag: '2 Hours · In Cape Town',
    title: 'Wine Masterclass',
    icon: <Clock size={28} className="text-gold-600" />,
    heroImg:
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&q=80',
    intro:
      'Our main goal is to expand wine culture to everyone — from the curious novice to the avid enthusiast and the experienced connoisseur. Our expert will enrich your wine drinking experience during an intimate two-hour masterclass in the heart of Cape Town.',
    detail:
      'You will be offered tastings of 6 carefully selected wines: 1 sparkling wine, 2 white wines and 3 red wines, each chosen to illustrate the rich diversity of South African terroir.',
    topics: [
      {
        heading: 'The 3 Wine Tasting Steps',
        items: [
          'Appearance — the analysis of colour and what it tells you',
          'Nose — how to identify aromas and why they differ between varietals',
          'Palate — identifying acidity, roundness, and after-taste to find your own taste',
        ],
      },
      {
        heading: 'The History of Wine in South Africa',
        items: [
          'The first harvest in 1660 and the arrival of French Huguenots in 1688',
          'The evolution of the South African wine industry to present day',
          'The unique concept of "Terroir" in the Western Cape',
        ],
      },
      {
        heading: 'The Winemaking Process',
        items: [
          'How each wine style is made — white, red, rosé, and sparkling',
          'From harvest to bottle: fermentation, maturation, and blending',
          'How to read a South African wine label',
        ],
      },
    ],
    notes: [
      'Available for private groups and team-building events',
      'Can be hosted at your venue: boardroom, villa, guesthouse, hotel, etc.',
      'Minimum 6 team members for corporate group bookings',
      'All tasted wines available for purchase',
    ],
    bookNote: null,
  },
  {
    id: 'wine-tour',
    tag: 'Full Day · Private Tour',
    title: 'Wine Tour',
    icon: <Sun size={28} className="text-gold-600" />,
    heroImg:
      'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=1200&q=80',
    intro:
      'Join Mathieu for a private wine tour through the Winelands — drawing on 12 years of winemaking experience in South Africa, he will show you the richness of this region and the extraordinary subtlety of its wines.',
    detail:
      'More than a tasting, this is a full education in wine. After this tour, you will understand the differences between wine ranges and regions, and most importantly, find your own taste.',
    topics: [
      {
        heading: 'What You Will Learn',
        items: [
          'The historical part of South Africa as it relates to wine',
          'The growing cycle of the vine through the seasons',
          'The winemaking process for all styles — white, red, rosé, and sparkling',
          'The different wine tasting steps applied in practice',
          'How to identify and compare wines from different regions and estates',
        ],
      },
      {
        heading: 'The Day at a Glance',
        items: [
          'Pick-up at your accommodation at 9:00 / 9:30am',
          'Head out to the first winery in Stellenbosch',
          '12:30pm: South African lunch on a restaurant terrace with magnificent views of the Paarl Mountain',
          'After lunch: visit two further wineries in Paarl, Wellington, or Franschhoek',
          'Return to your accommodation at approximately 18:30',
        ],
      },
    ],
    notes: [
      '7 tour theme options available: Winelands, Organic & Biodynamic, Off the Beaten Track, Prestige, Family Vineyard, Méthode Cap Classique, or Create Your Own',
      'All tours are private — exclusively for your group',
      'Transport included from your Cape Town accommodation',
    ],
    bookNote: null,
  },
  {
    id: 'complete-tour',
    tag: '3 Days / 2 Nights · Full Immersion',
    title: 'Complete Wine Tour',
    icon: <Calendar size={28} className="text-gold-600" />,
    heroImg:
      'https://images.unsplash.com/photo-1543218024-57a70143c369?w=1200&q=80',
    intro:
      'Want to enjoy a full tour of the vast South African wine regions? A single day is not enough to satisfy your desire to discover the subtleties of these wines and landscapes. We will organise a fully personalised tour just for you.',
    detail:
      'Leaving the beaten path, you will explore the deep treasures of the Western Cape countryside — exclusive vineyards, breathtaking landscapes, and intimate access to estates not open to the general public.',
    topics: [
      {
        heading: 'What to Expect',
        items: [
          'Visits to exclusive, hand-picked vineyards with breathtaking Western Cape views',
          'In-depth commentary and explanations from professional winemaker Mathieu Labaki',
          'Opportunities to meet wine growers and discuss what it means to be a wine farmer in South Africa',
          'Stays at carefully selected guesthouses on or near wine farms',
          'Long, lingering evenings at wine estates under the stars',
          'Typical and traditional South African meals throughout',
          'The freedom to ask Mathieu anything — no question is too simple or too deep',
        ],
      },
    ],
    notes: [
      'Fully personalised itinerary — tailored to your interests and experience level',
      'Suitable for couples, small groups, and dedicated wine enthusiasts',
      'Accommodation on or near the wine estates included in planning',
    ],
    bookNote: 'Booking at least one month in advance is essential.',
  },
]

export default function Offers() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [hash])

  return (
    <main className="pt-24">

      {/* ── Page Header ───────────────────────────────────────────────── */}
      <section
        className="relative py-24 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(43,14,20,0.70) 0%, rgba(43,14,20,0.50) 100%), url('https://images.unsplash.com/photo-1560493676-04071185bf90?w=1800&q=80')",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-3 font-sans font-medium">
            Tailored Experiences
          </p>
          <h1 className="font-serif text-5xl text-cream mb-4">Our Offers</h1>
          <div className="w-16 h-0.5 bg-gold-600 mx-auto mb-6" />
          <p className="text-gray-200 text-lg leading-relaxed font-light max-w-xl mx-auto">
            Three distinct ways to discover South African wine — choose the depth of experience
            that suits you.
          </p>
        </div>
      </section>

      {/* ── Offer Sections ────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-28">
        {offers.map((offer, index) => (
          <article
            key={offer.id}
            id={offer.id}
            className="scroll-mt-28"
          >
            {/* Number + Tag */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-serif text-5xl text-wine-100 leading-none select-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold font-sans block mb-1">
                  {offer.tag}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-wine-900 leading-tight flex items-center gap-3">
                  {offer.icon}
                  {offer.title}
                </h2>
              </div>
            </div>
            <div className="w-12 h-0.5 bg-gold-600 mb-8" />

            {/* Hero image */}
            <div className="rounded-sm overflow-hidden mb-10 shadow-lg h-64 md:h-80">
              <img
                src={offer.heroImg}
                alt={offer.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Intro copy */}
            <p className="text-gray-700 text-lg leading-relaxed mb-4">{offer.intro}</p>
            <p className="text-gray-600 leading-relaxed mb-10 italic font-serif">{offer.detail}</p>

            {/* Topics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {offer.topics.map((topic) => (
                <div key={topic.heading} className="bg-cream rounded-sm p-6 border-l-4 border-gold-500">
                  <h4 className="font-serif text-lg text-wine-900 mb-4">{topic.heading}</h4>
                  <ul className="space-y-2">
                    {topic.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                        <CheckCircle size={15} className="text-gold-600 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Notes */}
            {offer.notes.length > 0 && (
              <div className="bg-white border border-gray-100 rounded-sm p-6 mb-8 shadow-sm">
                <h4 className="text-xs uppercase tracking-widest text-gold-600 font-semibold font-sans mb-4">
                  Good to Know
                </h4>
                <ul className="space-y-2">
                  {offer.notes.map((note) => (
                    <li key={note} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                      <span className="text-gold-600 font-bold mt-0.5">·</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Booking note */}
            {offer.bookNote && (
              <div className="flex items-start gap-3 bg-wine-50 border border-wine-200 rounded-sm p-4 mb-8">
                <AlertCircle size={18} className="text-wine-700 shrink-0 mt-0.5" />
                <p className="text-sm text-wine-800 font-medium">{offer.bookNote}</p>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Enquire About This Tour
              </Link>
              <a
                href={TRIPADVISOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                See Reviews on TripAdvisor
              </a>
            </div>

            {/* Divider between offers */}
            {index < offers.length - 1 && (
              <div className="border-b border-gray-200 mt-20" />
            )}
          </article>
        ))}
      </div>

    </main>
  )
}

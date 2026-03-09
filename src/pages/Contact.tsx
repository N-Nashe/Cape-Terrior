import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const TRIPADVISOR_URL =
  'https://www.tripadvisor.co.za/Attraction_Review-g312659-d8430111-Reviews-Cape_Terroir_Wine_Masterclass_Tours-Cape_Town_Central_Western_Cape.html'

const offersOptions = [
  'Wine Masterclass (2 Hours)',
  'Wine Tour (Full Day)',
  'Complete Wine Tour (3 Days / 2 Nights)',
  'Not sure yet — please advise',
]

interface FormState {
  name: string
  email: string
  phone: string
  offer: string
  guests: string
  message: string
}

const emptyForm: FormState = {
  name: '',
  email: '',
  phone: '',
  offer: '',
  guests: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Compose mailto with form data
    const subject = encodeURIComponent(`Cape Terroir Enquiry — ${form.offer || 'General'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\nOffer Interest: ${form.offer || 'N/A'}\nGuests: ${form.guests || 'N/A'}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:contact@capeterroir.com?subject=${subject}&body=${body}`
    setSubmitted(true)
    setForm(emptyForm)
  }

  const inputClass =
    'w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-wine-700 focus:ring-1 focus:ring-wine-700 transition-colors duration-200'

  return (
    <main className="pt-24">

      {/* ── Page Header ───────────────────────────────────────────────── */}
      <section
        className="relative py-24 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(43,14,20,0.70) 0%, rgba(43,14,20,0.50) 100%), url('https://images.unsplash.com/photo-1543218024-57a70143c369?w=1800&q=80')",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-3 font-sans font-medium">
            We'd Love to Hear From You
          </p>
          <h1 className="font-serif text-5xl text-cream mb-4">Contact Us</h1>
          <div className="w-16 h-0.5 bg-gold-600 mx-auto mb-6" />
          <p className="text-gray-200 text-lg font-light max-w-lg mx-auto leading-relaxed">
            Ready to plan your wine experience? Send us a message and Mathieu will get back to you personally.
          </p>
        </div>
      </section>

      {/* ── Contact Grid ──────────────────────────────────────────────── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* ── Form ── */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-3xl text-wine-900 mb-2">Send an Enquiry</h2>
            <div className="w-10 h-0.5 bg-gold-600 mb-8" />

            {submitted ? (
              <div className="bg-wine-900 text-cream rounded-sm px-8 py-10 text-center">
                <div className="text-4xl mb-4">🍷</div>
                <h3 className="font-serif text-2xl mb-3">Thank You!</h3>
                <p className="text-gray-200 leading-relaxed">
                  Your message has been composed. Please send the email from your mail client to complete the enquiry.
                  Mathieu will be in touch with you shortly.
                </p>
                <button
                  className="mt-6 btn-outline border-cream text-cream hover:bg-white hover:text-wine-900"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 font-sans mb-2">
                      Full Name <span className="text-wine-700">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 font-sans mb-2">
                      Email Address <span className="text-wine-700">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 font-sans mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 234 567 8900"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 font-sans mb-2">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      name="guests"
                      min="1"
                      placeholder="2"
                      value={form.guests}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 font-sans mb-2">
                    Tour of Interest <span className="text-wine-700">*</span>
                  </label>
                  <select
                    name="offer"
                    required
                    value={form.offer}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a tour…</option>
                    {offersOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 font-sans mb-2">
                    Your Message <span className="text-wine-700">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your group, preferred dates, or any questions you have…"
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Enquiry
                </button>

                <p className="text-xs text-gray-400 mt-2">
                  This will open your email client. Alternatively, email us directly at{' '}
                  <a href="mailto:contact@capeterroir.com" className="text-wine-700 hover:underline">
                    contact@capeterroir.com
                  </a>
                </p>
              </form>
            )}
          </div>

          {/* ── Info Panel ── */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-wine-900 mb-2">Get in Touch</h3>
              <div className="w-8 h-0.5 bg-gold-600 mb-6" />
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-wine-900 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-cream" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-1">Email</p>
                    <a
                      href="mailto:contact@capeterroir.com"
                      className="text-wine-900 font-medium hover:text-gold-700 transition-colors duration-200"
                    >
                      contact@capeterroir.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-wine-900 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-cream" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-1">Phone / WhatsApp</p>
                    <a
                      href="tel:+27724631681"
                      className="text-wine-900 font-medium hover:text-gold-700 transition-colors duration-200"
                    >
                      +27 072 463 16 81
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-wine-900 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-cream" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-1">Base</p>
                    <p className="text-wine-900 font-medium">Cape Town, Western Cape<br />South Africa</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* TripAdvisor */}
            <div className="bg-wine-900 rounded-sm p-6 text-center">
              <p className="text-gold-400 text-xs uppercase tracking-widest font-sans mb-3">See What Guests Say</p>
              <p className="text-cream font-serif italic text-base leading-relaxed mb-5">
                "Rated Excellent — consistently praised for expert knowledge, warmth, and unforgettable experiences."
              </p>
              <a
                href={TRIPADVISOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#34E0A1] text-sm font-semibold hover:text-[#2bc48e] transition-colors duration-200"
              >
                <ExternalLink size={15} />
                Read Reviews on TripAdvisor
              </a>
            </div>

            {/* Booking note */}
            <div className="border border-gold-300 bg-gold-50 rounded-sm p-5">
              <h4 className="font-serif text-wine-900 text-base mb-2">Booking Notes</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>· All tours are private — exclusively for your group</li>
                <li>· Complete Wine Tour: book <strong>at least 1 month</strong> in advance</li>
                <li>· Off the Beaten Track tours: book <strong>at least 1 week</strong> in advance</li>
                <li>· Corporate / team building: minimum 6 guests</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}

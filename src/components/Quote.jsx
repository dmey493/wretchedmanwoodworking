import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Clock, CheckCircle2 } from 'lucide-react'

// Encodes fields the way Netlify Forms expects (url-encoded body).
const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

const projectOptions = [
  'Custom Furniture',
  'Dining or Coffee Table',
  'A-Frame Table',
  'Cutting Board',
  'Sawmilling / Lumber',
  'Other',
]

export default function Quote() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', project: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'quote', ...form }),
    })
      .then((res) => setStatus(res.ok ? 'success' : 'error'))
      .catch(() => setStatus('error'))
  }

  const field =
    'w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-espresso shadow-sm transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'

  return (
    <section id="quote" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-2">
        {/* Left: pitch + contact details */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Get a Free Quote
          </p>
          <h2 className="mb-6 font-display text-4xl font-semibold text-espresso md:text-5xl">
            Let’s build yours
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-espresso/75">
            Interested in working together? Fill out some info and we’ll be in touch shortly. We
            can’t wait to hear from you!
          </p>

          <div className="space-y-5">
            <a
              href="mailto:dhostetler@wmwoodworking.com"
              className="flex items-center gap-4 text-espresso transition hover:text-primary"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              dhostetler@wmwoodworking.com
            </a>
            <a
              href="tel:+12606939781"
              className="flex items-center gap-4 text-espresso transition hover:text-primary"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              (260) 693-9781
            </a>
            <div className="flex items-center gap-4 text-espresso">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </span>
              Monday – Friday · 10am – 6pm
            </div>
          </div>
        </div>

        {/* Right: the form (bottom CTA) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {status === 'success' ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-primary/15 bg-cream p-10 text-center">
              <CheckCircle2 className="h-16 w-16 text-primary" />
              <h3 className="font-display text-2xl font-semibold text-espresso">Thanks! Quote request received.</h3>
              <p className="text-espresso/70">
                We’ll review your project and get back to you shortly.
              </p>
            </div>
          ) : (
            <form
              name="quote"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="rounded-2xl border border-primary/15 bg-cream p-8 shadow-lg"
            >
              <input type="hidden" name="form-name" value="quote" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" onChange={handleChange} />
                </label>
              </p>

              <div className="grid gap-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-espresso">
                    Full Name
                  </label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className={field} placeholder="Jane Doe" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-espresso">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={field} placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-espresso">
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={field} placeholder="(260) 555-0123" />
                  </div>
                </div>
                <div>
                  <label htmlFor="project" className="mb-1.5 block text-sm font-medium text-espresso">
                    What can we build for you?
                  </label>
                  <select id="project" name="project" value={form.project} onChange={handleChange} className={field}>
                    <option value="">Select a project type…</option>
                    {projectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-espresso">
                    Project Details
                  </label>
                  <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} className={`${field} resize-none`} placeholder="Tell us about your idea, wood type, size, timeline…" />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-700">
                    Something went wrong. Please email us at dhostetler@wmwoodworking.com or call (260) 693-9781.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="rounded-full bg-primary py-4 font-semibold text-cream shadow-md transition hover:bg-primary-dark disabled:opacity-70"
                >
                  {status === 'submitting' ? 'Sending…' : 'Request Free Quote'}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

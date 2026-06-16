import { motion } from 'framer-motion'

export default function CtaBand() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl font-semibold text-cream md:text-5xl"
        >
          Ready to build something that lasts generations?
        </motion.h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-cream/85">
          Tell us about your project and we’ll get back to you with a free quote. We can’t wait to
          hear from you.
        </p>
        <a
          href="#quote"
          className="mt-9 inline-flex items-center justify-center rounded-full bg-cream px-9 py-4 text-base font-semibold text-primary-dark shadow-xl transition hover:bg-white"
        >
          Get a Free Quote
        </a>
      </div>
    </section>
  )
}

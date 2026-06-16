import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section id="about" className="bg-cream py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/gallery/family.webp"
            alt="The Hostetler family, owners of Wretched Man Woodworking"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            About Us
          </p>
          <h2 className="mb-6 font-display text-4xl font-semibold text-espresso md:text-5xl">
            Wretched Man Woodworking
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-espresso/75">
            <p>
              We’re a family-owned shop building beautifully crafted, handmade furniture designed
              with purpose for your home, one-of-a-kind pieces meant to be used, loved, and passed
              down for generations.
            </p>
            <p>
              Because we mill the logs and kiln dry the lumber ourselves, every project is built
              from wood we know from tree to finish. That control is what lets us turn your fallen
              tree, or a fresh idea, into something truly your own.
            </p>
            <p>
              Based in northeast Indiana and serving the greater Fort Wayne area, we’d love to help
              you dream, design, and create your next piece.
            </p>
          </div>
          <Link
            to="/gallery"
            className="mt-7 inline-flex items-center gap-1 font-semibold text-primary transition hover:gap-2"
          >
            See our work →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

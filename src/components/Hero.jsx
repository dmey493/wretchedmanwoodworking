import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// A clean collage of real pieces (no AI). Each frame matches its photo's real
// aspect ratio so nothing is cropped, so the full door is visible.
const frames = [
  { src: '/gallery/masterworks-05.webp', alt: 'Handcrafted arched wood-and-glass entry door', aspect: 'aspect-[2/3]' },
  { src: '/gallery/masterworks-06.webp', alt: 'Walnut round pedestal dining table', aspect: 'aspect-[2/3]' },
  { src: '/gallery/smallgoods-01.webp', alt: 'Round striped walnut and maple cutting board', aspect: 'aspect-[4/3]' },
  { src: '/gallery/aframe-table.webp', alt: 'Oak A-frame dining table', aspect: 'aspect-[4/3]' },
]

export default function Hero() {
  return (
    <section id="top" className="bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Handmade in Northeast Indiana
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-espresso md:text-7xl">
            Design Your <span className="italic text-primary">Dream</span> Furniture
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-espresso/75">
            Custom, handcrafted pieces that are milled, kiln dried, and built from tree to treasured
            furniture that will last for generations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-cream shadow-lg transition hover:bg-primary-dark"
            >
              Get a Free Quote
            </a>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center rounded-full border-2 border-espresso/20 px-8 py-4 text-base font-semibold text-espresso transition hover:border-espresso/50"
            >
              See Our Work
            </Link>
          </div>
        </motion.div>

        {/* Collage of real work; frames sized to each photo so nothing is cropped */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          {frames.map((f) => (
            <div
              key={f.src}
              className="overflow-hidden rounded-xl bg-white p-2 shadow-lg ring-1 ring-espresso/5"
            >
              <div className={`overflow-hidden rounded-lg ${f.aspect}`}>
                <img src={f.src} alt={f.alt} className="h-full w-full object-cover" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

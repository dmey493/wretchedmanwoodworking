import { motion } from 'framer-motion'
import { Trees, Flame, Hammer } from 'lucide-react'

const steps = [
  {
    icon: Trees,
    title: 'Milled On-Site',
    text: 'We mill your trees on-site with our production Wood-Mizer LT40 Wide, handling logs up to 36" in diameter.',
  },
  {
    icon: Flame,
    title: 'Kiln Dried',
    text: 'The lumber is carefully kiln dried to the right moisture content so your finished piece stays stable for generations.',
  },
  {
    icon: Hammer,
    title: 'Handcrafted',
    text: 'We dream, design, and build your one-of-a-kind piece by hand, made to your exact specifications.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cream/70">
            Our Process
          </p>
          <h2 className="font-display text-4xl font-semibold text-cream md:text-5xl">
            From Tree to Treasured Furniture
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: -56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ type: 'spring', stiffness: 130, damping: 13, delay: i * 0.2 }}
              className="text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cream/15 text-cream">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 font-display text-2xl font-semibold text-cream">
                {i + 1}. {step.title}
              </h3>
              <p className="leading-relaxed text-cream/80">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

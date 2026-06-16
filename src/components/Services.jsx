import { motion } from 'framer-motion'
import { Sofa, Triangle, Utensils, Axe } from 'lucide-react'

const services = [
  {
    icon: Sofa,
    title: 'Custom Designed Furniture',
    text: 'Custom furniture is what makes Wretched Man Woodworking tick. Work with us to dream, design, and create a one-of-a-kind piece that will last generations.',
  },
  {
    icon: Triangle,
    title: 'A-Frame Tables',
    text: 'Our A-Frame design makes a sleek, elegant base for coffee and dining tables, whether you want a rectangle, a round, or something in between. Choose your shape and size and we’ll do the rest.',
  },
  {
    icon: Utensils,
    title: 'Custom Cutting Boards',
    text: 'A necessity for every kitchen and a great gift. Create your own one-of-a-kind cutting board starting at just $99.',
  },
  {
    icon: Axe,
    title: 'Custom Milling & Lumber',
    text: 'Turn your fallen or damaged tree into beautiful lumber for your next project. Our Wood-Mizer LT40 Wide handles logs up to 36" in diameter.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            What We Build
          </p>
          <h2 className="font-display text-4xl font-semibold text-espresso md:text-5xl">
            Crafted with purpose, made to last
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href="#quote"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block rounded-2xl border border-primary/10 bg-cream p-8 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-cream">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 font-display text-2xl font-semibold text-espresso">
                {service.title}
              </h3>
              <p className="mb-5 leading-relaxed text-espresso/70">{service.text}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition group-hover:gap-2">
                Request a quote →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

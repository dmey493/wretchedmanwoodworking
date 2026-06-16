import { Link } from 'react-router-dom'

// A few favorites for the auto-scrolling strip. To add/remove, edit this list
// (files live in public/gallery/). Variable-width frames = nothing gets cropped.
const builds = [
  'masterworks-02.webp',
  'aframe-table.webp',
  'smallgoods-01.webp',
  'masterworks-06.webp',
  'aframe-coffee-table.webp',
  'smallgoods-04.webp',
  'masterworks-05.webp',
  'smallgoods-03.webp',
  'masterworks-08.webp',
  'smallgoods-02.webp',
  'masterworks-03.webp',
  'smallgoods-05.webp',
]

export default function Showcase() {
  return (
    <section className="overflow-hidden bg-espresso py-20">
      <div className="mx-auto mb-12 max-w-3xl px-5 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
          Recent Builds
        </p>
        <h2 className="font-display text-4xl font-semibold text-cream md:text-5xl">
          Things We’ve Built
        </h2>
        <p className="mt-4 text-cream/70">
          A glimpse at past projects, each one custom made by hand.
        </p>
      </div>

      <div className="relative">
        {/* Soft fades at the edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-espresso to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-espresso to-transparent sm:w-24" />

        <div className="flex animate-marquee">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0 gap-5 pr-5" aria-hidden={group === 1}>
              {builds.map((file, i) => (
                <div
                  key={`${group}-${i}`}
                  className="h-56 shrink-0 overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/10 md:h-64"
                >
                  <img
                    src={`/gallery/${file}`}
                    alt="Custom piece handcrafted by Wretched Man Woodworking"
                    loading="lazy"
                    className="h-full w-auto"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-1 font-semibold text-primary-light transition hover:gap-2 hover:text-cream"
        >
          See all our work →
        </Link>
      </div>
    </section>
  )
}

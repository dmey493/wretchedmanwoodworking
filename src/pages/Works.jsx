import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// ───────────────────────────────────────────────────────────────────────────
// HOW TO ADD WORK:
//   • New photo of an EXISTING piece: drop the file in public/gallery/ and add
//     its filename to that piece's `photos` array (first photo = the cover).
//   • A whole NEW piece: add a { title, photos:[...] } object to the right
//     collection below. Add `note` for an optional one-line description.
// ───────────────────────────────────────────────────────────────────────────
const collections = [
  {
    name: 'Masterworks',
    blurb:
      'Custom furniture and statement pieces: live-edge tables, dining tables, doors, and heirloom builds made to order.',
    pieces: [
      {
        title: 'Walnut Round Pedestal Dining Table',
        photos: ['masterworks-06.webp', 'masterworks-08.webp', 'masterworks-07.webp'],
      },
      {
        title: 'Oak A-Frame Dining Table',
        photos: ['aframe-table.webp', 'aframe-table-side.webp', 'masterworks-09.webp'],
      },
      {
        title: 'Round A-Frame Coffee Table',
        photos: ['aframe-coffee-table.webp', 'masterworks-10.webp'],
      },
      { title: 'Arched Glass Entry Door', photos: ['masterworks-05.webp'] },
      {
        title: 'IU Live-Edge Coffee Table',
        photos: ['masterworks-02.webp', 'masterworks-03.webp'],
      },
    ],
  },
  {
    name: 'Artisan Small Goods',
    blurb:
      'Cutting boards, shelves, and smaller handcrafted pieces, one-of-a-kind gifts that bring the workshop home.',
    pieces: [
      { title: 'Round Striped Cutting Board', photos: ['smallgoods-01.webp'] },
      { title: 'End-Grain Checkerboard Board', photos: ['smallgoods-03.webp'] },
      { title: 'Live-Edge Floating Shelf', photos: ['smallgoods-02.webp'] },
      { title: 'Walnut Step Stool', photos: ['smallgoods-05.webp'] },
      { title: 'Custom Retail Display', photos: ['smallgoods-04.webp'] },
    ],
  },
]

function Lightbox({ photos, index, onClose, onChange }) {
  const many = photos.length > 1
  const prev = useCallback(
    () => onChange((index - 1 + photos.length) % photos.length),
    [index, photos.length, onChange],
  )
  const next = useCallback(() => onChange((index + 1) % photos.length), [index, photos.length, onChange])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const btn =
    'absolute z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25'

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button onClick={onClose} aria-label="Close" className={`${btn} right-4 top-4`}>
        <X className="h-6 w-6" />
      </button>
      {many && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            prev()
          }}
          aria-label="Previous"
          className={`${btn} left-3 top-1/2 -translate-y-1/2 sm:left-6`}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}
      <img
        src={`/gallery/${photos[index]}`}
        alt="Wretched Man Woodworking piece, full view"
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
      />
      {many && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            next()
          }}
          aria-label="Next"
          className={`${btn} right-3 top-1/2 -translate-y-1/2 sm:right-6`}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}
      {many && (
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur">
          {index + 1} / {photos.length}
        </span>
      )}
    </div>
  )
}

function PieceCard({ piece, onOpen }) {
  const [cover, ...rest] = piece.photos
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-2xl border border-espresso/10 bg-white shadow-sm transition hover:shadow-md"
    >
      <button
        type="button"
        onClick={() => onOpen(piece.photos, 0)}
        title="Click to view full size"
        className="block aspect-[4/3] w-full cursor-pointer overflow-hidden"
      >
        <img
          src={`/gallery/${cover}`}
          alt={piece.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </button>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-espresso">{piece.title}</h3>
        {piece.note && <p className="mt-1 text-sm text-espresso/60">{piece.note}</p>}
        {rest.length > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-2">
            {rest.map((photo, i) => (
              <button
                key={photo}
                type="button"
                onClick={() => onOpen(piece.photos, i + 1)}
                title="Click to view full size"
                className="cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  src={`/gallery/${photo}`}
                  alt={piece.title}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition hover:scale-105"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}

export default function Works() {
  const [lightbox, setLightbox] = useState(null) // { photos, index } | null
  const open = (photos, index) => setLightbox({ photos, index })

  return (
    <main>
      {/* Page intro */}
      <section className="bg-espresso py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
            Portfolio
          </p>
          <h1 className="font-display text-5xl font-semibold text-cream md:text-6xl">Our Work</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-cream/70">
            Every piece is custom built by hand, from milling and drying the lumber to the final
            finish. Click any photo to view it full size.
          </p>
        </div>
      </section>

      {/* Collections */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl space-y-20 px-5">
          {collections.map((collection) => (
            <div key={collection.name}>
              <div className="mb-8 border-b border-espresso/10 pb-5">
                <h2 className="font-display text-3xl font-semibold text-espresso md:text-4xl">
                  {collection.name}
                </h2>
                <p className="mt-2 max-w-2xl text-espresso/70">{collection.blurb}</p>
              </div>
              <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {collection.pieces.map((piece) => (
                  <PieceCard key={piece.title} piece={piece} onOpen={open} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-display text-3xl font-semibold text-cream md:text-4xl">
            Have a piece in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/85">
            Tell us what you’re dreaming up and we’ll get back to you with a free quote.
          </p>
          <a
            href="/#quote"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-cream px-9 py-4 text-base font-semibold text-primary-dark shadow-xl transition hover:bg-white"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {lightbox && (
        <Lightbox
          photos={lightbox.photos}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onChange={(i) => setLightbox((lb) => ({ ...lb, index: i }))}
        />
      )}
    </main>
  )
}

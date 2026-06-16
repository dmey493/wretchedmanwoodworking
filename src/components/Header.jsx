import { Link } from 'react-router-dom'

// Hash links point at "/#section" so they work from any page (the works page
// included). They navigate home and scroll to the section.
const navLinks = [
  { href: '/#process', label: 'Process' },
  { href: '/#services', label: 'What We Build' },
  { to: '/gallery', label: 'Our Work' },
  { href: '/#about', label: 'About' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center" aria-label="Wretched Man Woodworking home">
          <img src="/logo.webp" alt="Wretched Man Woodworking" className="h-14 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium text-espresso/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-espresso/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        {/* Top CTA */}
        <a
          href="/#quote"
          className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-cream shadow-md transition hover:bg-primary-dark"
        >
          Get a Free Quote
        </a>
      </div>
    </header>
  )
}

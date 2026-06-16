import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-espresso py-12 text-cream/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-2xl font-semibold text-cream">Wretched Man Woodworking</p>
          <p className="mt-1 text-sm">Handmade custom furniture · Northeast Indiana</p>
          <nav className="mt-3 flex flex-wrap justify-center gap-5 text-sm md:justify-start">
            <Link to="/" className="transition hover:text-primary-light">
              Home
            </Link>
            <Link to="/gallery" className="transition hover:text-primary-light">
              Our Work
            </Link>
            <a href="/#quote" className="transition hover:text-primary-light">
              Get a Quote
            </a>
          </nav>
        </div>
        <div className="flex flex-col items-center gap-1 text-sm md:items-end">
          <a href="mailto:dhostetler@wmwoodworking.com" className="transition hover:text-primary-light">
            dhostetler@wmwoodworking.com
          </a>
          <a href="tel:+12606939781" className="transition hover:text-primary-light">
            (260) 693-9781
          </a>
          <span>Mon – Fri · 10am – 6pm</span>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-cream/10 px-5 pt-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Wretched Man Woodworking. All rights reserved.
      </div>
    </footer>
  )
}

import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const links = [
  { to: '/about', label: 'About' },
  { to: '/sectors', label: 'Sectors' },
  { to: '/projects', label: 'Projects' },
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/careers', label: 'Careers' },
  { to: '/news', label: 'News' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`nav${open ? ' is-open' : ''}`}>
      <div className="nav-inner">
        <Link className="logo" to="/" onClick={() => setOpen(false)}>
          Holt <span>+</span> Fenwick
        </Link>
        <nav className="nav-desktop" aria-label="Primary">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
            <li>
              <Link className="btn btn-nav" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>
      </div>
      <div
        className={`mobile-backdrop${open ? ' is-open' : ''}`}
        hidden={!open}
        onClick={() => setOpen(false)}
      />
      <nav
        id="mobile-menu"
        className={`mobile-panel${open ? ' is-open' : ''}`}
        aria-label="Mobile"
        hidden={!open}
      >
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
            {link.label}
          </NavLink>
        ))}
        <Link className="btn" to="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
      </nav>
    </header>
  )
}

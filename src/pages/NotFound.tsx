import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>That page is not on the drawings.</h1>
        <p className="lede">Try the yard homepage, or go straight to projects.</p>
        <div className="hero-actions">
          <Link className="btn" to="/">
            Home
          </Link>
          <Link className="btn ghost" to="/projects">
            Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

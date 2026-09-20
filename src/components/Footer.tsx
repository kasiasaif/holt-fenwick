import { Link } from 'react-router-dom'
import { company, offices } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-cta">
        <div>
          <p className="eyebrow">A project, or a first conversation</p>
          <h2>Tell us what you need on the ground.</h2>
        </div>
        <Link className="btn light" to="/contact">
          Enquire now
        </Link>
      </div>
      <div className="wrap footer-grid">
        <div>
          <Link className="logo" to="/">
            Holt <span>+</span> Fenwick
          </Link>
          <p className="muted">
            A family-owned contractor for civic, education, living, and industrial
            work across the north and midlands.
          </p>
        </div>
        <div>
          <p className="eyebrow">Head office</p>
          <p>{company.address}</p>
          <p>{company.hours}</p>
          <p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          <p>
            <a href={`mailto:${company.enquiriesEmail}`}>{company.enquiriesEmail}</a>
          </p>
          <p>
            Switchboard{' '}
            <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
          </p>
          <p>
            Out of hours{' '}
            <a href={`tel:${company.outOfHours.replace(/\s/g, '')}`}>{company.outOfHours}</a>
          </p>
        </div>
        <div>
          <p className="eyebrow">Yards</p>
          <ul className="footer-links">
            {offices.map((office) => (
              <li key={office.region}>
                {office.region} · {office.city}
                <br />
                <a href={`tel:${office.phone.replace(/\s/g, '')}`}>{office.phone}</a>
                <br />
                <a href={`mailto:${office.email}`}>{office.email}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Studio</p>
          <ul className="footer-links">
            <li>
              <Link to="/about">Who we are</Link>
            </li>
            <li>
              <Link to="/sectors">Sectors</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Holt + Fenwick. Sample company for a portfolio.</span>
        <span>Placeholder contact details · no live personal data</span>
      </div>
    </footer>
  )
}

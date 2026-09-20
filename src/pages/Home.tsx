import { Link } from 'react-router-dom'
import { news, projects, quotes, sectors, stats } from '../data'

export default function Home() {
  return (
    <>
      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80"
          alt=""
        />
        <div className="hero-copy wrap">
          <p className="eyebrow light">Family-owned contractor · Leeds</p>
          <h1>We build places that stay useful.</h1>
          <p className="lede light">
            Civic, education, living, and industrial work. Four yards. A
            programme you can visit on a Tuesday.
          </p>
          <div className="hero-actions">
            <Link className="btn light" to="/projects">
              Latest work
            </Link>
            <Link className="btn ghost-light" to="/about">
              Who we are
            </Link>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap stats">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="stat-value">{item.value}</p>
              <p className="stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">The yard</p>
            <h2>Steady hands. Clear programmes.</h2>
          </div>
          <p className="lede">
            Holt + Fenwick is still run by the families that started it. We take
            work we can finish well, keep a site that neighbours can live next
            to, and come back when the next phase is ready — not when a
            brochure needs filling.
          </p>
        </div>
      </section>

      <section className="section sector-block">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Sectors</p>
              <h2>Work we know how to finish.</h2>
            </div>
            <Link className="text-link" to="/sectors">
              All sectors
            </Link>
          </div>
          <ol className="sector-list">
            {sectors.map((sector) => (
              <li key={sector.slug}>
                <Link to="/sectors">
                  <span className="num">{sector.n}</span>
                  <span>{sector.name}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Projects</p>
              <h2>Recent ground.</h2>
            </div>
            <Link className="text-link" to="/projects">
              All projects
            </Link>
          </div>
          <div className="project-grid featured">
            {projects.slice(0, 3).map((project) => (
              <Link className="project-card" to="/projects" key={project.slug}>
                <img src={project.image} alt="" />
                <div className="project-card-body">
                  <p className="eyebrow">{project.sector}</p>
                  <h3>{project.name}</h3>
                  <p>
                    {project.place} · {project.client}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section quotes">
        <div className="wrap">
          <p className="eyebrow">From the other side of the table</p>
          <div className="quote-grid">
            {quotes.map((quote) => (
              <blockquote key={quote.role}>
                <p>{quote.text}</p>
                <cite>{quote.role}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="people-band">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
          alt=""
        />
        <div className="people-copy wrap">
          <p className="eyebrow light">People</p>
          <h2>The yard and the drawing office.</h2>
          <p>
            Training happens on live jobs. Regional teams stay close to the
            client, and the head office still answers the phone.
          </p>
          <Link className="btn light" to="/careers">
            Work with us
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Notes from the yard</p>
              <h2>Latest news.</h2>
            </div>
            <Link className="text-link" to="/news">
              All news
            </Link>
          </div>
          <div className="news-list">
            {news.map((item) => (
              <article key={item.title}>
                <p className="eyebrow">{item.date}</p>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

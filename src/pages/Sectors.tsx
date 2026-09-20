import { Link } from 'react-router-dom'
import { sectors } from '../data'

export default function Sectors() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Sectors</p>
            <h1>Eight kinds of building. The same way of running a site.</h1>
          </div>
          <p className="lede">
            We do not chase every brief. The list below is the work we staff
            for, price honestly, and know how to close.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap sector-page">
          {sectors.map((sector) => (
            <article className="sector-row" key={sector.slug}>
              <div className="sector-visual">
                <img src={sector.image} alt="" />
              </div>
              <div>
                <p className="num">{sector.n}</p>
                <h2>{sector.name}</h2>
                <p>{sector.blurb}</p>
                <Link className="text-link" to="/projects">
                  See related work
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

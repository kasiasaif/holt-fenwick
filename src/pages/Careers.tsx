import { Link } from 'react-router-dom'
import { company, roles } from '../data'

export default function Careers() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Careers</p>
            <h1>Come to the yard. Stay long enough to run one.</h1>
          </div>
          <p className="lede">
            We hire for sites we already have, not a generic talent pool.
            Sample roles below. Write to{' '}
            <a href={`mailto:${company.careersEmail}`}>{company.careersEmail}</a>{' '}
            or call{' '}
            <a href={`tel:${company.careersPhone.replace(/\s/g, '')}`}>{company.careersPhone}</a>
            . All contact details are fictional.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap role-list">
          {roles.map((role) => (
            <article key={role.title}>
              <img src={role.image} alt="" />
              <div>
                <p className="eyebrow">
                  {role.place} · {role.type}
                </p>
                <h2>{role.title}</h2>
                <p>{role.note}</p>
              </div>
              <Link className="btn" to="/contact">
                Ask about this role
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { company, people, stats } from '../data'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap split">
          <div>
            <p className="eyebrow">About</p>
            <h1>A family contractor with four yards and one way of working.</h1>
          </div>
          <p className="lede">
            Holt + Fenwick started in {company.founded} with a small joinery
            shop and a van. The work grew. The habit stayed: take jobs we can
            stand beside in five years, and keep the site good enough that
            people still say hello at the gate.
          </p>
        </div>
      </section>

      <section className="media wrap">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
          alt=""
        />
      </section>

      <section className="section">
        <div className="wrap split">
          <h2>What we hold to.</h2>
          <div className="value-list">
            <div>
              <h3>Finish the building, not the slide</h3>
              <p>
                Handover is when the heating works, the keys match the doors,
                and the caretaker has a number that answers.
              </p>
            </div>
            <div>
              <h3>Stay close to the job</h3>
              <p>
                Regional yards run their own sites. Head office is for
                commercial backup, not a distant brand layer.
              </p>
            </div>
            <div>
              <h3>Come back</h3>
              <p>
                Most of our work is for people we already know. That only
                happens if the last job still behaves.
              </p>
            </div>
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
        <div className="wrap">
          <p className="eyebrow">The table</p>
          <h2>Who sits where.</h2>
          <ul className="people-grid">
            {people.map((person) => (
              <li key={person.name}>
                <img src={person.image} alt="" />
                <div className="card-body">
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                  <p>
                    <a href={`mailto:${person.email}`}>{person.email}</a>
                  </p>
                  <p>
                    <a href={`tel:${person.phone.replace(/\s/g, '')}`}>{person.phone}</a>
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="fineprint">
            Names on this page are fictional sample staff for a portfolio site.
          </p>
          <Link className="btn" to="/contact">
            Talk to the yard
          </Link>
        </div>
      </section>
    </>
  )
}

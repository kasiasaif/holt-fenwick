import { useState, type FormEvent } from 'react'
import { company, offices } from '../data'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Start with the job, not a marketing form.</h1>
          </div>
          <p className="lede">
            This form stays on the page. Nothing is stored or emailed — it is
            here to show how an enquiry would look.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          {sent ? (
            <div className="success">
              <p className="eyebrow">Received</p>
              <h2>Thank you.</h2>
              <p>In a live site, the yard would write back within two working days.</p>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit}>
              <label className="field">
                <span>Name</span>
                <input name="name" required placeholder="Your name" />
              </label>
              <label className="field">
                <span>Email</span>
                <input name="email" type="email" required placeholder="you@email.com" />
              </label>
              <label className="field">
                <span>About the job</span>
                <textarea name="note" rows={5} required placeholder="Place, sector, timing" />
              </label>
              <button className="btn" type="submit">
                Send enquiry
              </button>
            </form>
          )}

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
            <p>
              Press{' '}
              <a href={`mailto:${company.pressEmail}`}>{company.pressEmail}</a>
            </p>
            <p>
              Careers{' '}
              <a href={`mailto:${company.careersEmail}`}>{company.careersEmail}</a>
            </p>
            <ul className="office-list">
              {offices.map((office) => (
                <li key={office.region}>
                  <strong>
                    {office.region} · {office.city}
                  </strong>
                  <span>{office.address}</span>
                  <span>
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`}>{office.phone}</a>
                  </span>
                  <span>
                    <a href={`mailto:${office.email}`}>{office.email}</a>
                  </span>
                </li>
              ))}
            </ul>
            <p className="fineprint">All numbers and emails on this site are fictional samples.</p>
          </div>
        </div>
      </section>
    </>
  )
}

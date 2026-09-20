import { news } from '../data'

export default function News() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap split">
          <div>
            <p className="eyebrow">News</p>
            <h1>Notes from the yard, not a press office.</h1>
          </div>
          <p className="lede">
            Short updates on jobs, training, and the Leeds works. These items
            are sample copy for the portfolio.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap news-list tall">
          {news.map((item) => (
            <article key={item.title}>
              <p className="eyebrow">{item.date}</p>
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

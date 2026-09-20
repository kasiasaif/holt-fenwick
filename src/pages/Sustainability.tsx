import { Link } from 'react-router-dom'

export default function Sustainability() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Sustainability</p>
            <h1>Less waste on the slab. Fewer miles for the same timber.</h1>
          </div>
          <p className="lede">
            We treat this as site practice, not a separate brochure. If it does
            not change a delivery or a skip, it does not go on this page.
          </p>
        </div>
      </section>

      <section className="media wrap">
        <img
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80"
          alt=""
        />
      </section>

      <section className="section">
        <div className="wrap value-list three">
          <div>
            <h3>Keep materials on the yard</h3>
            <p>
              The Leeds timber store takes offcuts back in. The aim is reuse
              on the next frame, not a nicer photo of a skip.
            </p>
          </div>
          <div>
            <h3>Build for the caretaker</h3>
            <p>
              Simple plant rooms, doors that can be replaced, and finishes
              that survive a wet winter without a specialist flight.
            </p>
          </div>
          <div>
            <h3>Travel less between yards</h3>
            <p>
              Regional teams hold their own plant. We do not truck a hoist
              the length of the country because a spreadsheet likes it.
            </p>
          </div>
        </div>
        <div className="wrap" style={{ marginTop: 40 }}>
          <Link className="btn" to="/contact">
            Ask how a job is run
          </Link>
        </div>
      </section>
    </>
  )
}

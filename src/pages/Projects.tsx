import { projects } from '../data'

export default function Projects() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Projects</p>
            <h1>A short list of recent ground.</h1>
          </div>
          <p className="lede">
            Sample schemes for this portfolio. Places, clients, and photos are
            illustrative — not live jobs or real client names.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <img src={project.image} alt="" />
              <div className="project-card-body">
                <p className="eyebrow">{project.sector}</p>
                <h3>{project.name}</h3>
                <p>
                  {project.place} · {project.client}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

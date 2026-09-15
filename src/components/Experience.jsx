import { experience } from '../data.js'

function Experience() {
  return (
    <section className="section" id="experiencia">
      <div className="container">
        <h2 className="section__title">Experiencia laboral</h2>
        <p className="section__subtitle">Mi trayectoria profesional</p>
        <div className="timeline">
          {experience.map((job) => (
            <article className="job" key={`${job.role}-${job.company}`}>
              <div className="job__head">
                <h3>{job.role}</h3>
                <span className="job__company">{job.company}</span>
              </div>
              <p className="job__period">{job.period}</p>
              <p className="job__description">{job.description}</p>
              <div className="job__tags">
                {job.technologies.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
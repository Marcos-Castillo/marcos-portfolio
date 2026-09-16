import { projects } from '../data.js'

function Projects() {
  return (
    <section className="section section--alt" id="proyectos">
      <div className="container">
        <h2 className="section__title">Proyectos</h2>
        <p className="section__subtitle">Mis proyectos destacados</p>
        <div className="projects">
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <img
                className="card__image"
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
              <div className="card__body">
                <h3 className="card__title">{project.title}</h3>
                <p className="card__text">{project.description}</p>
                {project.repo && (
                  <a
                    className="btn btn--outline btn--small"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repositorio
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
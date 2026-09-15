import { profile } from '../data.js'

function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="container hero__inner">
        <p className="hero__badge">¡Hola! Soy</p>
        <h1 className="hero__title">{profile.name}</h1>
        <p className="hero__role">{profile.role}</p>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--accent" href="#proyectos">
            Ver proyectos
          </a>
          <a className="btn btn--outline" href="#contacto">
            Contactarme
          </a>
        </div>
        <div className="hero__social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

export default Hero
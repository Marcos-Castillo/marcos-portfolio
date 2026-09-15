import { profile } from '../data.js'

function Contact() {
  return (
    <section className="section section--alt" id="contacto">
      <div className="container">
        <h2 className="section__title">Contacto</h2>
        <p className="section__subtitle">No dudes en escribirme</p>
        <div className="contact">
          <div className="contact__item">
            <h3>Email</h3>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="contact__item">
            <h3>Teléfono / WhatsApp</h3>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer">
              {profile.phone}
            </a>
          </div>
          <div className="contact__item">
            <h3>Ubicación</h3>
            <p>{profile.location}</p>
          </div>
          <div className="contact__item">
            <h3>Redes</h3>
            <ul className="contact__links">
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={profile.discord} target="_blank" rel="noreferrer">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
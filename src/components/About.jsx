import { profile, skillsGroups } from '../data.js'

function About() {
  return (
    <section className="section" id="sobre-mi">
      <div className="container">
        <h2 className="section__title">Sobre mí</h2>
        <p className="section__subtitle">Conoce más sobre mi perfil profesional</p>
        <div className="about">
          <p className="about__summary">{profile.summary}</p>
          <div className="about__groups">
            {skillsGroups.map((group) => (
              <div className="about__group" key={group.label}>
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
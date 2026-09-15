import { skills } from '../data.js'

function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <p className="section__subtitle">Tecnologías que utilizo a diario</p>
        <div className="skills">
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <img src={skill.img} alt={skill.name} width="40" height="40" loading="lazy" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
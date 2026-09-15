import { degrees, languages } from '../data.js'

function Education() {
  return (
    <section className="section" id="estudios">
      <div className="container">
        <h2 className="section__title">Estudios y certificaciones</h2>
        <p className="section__subtitle">Educación, licencias y certificaciones</p>

        <h3 className="education__group-title">Idiomas</h3>
        <div className="education__languages">
          {languages.map((lang) => (
            <div className="education__language" key={lang.name}>
              <span className="tag">{lang.name}</span>
              <span>{lang.level}</span>
            </div>
          ))}
        </div>

        <h3 className="education__group-title">Formación y certificaciones</h3>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Institución</th>
                <th>Año</th>
              </tr>
            </thead>
            <tbody>
              {degrees.map((degree) => (
                <tr key={`${degree.title}-${degree.year}`}>
                  <td>{degree.title}</td>
                  <td>{degree.institution}</td>
                  <td>{degree.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Education
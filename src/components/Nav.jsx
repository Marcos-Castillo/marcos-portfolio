import { navLinks, profile } from '../data.js'

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#inicio">
          <span className="nav__logo" aria-hidden="true">
            {'>_'}
          </span>
          {profile.name}
        </a>
        <ul className="nav__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a className="btn btn--accent" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </nav>
  )
}

export default Nav
import { profile } from '../data.js'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Created by {profile.name} · © {new Date().getFullYear()}
        </p>
        <p>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>{' '}
          ·{' '}
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
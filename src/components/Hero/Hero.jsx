import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { useContent } from '../../hooks/useContent'
import './Hero.css'

export default function Hero() {
  const t = useContent()

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-wave">{t.hero.wave} 👋</p>
          <h1 className="hero-line">
            {t.hero.intro}{' '}
            <span className="highlight">
              <span>{t.hero.firstName}</span>
            </span>
            {t.hero.introEnd}
          </h1>

          <div className="hero-social">
            <a
              href="https://www.linkedin.com/in/berke-berk-264004138/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/Neovoss" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>

          <p className="hero-status">
            {t.hero.statusPrefix} <strong>{t.hero.statusHighlight}</strong> {t.hero.statusSuffix}
          </p>
          <p className="hero-invite">
            {t.hero.ctaText} <a href={`mailto:${t.hero.email}`}>{t.hero.email}</a>
          </p>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-photo-frame">
            <div className="hero-avatar">BB</div>
          </div>
          <div className="hero-visual-pill" />
        </div>
      </div>
    </section>
  )
}

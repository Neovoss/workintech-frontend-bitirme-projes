import { useContent } from '../../hooks/useContent'
import './Footer.css'

const SOCIAL_LINKS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/Neovoss' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/berke-berk-264004138/' },
  { id: 'mail', label: 'E-posta', href: 'mailto:berkee144@gmail.com' },
]

export default function Footer() {
  const t = useContent()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <h2 className="footer-cta">
          {t.footer.ctaStart}{' '}
          <span className="underline">{t.footer.ctaHighlight}</span> {t.footer.ctaEnd}
        </h2>

        <ul className="footer-links">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.id}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="footer-meta">
          © {year} {t.nav.brand} — {t.footer.rights} · {t.footer.builtWith}
        </p>
      </div>
    </footer>
  )
}

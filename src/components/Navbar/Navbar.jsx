import { useApp } from '../../context/AppContext'
import { useContent } from '../../hooks/useContent'
import './Navbar.css'

export default function Navbar() {
  const { darkMode, dispatch } = useApp()
  const t = useContent()

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="navbar-mark" aria-label={t.nav.brand} />

        <div className="navbar-controls">
          <button
            type="button"
            className={`theme-switch ${darkMode ? 'is-on' : ''}`}
            onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
            aria-pressed={darkMode}
          >
            <span className="theme-switch-track">
              <span className="theme-switch-knob" />
            </span>
            <span className="theme-switch-label">{t.nav.darkMode}</span>
          </button>

          <span className="navbar-divider" aria-hidden="true">|</span>

          <button
            type="button"
            className="lang-link"
            onClick={() => dispatch({ type: 'TOGGLE_LANGUAGE' })}
          >
            {t.nav.switchTo}
          </button>
        </div>
      </div>
    </header>
  )
}

import { useContent } from '../../hooks/useContent'
import './About.css'

export default function About() {
  const t = useContent()

  const rows = [
    { label: t.about.birthDateLabel, value: t.about.birthDate },
    { label: t.about.cityLabel, value: t.about.city },
    { label: t.about.educationLabel, value: t.about.education },
    { label: t.about.roleLabel, value: t.about.roleValue },
  ]

  return (
    <section id="about" className="section section-alt about">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2 className="section-title">{t.about.title}</h2>
        </div>

        <div className="about-inner">
          <div className="info-card">
            <h3 className="info-card-title">{t.about.infoTitle}</h3>
            <dl className="info-card-list">
              {rows.map((row) => (
                <div className="info-card-row" key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="about-text">
            <h3 className="about-text-title">{t.about.aboutTitle}</h3>
            {t.about.paragraphs.map((paragraph, index) => (
              <p className="about-paragraph" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

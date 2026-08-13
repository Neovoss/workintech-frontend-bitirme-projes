import { useApp } from '../../context/AppContext'
import { useContent } from '../../hooks/useContent'
import projects from '../../data/projects.json'
import './Projects.css'

export default function Projects() {
  const { language } = useApp()
  const t = useContent()

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.projects.eyebrow}</span>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-card-${index % 4}`} key={project.id}>
              <h3 className="project-title">{project.title[language]}</h3>
              <p className="project-description">{project.description[language]}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.codeUrl && (
                  <a href={project.codeUrl} target="_blank" rel="noreferrer" className="project-link">
                    {t.projects.codeLabel}
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                    {t.projects.liveLabel} →
                  </a>
                )}
              </div>

              <div className="project-mockup" aria-hidden="true">
                <div className="project-mockup-screen">
                  {project.title[language]
                    .split(' ')
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join('')}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

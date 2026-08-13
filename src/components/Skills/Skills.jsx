import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiFigma,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { useContent } from '../../hooks/useContent'
import skills from '../../data/skills.json'
import './Skills.css'

const ICON_MAP = {
  html5: { Icon: SiHtml5, bg: '#E34F26', fg: '#ffffff' },
  css3: { Icon: SiCss, bg: '#1572B6', fg: '#ffffff' },
  javascript: { Icon: SiJavascript, bg: '#F7DF1E', fg: '#1a1a1a' },
  react: { Icon: SiReact, bg: '#20232A', fg: '#61DAFB' },
  nodejs: { Icon: SiNodedotjs, bg: '#333333', fg: '#68A063' },
  git: { Icon: SiGit, bg: '#F05032', fg: '#ffffff' },
  figma: { Icon: SiFigma, bg: '#1E1E1E', fg: '#ffffff' },
  vscode: { Icon: VscVscode, bg: '#0078D4', fg: '#ffffff' },
}

export default function Skills() {
  const t = useContent()

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.skills.eyebrow}</span>
          <h2 className="section-title">{t.skills.title}</h2>
          <p className="section-subtitle">{t.skills.subtitle}</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => {
            const { Icon, bg, fg } = ICON_MAP[skill.key]
            return (
              <div className="skill-badge" key={skill.id}>
                <div className="skill-badge-icon" style={{ backgroundColor: bg, color: fg }}>
                  <Icon />
                </div>
                <span className="skill-badge-name">{skill.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

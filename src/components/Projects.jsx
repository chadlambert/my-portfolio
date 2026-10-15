import data from '../data';
import FadeIn from './FadeIn';

export default function Projects() {
  return (
    <FadeIn>
      <section id="projects">
        <p className="section-label">Projects</p>
        <h2>Things I&rsquo;ve Built</h2>
        <div className="projects__grid">
          {data.projects.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-card__icon">{p.icon}</div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.description}</p>
              <div className="project-card__tech">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-card__links">
                {p.links.map((l) => (
                  <a href={l.href} key={l.label}>{l.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
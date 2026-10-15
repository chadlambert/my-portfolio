import data from '../data';
import FadeIn from './FadeIn';

export default function Skills() {
  return (
    <FadeIn>
      <section id="skills">
        <p className="section-label">Skills</p>
        <h2>Tools &amp; Technologies</h2>
        <div className="skills__grid">
          {data.skills.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3 className="skill-group__heading">
                <span className="icon">{group.icon}</span>
                {group.title}
              </h3>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
import data from '../data';
import FadeIn from './FadeIn';

export default function About() {
  const { heading, paragraphs, stats } = data.about;

  return (
    <FadeIn>
      <section id="about">
        <p className="section-label">About</p>
        <h2>
          {heading[0]}
          <br />
          {heading[1]}
        </h2>
        <div className="about__grid">
          <div className="about__text">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="about__stats">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="stat-card__num">{s.num}</div>
                <div className="stat-card__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
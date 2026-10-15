import data from '../data';

export default function Hero() {
  const { greeting, name, tagline, buttons } = data;

  return (
    <section className="hero" id="hero">
      <p className="hero__greeting">{greeting}</p>
      <h1 className="hero__name">
        {name.split(' ')[0]} <span>{name.split(' ').slice(1).join(' ')}</span>
      </h1>
      <p className="hero__tagline">{tagline}</p>
      <div className="hero__cta">
        <a href={buttons.primary.href} className="btn btn--primary">
          {buttons.primary.label}
        </a>
        <a href={buttons.outline.href} className="btn btn--outline">
          {buttons.outline.label}
        </a>
      </div>
    </section>
  );
}
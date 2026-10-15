import data from '../data';
import FadeIn from './FadeIn';

export default function Contact() {
  const { heading, description, links } = data.contact;

  return (
    <FadeIn>
      <section id="contact" className="contact">
        <p className="section-label">Contact</p>
        <h2>{heading}</h2>
        <p className="contact__desc">{description}</p>
        <div className="contact__links">
          {links.map((l) => (
            <a
              href={l.href}
              className="contact-link"
              key={l.label}
              {...(l.href.startsWith('http')
                ? { target: '_blank', rel: 'noopener' }
                : {})}
            >
              {l.icon} {l.label}
            </a>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
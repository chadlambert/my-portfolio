import data from '../data';
import FadeIn from './FadeIn';

export default function Resume() {
  return (
    <FadeIn>
      <section id="resume">
        <p className="section-label">Resume</p>
        <h2>My Experience</h2>
        <p className="resume__description">
          View my resume below, or open it in OneDrive to save a copy.
        </p>
        <div className="resume__actions">
          <a
            className="btn btn--primary"
            href={data.resume.downloadUrl}
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
          <a
            className="btn btn--outline"
            href={data.resume.openUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open in OneDrive
          </a>
        </div>
        <div className="resume__viewer">
          <iframe
            src={data.resume.embedUrl}
            title="Chad Alan Lambert resume"
            loading="lazy"
            allowFullScreen
          >
            <a href={data.resume.openUrl} target="_blank" rel="noreferrer">
              Open my resume in OneDrive
            </a>
          </iframe>
        </div>
      </section>
    </FadeIn>
  );
}

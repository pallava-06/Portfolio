import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export default function Contact() {
  return (
    <main className="page">
      <section className="detail-hero">
        <Reveal>
          <p className="eyebrow">// CONTACT</p>
          <h1>Let&apos;s build something useful.</h1>
          <p className="detail-sub">
            I&apos;m interested in good problems, ambitious ideas, and conversations with people who care about building things well.
          </p>
        </Reveal>
      </section>
      <section className="section" style={{ borderTop: 0, paddingTop: 20 }}>
        <div className="contact-grid">
          <div className="contact-card">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>Say hello.</h2>
            <div className="contact-list">
              <div>
                <span className="contact-label">Email</span>
                <a className="small-link" href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              <div>
                <span className="contact-label">Phone</span>
                <a className="small-link" href={`tel:${site.phone}`}>{site.phone}</a>
              </div>
              <div>
                <span className="contact-label">GitHub</span>
                <a className="small-link" href={site.github} target="_blank" rel="noreferrer">github.com/pallava-06 ↗</a>
              </div>
              <div>
                <span className="contact-label">LinkedIn</span>
                <span style={{ color: "var(--muted)" }}>Profile URL not included in the supplied resume.</span>
              </div>
            </div>
            <div className="actions">
              <Link className="btn" href="/">← Back to home</Link>
              <a className="btn" href="/assets/Pallavarajan_T_AI_ML_Resume.pdf" download>View resume →</a>
            </div>
          </div>
          <div className="contact-card">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import { experience, site } from "@/content/site";

export default function Home() {
  return (
    <main className="page">
      <section className="hero" id="hero">
        <Reveal>
          <div>
            <p className="eyebrow">AI &amp; MACHINE LEARNING</p>
            <h1>Pallavarajan T</h1>
            <p>
              {site.summary} I care about practical systems, thoughtful interfaces, and making technical work understandable.
            </p>
            <div className="actions">
              <Link className="btn primary" href="#projects">
                View my work <span>→</span>
              </Link>
              <a className="btn" href={`mailto:${site.email}`} data-cursor-text="MAIL">
                Email <span aria-hidden="true">✉</span>
              </a>
              <a className="btn" href={site.github} target="_blank" rel="noreferrer" data-cursor-text="CODE">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-meta">
              <span>Based in {site.location}</span>
              <span>Open to interesting opportunities</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="hero-art" aria-label="Developer workbench visual">
            <div className="note one">ship · iterate · measure</div>
            <div className="window">
              <div className="window-top"><i/><i/><i/></div>
              <img className="window-photo" src="/assets/profile.jpg" alt="Pallavarajan T" />
            </div>
            <div className="terminal">
              $ build portfolio<br/>
              <b>✓</b> routes ready<br/>
              <b>✓</b> accessible states<br/>
              <b>✓</b> reduced motion
            </div>
            <div className="note two">Python · FastAPI · PyTorch</div>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="section" id="about">
          <div className="about-grid-tidy">
            <div className="about-card-primary">
              <span className="eyebrow">// ABOUT ME</span>
              <h2>Curious developer. Problem solver. Builder.</h2>
              <p className="section-intro">
                I enjoy working where engineering meets useful product thinking. I&apos;m happiest when a complicated problem becomes understandable—and then becomes something people can actually use.
              </p>
              <div className="about-action-group">
                <a className="btn primary download-cv-btn" href="/assets/Pallavarajan_T_AI_ML_Resume.pdf" download data-cursor-text="CV">
                  <span>Download CV</span>
                  <span className="btn-icon" aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="about-card-principles">
              <span className="eyebrow">// CORE PRINCIPLES</span>
              <div className="principles-tidy-list">
                {[
                  ["01", "Understand first", "I like knowing why something should exist before deciding how to build it."],
                  ["02", "Keep systems understandable", "Clever code is useful only when the next person can still reason about it."],
                  ["03", "Iterate quickly", "Build something real, learn from it, improve it."],
                ].map(([num, t, d]) => (
                  <div className="principle-item-tidy" key={t}>
                    <span className="principle-badge">{num}</span>
                    <div className="principle-content">
                      <h3>{t}</h3>
                      <p>{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="section" id="projects">
        <PortfolioShowcase />
      </section>

      <section className="section" id="experience">
        <div className="section-head">
          <div>
            <p className="eyebrow">// EXPERIENCE</p>
            <h2>Where I&apos;ve been building.</h2>
          </div>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <div className="timeline-item" key={`${item.company}-${item.title}`}>
              <span className="timeline-dot" />
              <div className="timeline-period">{item.period}</div>
              <div>
                <h3>{item.title}</h3>
                <p>
                  {item.company} · {item.location}
                  <br />
                  {item.description}
                </p>
                <div className="tech-row">
                  {item.technologies.map((t) => (
                    <span className="pill" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="cta">
          <div>
            <p className="eyebrow">LET&apos;S BUILD</p>
            <h2>Let&apos;s build something useful.</h2>
          </div>
          <div>
            <p>I&apos;m interested in good problems, ambitious ideas, and opportunities to keep learning by building.</p>
            <Link className="btn primary" href="/contact">
              Start a conversation <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

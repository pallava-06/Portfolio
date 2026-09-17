"use client";

import { useMemo, useState } from "react";
import { achievements, projects, skills } from "@/content/site";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

const tabs = [
  { id: "Projects", label: "Featured Work", count: projects.length, icon: "projects" },
  { id: "Certificates", label: "Certifications & Education", count: achievements.length, icon: "certificates" },
  { id: "Tech Stack", label: "Tech Stack", count: Object.keys(skills).length, icon: "stack" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const projectFilters = ["All", "AI / NLP", "Computer Vision", "Deep Learning"] as const;
type ProjectFilter = (typeof projectFilters)[number];

function getTechIcon(name: string) {
  const normalized = name.toLowerCase();
  const sz = "19";
  if (normalized.includes("python")) {
    return (
      <svg width={sz} height={sz} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.927 0C6.31 0 6.643 2.44 6.643 2.44v2.527h5.396v.764H4.278S0 5.23 0 10.87c0 5.64 3.738 5.438 3.738 5.438h2.235v-3.14s-.12-3.737 3.687-3.737h5.727s3.52-.06 3.52-3.52C18.907 2.44 15.65 0 11.927 0zm-2.85 1.543a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z"/>
        <path d="M12.073 24c5.617 0 5.284-2.44 5.284-2.44v-2.527h-5.396v-.764h7.761S24 18.77 24 13.13c0-5.64-3.738-5.438-3.738-5.438h-2.235v3.14s.12 3.737-3.687 3.737H8.613s-3.52.06-3.52 3.52C5.093 21.56 8.35 24 12.073 24zm2.85-1.543a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z"/>
      </svg>
    );
  }
  if (normalized.includes("sql")) {
    return (
      <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    );
  }
  if (normalized.includes("tensorflow")) {
    return (
      <svg width={sz} height={sz} viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.292 5.856L11.54 0v23.542l-4.48-2.618V13.79L1.292 9.771v-3.915zm21.416 0l-10.248-5.856v23.542l4.48-2.618V13.79l5.768-4.019v-3.915zM12 11.231l-4.48-2.618L12 5.996l4.48 2.617-4.48 2.618z"/>
      </svg>
    );
  }
  if (normalized.includes("fastapi")) {
    return (
      <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    );
  }
  if (normalized.includes("pytorch")) {
    return (
      <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zm2.5-5.5a3.5 3.5 0 0 1-7 0v-1a3.5 3.5 0 0 1 7 0z"/>
      </svg>
    );
  }
  if (normalized.includes("scikit")) {
    return (
      <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/>
        <circle cx="19" cy="5" r="2"/>
        <circle cx="5" cy="19" r="2"/>
        <path d="M12 9V5M12 15v4M15 12h4M9 12H5"/>
      </svg>
    );
  }
  if (normalized.includes("opencv")) {
    return (
      <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      </svg>
    );
  }
  if (normalized.includes("numpy")) {
    return (
      <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>
      </svg>
    );
  }
  if (normalized.includes("pandas")) {
    return (
      <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18"/>
        <rect x="7" y="10" width="3" height="8" rx="1"/>
        <rect x="13" y="6" width="3" height="12" rx="1"/>
      </svg>
    );
  }
  if (normalized.includes("hugging")) {
    return (
      <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9"/>
        <path d="M8 13a4 4 0 0 0 8 0M9 9h.01M15 9h.01"/>
      </svg>
    );
  }
  if (normalized.includes("transformer")) {
    return (
      <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    );
  }
  if (normalized.includes("github")) {
    return (
      <svg width={sz} height={sz} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    );
  }
  if (normalized.includes("git")) {
    return (
      <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="6" r="3"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="6" cy="6" r="3"/>
        <path d="M18 9v2a2 2 0 0 1-2 2H9M6 9v6"/>
      </svg>
    );
  }
  if (normalized.includes("vs code") || normalized.includes("vscode")) {
    return (
      <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    );
  }
  if (normalized.includes("vision")) {
    return (
      <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="22" y1="12" x2="18" y2="12"/>
        <line x1="6" y1="12" x2="2" y2="12"/>
        <line x1="12" y1="6" x2="12" y2="2"/>
        <line x1="12" y1="22" x2="12" y2="18"/>
      </svg>
    );
  }
  if (normalized.includes("learning") || normalized.includes("deep")) {
    return (
      <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a9 9 0 0 1 9 9c0 3.6-2.1 6.7-5.2 8.1v.9a2 2 0 0 1-2 2h-3.6a2 2 0 0 1-2-2v-.9A9.01 9.01 0 0 1 3 11a9 9 0 0 1 9-9z"/>
      </svg>
    );
  }
  if (normalized.includes("nlp")) {
    return (
      <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    );
  }
  return (
    <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  );
}

export function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState<TabId>("Projects");
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>("All");

  const filteredProjects = useMemo(
    () =>
      projectFilter === "All"
        ? projects
        : projects.filter((project) => project.category === projectFilter),
    [projectFilter]
  );

  const skillGroups = useMemo(
    () =>
      Object.entries(skills) as Array<[keyof typeof skills, (typeof skills)[keyof typeof skills]]>,
    []
  );

  return (
    <div className="interactive-showcase v2-showcase">
      <div className="showcase-header-nav">
        <div className="showcase-tabs-v2" role="tablist" aria-label="Portfolio showcase sections">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`showcase-tab-btn ${isActive ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">
                  {tab.icon === "projects" && (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 12 2"/>
                      <polyline points="2 17 12 22 22 17"/>
                      <polyline points="2 12 12 17 22 12"/>
                    </svg>
                  )}
                  {tab.icon === "certificates" && (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 15l-2 5l-2-1l-2 1l1-4"/>
                      <circle cx="12" cy="9" r="6"/>
                    </svg>
                  )}
                  {tab.icon === "stack" && (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="8" height="8" rx="2"/>
                      <rect x="14" y="2" width="8" height="8" rx="2"/>
                      <rect x="2" y="14" width="8" height="8" rx="2"/>
                      <rect x="14" y="14" width="8" height="8" rx="2"/>
                    </svg>
                  )}
                </span>
                <span className="tab-label">{tab.label}</span>
                <span className="tab-badge">{tab.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {activeTab === "Projects" && (
        <div className="showcase-panel animated-panel" role="tabpanel">
          <div className="showcase-panel-head">
            <div>
              <p className="eyebrow">// SELECTED WORK</p>
              <h3>End-to-end AI applications &amp; systems</h3>
            </div>
            <p className="showcase-panel-copy">
              Hands-on engineering across semantic matching, computer vision video pipelines, and deep learning models.
            </p>
          </div>
          <div className="filter-row showcase-filters" aria-label="Filter projects by domain">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter ${projectFilter === filter ? "active" : ""}`}
                aria-pressed={projectFilter === filter}
                onClick={() => setProjectFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="project-grid showcase-project-grid">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.04}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {activeTab === "Certificates" && (
        <div className="showcase-panel animated-panel" role="tabpanel">
          <div className="showcase-panel-head">
            <div>
              <p className="eyebrow">// CREDENTIALS &amp; EDUCATION</p>
              <h3>Academic foundation &amp; certifications</h3>
            </div>
            <p className="showcase-panel-copy">
              Verified domain training in applied machine learning, neural networks, and computer science engineering.
            </p>
          </div>
          <div className="showcase-certificate-grid">
            {achievements.map((item) => (
              <div className="showcase-certificate" key={`${item.type}-${item.title}`}>
                <div className="showcase-certificate-mark">
                  {item.type === "Certification" ? "✓" : "🎓"}
                </div>
                <div className="showcase-certificate-content">
                  <div className="cert-meta-row">
                    <span className="tag">{item.type}</span>
                    <span className="cert-status">Verified</span>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "Tech Stack" && (
        <div className="showcase-panel animated-panel" role="tabpanel">
          <div className="showcase-panel-head">
            <div>
              <p className="eyebrow">// TECHNICAL SKILLS</p>
              <h3>Tools, frameworks &amp; core technologies</h3>
            </div>
            <p className="showcase-panel-copy">
              Structured taxonomy of languages, machine learning frameworks, NLP libraries, and development tools.
            </p>
          </div>
          <div className="showcase-stack-grid">
            {skillGroups.map(([group, items], index) => (
              <Reveal key={group} delay={index * 0.05}>
                <div className="showcase-stack-card">
                  <div className="showcase-stack-top">
                    <span className="showcase-stack-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="eyebrow">{group}</span>
                    <span className="stack-item-count">{items.length} tools</span>
                  </div>
                  <div className="showcase-stack-list">
                    {items.map((item) => (
                      <span className="pill tech-pill-v2 large-tech-pill" key={item}>
                        <span className="tech-pill-icon">
                          {getTechIcon(item)}
                        </span>
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

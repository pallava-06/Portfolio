import type { projects } from "@/content/site";

export function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className={`project-card ${project.featured ? "featured" : ""}`}>
      <div className={`visual ${project.category.includes("Computer") ? "alt" : ""}`} aria-hidden="true">
        <div className="mini-ui">
          <div className="mini-chip-row"><span className="mini-chip"/><span className="mini-chip"/><span className="mini-chip"/></div>
          <div className="mini-row med"/><div className="mini-row"/><div className="mini-row small"/>
          <div className="mini-row"/><div className="mini-row med"/>
        </div>
        {project.category.includes("Computer") && <span className="mini-dot" style={{ left: "61%", top: "43%" }}/>} 
      </div>
      <div className="project-top"><span className="project-number">{project.number}</span><span className="tag">{project.category} · {project.year}</span></div>
      <h3>{project.title}</h3><p>{project.summary}</p>
      <div className="tech-row">{project.technologies.map((t) => <span className="pill" key={t}>{t}</span>)}</div>
      {project.githubUrl ? <a className="card-link" href={project.githubUrl} target="_blank" rel="noreferrer" data-cursor-text="CODE"><span>View on GitHub</span><span>↗</span></a> : <div className="card-link muted"><span>Link not provided</span></div>}
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { GhostCursor } from "@/components/GhostCursor";

const sectionLinks = [
  ["Home", "hero"],
  ["About", "about"],
  ["Projects", "projects"],
  ["Experience", "experience"],
] as const;

const RESUME_HREF = "/assets/Pallavarajan_T_AI_ML_Resume.pdf";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menu, setMenu] = useState(false);
  const [progress, setProgress] = useState(0);
  const [command, setCommand] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommand((v) => !v);
      }
      if (e.key === "Escape") {
        setCommand(false);
        setMenu(false);
      }
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const ids = sectionLinks.map(([, id]) => id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  const commands = useMemo(
    () => [...sectionLinks.map(([label, id]) => [label, `/#${id}`] as const), ["Contact", "/contact"] as const],
    []
  );

  return (
    <div className="site">
      <GhostCursor />
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <header className="site-header">
        <nav className="desktop-nav" aria-label="Main navigation">
          {sectionLinks.map(([label, id]) => (
            <Link href={`/#${id}`} className={isHome && activeSection === id ? "active" : ""} key={id} aria-current={isHome && activeSection === id ? "page" : undefined}>
              {label}
            </Link>
          ))}
          <Link href="/contact" className={pathname === "/contact" ? "active" : ""} aria-current={pathname === "/contact" ? "page" : undefined}>
            Contact
          </Link>
        </nav>
        <div className="header-actions">
          <Link className="header-cta" href="/contact" data-cursor-text="TALK">Let&apos;s talk <span>→</span></Link>
          <button className="mobile-menu" type="button" onClick={() => setMenu((v) => !v)} aria-expanded={menu}>{menu ? "Close" : "Menu"}</button>
        </div>
      </header>

      {menu && <div className="mobile-panel"><div className="mobile-panel-head"><span className="eyebrow">YOU ARE HERE</span><strong>{isHome ? sectionLinks.find(([, id]) => id === activeSection)?.[0] ?? "Home" : "Contact"}</strong></div><nav aria-label="Mobile navigation">{sectionLinks.map(([label, id]) => <Link className={isHome && activeSection === id ? "active" : ""} href={`/#${id}`} key={id} onClick={() => setMenu(false)}>{label}<span>→</span></Link>)}<Link className={pathname === "/contact" ? "active" : ""} href="/contact" onClick={() => setMenu(false)}>Contact<span>→</span></Link></nav></div>}

      {children}

      <footer className="footer">
        <div><p className="eyebrow">PALLAVARAJAN T · AI &amp; MACHINE LEARNING</p><p className="footer-quote">Good software should feel obvious after it&apos;s built.</p></div>
        <div className="footer-bottom"><span>© 2026 Pallavarajan T</span><span>Built with curiosity. Designed with intent.</span><button className="footer-command" onClick={() => setCommand(true)}>⌘K to explore</button></div>
      </footer>

      {command && <div className="command-backdrop" role="presentation" onClick={() => setCommand(false)}><div className="command" role="dialog" aria-modal="true" aria-label="Command menu" onClick={(e) => e.stopPropagation()}><div className="command-top"><span>Jump anywhere</span><kbd>ESC</kbd></div>{commands.map(([label, href]) => <Link key={href} href={href} onClick={() => setCommand(false)}>{label}<span>↗</span></Link>)}<a href={RESUME_HREF} download onClick={() => setCommand(false)}>Resume<span>↗</span></a></div></div>}
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page">
      <section className="detail-hero">
        <p className="eyebrow">// 404</p>
        <h1>Well, that&apos;s not here.</h1>
        <p className="detail-sub">Maybe it was deleted. Maybe it never existed. Maybe it&apos;s waiting for a better implementation.</p>
        <div className="actions">
          <Link className="btn primary" href="/">Back home →</Link>
        </div>
      </section>
    </main>
  );
}

export default function NotFound() {
  return (
    <section className="not-found-page section-shell">
      <p className="eyebrow">404 · Page not found</p>
      <h1>This page is off the field.</h1>
      <p>The address may have changed, or the page may no longer exist.</p>
      <div className="not-found-actions">
        <a className="button button-primary" href="/">Return home</a>
        <a className="button button-secondary" href="/#contact">Start a project</a>
      </div>
    </section>
  );
}

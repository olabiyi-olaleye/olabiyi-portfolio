import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap lost">
      <p className="mono muted">404</p>
      <h1>That page doesn&rsquo;t exist</h1>
      <p className="muted">The link may be old, or there may be a typo in it.</p>
      <p>
        <Link href="/">Back to the homepage</Link>
      </p>
    </main>
  );
}

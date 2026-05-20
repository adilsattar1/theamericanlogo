import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-page" style={{ padding: "4rem", textAlign: "center" }}>
      <h1>404</h1>
      <p>This page could not be found.</p>
      <p>The URL you requested does not exist or has been moved.</p>
      <Link href="/">
        <a style={{ color: "#0070f3", textDecoration: "underline" }}>Go back home</a>
      </Link>
    </div>
  );
}

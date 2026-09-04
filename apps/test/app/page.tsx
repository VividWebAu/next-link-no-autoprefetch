import { Link } from "@vividwebau/next-link-no-autoprefetch";

export default function Page() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Test App</h1>

      <Link href="/about" className="test-class">
        About Page
      </Link>

      <Link href="/contact" prefetch>
        Contact Page (prefetch enabled)
      </Link>
    </main>
  );
}

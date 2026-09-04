import { Link } from "@vividwebau/next-link-no-autoprefetch";

export default function Page() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Test App</h1>

      {/* Basic link with className */}
      <Link href="/about" className="test-class">
        About Page
      </Link>

      {/* Explicit prefetch enabled */}
      <Link href="/contact" prefetch>
        Contact Page (prefetch enabled)
      </Link>

      {/* Childless link */}
      <p>Childless link (should be valid):</p>
      <Link href="/no-children" />

      {/* Link with inline styles */}
      <Link
        href="/styled"
        style={{ color: "red", fontWeight: "bold", padding: 8 }}
        prefetch={false}
      >
        Styled Link
      </Link>

      {/* Link with target + rel */}
      <Link
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        prefetch={false}
      >
        External Link (new tab)
      </Link>

      {/* Link with aria attributes */}
      <Link
        href="/aria"
        aria-label="Aria labelled link"
        aria-current="page"
        prefetch={false}
      >
        Aria Link
      </Link>

      {/* Link with replace navigation */}
      <Link href="/replace-nav" replace prefetch={false}>
        Replace Navigation
      </Link>

      {/* Link with scroll disabled */}
      <Link href="/no-scroll" scroll={false} prefetch={false}>
        No Scroll Link
      </Link>

      {/* Link with shallow routing */}
      <Link href="/shallow" shallow prefetch={false}>
        Shallow Routing Link
      </Link>

      {/* Link with onClick handler */}
      <Link
        href="/onclick"
        onClick={() => console.log("Link clicked")}
        prefetch={false}
      >
        Link With onClick
      </Link>

      {/* Link with nested children */}
      <Link href="/nested" prefetch={false}>
        <span style={{ color: "purple" }}>
          <strong>Nested Children Link</strong>
        </span>
      </Link>

      {/* Link with fragment children */}
      <Link href="/fragment" prefetch={false}>
        <>
          Fragment Child 1
          <br />
          Fragment Child 2
        </>
      </Link>

      {/* Link with numeric children */}
      <Link href="/numeric" prefetch={false}>
        {12345}
      </Link>

      {/* Link with boolean children (ignored but allowed) */}
      <Link href="/boolean" prefetch={false}>
        {true}
      </Link>

      {/* Link with passHref (not required but allowed) */}
      <Link href="/passhref" passHref prefetch={false}>
        PassHref Link
      </Link>

      {/* Link with ref forwarding */}
      <Link
        href="/ref-test"
        ref={(el) => {
          console.log("Ref forwarded:", el);
        }}
        prefetch={false}
      >
        Ref Forwarding Link
      </Link>

      {/* Link styled to look disabled */}
      <Link
        href="/disabled-look"
        style={{
          pointerEvents: "none",
          opacity: 0.5,
          textDecoration: "line-through",
        }}
        prefetch={false}
      >
        Disabled-Looking Link
      </Link>

      {/* Long text link */}
      <Link href="/long-text" prefetch={false}>
        This is a very long link text to ensure wrapping and layout behave
        correctly inside the wrapper component.
      </Link>
    </main>
  );
}

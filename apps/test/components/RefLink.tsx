"use client";

import Link from "@vividwebau/next-link-no-autoprefetch";

export default function RefLink() {
  return (
    <Link
      href="/ref-test"
      ref={(el) => {
        console.log("Ref forwarded:", el);
      }}
      prefetch={false}
    >
      Ref Forwarding Link
    </Link>
  );
}

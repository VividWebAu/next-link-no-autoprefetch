"use client";

import Link from "@vividwebau/next-link-no-autoprefetch";

export default function OnclickLink() {
  return (
      <Link
        href="/onclick"
        onClick={() => console.log("Link clicked")}
        prefetch={false}
      >
        Link With onClick
      </Link>
  );
}
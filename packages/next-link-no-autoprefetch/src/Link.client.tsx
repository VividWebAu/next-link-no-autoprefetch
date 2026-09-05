"use client";

import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { forwardRef, MouseEvent } from "react";
import type { LinkProps as NextLinkProps } from "next/link";
import type { AnchorHTMLAttributes } from "react";
import type { UrlObject } from "url";

function toHrefString(href: string | UrlObject): string {
  if (typeof href === "string") return href;

  const pathname = href.pathname ?? "";
  const hash = href.hash ?? "";
  const query = href.query;

  let url = pathname;

  if (query && typeof query === "object") {
    const params = new URLSearchParams(query as Record<string, string>);
    url += `?${params.toString()}`;
  } else if (typeof query === "string") {
    url += query.startsWith("?") ? query : `?${query}`;
  }

  if (hash) {
    url += hash.startsWith("#") ? hash : `#${hash}`;
  }

  return url;
}

/**
 * Props for the "no autoprefetch" Link component.
 *
 * Extends Next.js `LinkProps` and standard anchor attributes, while adding
 * an additional `"hover"` prefetch mode for more precise control.
 *
 * `prefetch` modes:
 * - `false`  — disables all automatic prefetching
 * - `true`   — enables Next.js default prefetching (viewport + hover)
 * - `"hover"` — disables automatic prefetching and instead prefetches only
 *               when the user hovers the link
 *
 * Notes:
 * - `"hover"` mode uses `router.prefetch()` internally.
 * - `prefetch="auto"` (Page Router) is intentionally not supported.
 * - This component is a Client Component because it wraps `next/link`,
 *   uses `forwardRef`, and attaches event handlers.
 */
export interface LinkProps
  extends
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Omit<NextLinkProps, "href" | "prefetch"> {
  href: NextLinkProps["href"];
  prefetch?: boolean | "hover";
}

/**
 * A wrapper around `next/link` that disables automatic prefetching by default
 * and adds an optional `"hover"` prefetch mode.
 *
 * This component preserves all App Router behaviour:
 * - typed `href`
 * - `replace`, `scroll`, `shallow`
 * - anchor attributes (`target`, `rel`, `aria-*`, etc.)
 * - ref forwarding
 *
 * Differences from Next.js:
 * - `prefetch` defaults to `false`
 * - adds `"hover"` mode for hover-only prefetching
 * - does not support `prefetch="auto"` (Page Router only)
 *
 * Usage:
 * ```tsx
 * <Link href="/contact">
 *   Link that doesn't prefetch (by default)
 * </Link>
 *
 * <Link href="/contact" prefetch={false}>
 *   Link that doesn't prefetch (explicitly)
 * </Link>
 *
 * <Link href="/contact" prefetch="hover">
 *   Link that only prefetches on-hover
 * </Link>
 *
 * <Link href="/contact" prefetch={true}>
 *   Link that prefetches automatically (default Next.js behavior)
 * </Link>
 * ```
 */
const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, prefetch = false, ...rest }, ref) => {
    const router = useRouter();

    function handleMouseEnter(e: MouseEvent<HTMLAnchorElement>) {
      if (prefetch === "hover") {
        router.prefetch(toHrefString(href));
      }
      rest.onMouseEnter?.(e);
    }

    return (
      <NextLink
        ref={ref}
        href={href}
        prefetch={prefetch === "hover" ? false : prefetch}
        onMouseEnter={handleMouseEnter}
        {...rest}
      >
        {children}
      </NextLink>
    );
  },
);

Link.displayName = "Link";
export default Link;

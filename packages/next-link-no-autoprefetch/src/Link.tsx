import NextLink, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, forwardRef } from "react";

type CombinedProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps;

/**
 * A wrapper around `next/link` that disables automatic prefetching by default.
 *
 * This component preserves all behaviour of Next.js App Router links:
 * - typed `href`
 * - `replace`, `scroll`, `shallow`
 * - `prefetch` (boolean only)
 * - anchor attributes (`target`, `rel`, `aria-*`, etc.)
 *
 * Differences from Next.js:
 * - `prefetch` defaults to `false`
 * - `prefetch="auto"` is not supported (Page Router only)
 */
const Link = forwardRef<HTMLAnchorElement, CombinedProps>(
  ({ prefetch = false, children, ...props }, ref) => {
    return (
      <NextLink ref={ref} prefetch={prefetch} {...props}>
        {children}
      </NextLink>
    );
  },
);

Link.displayName = "Link";
export default Link;

import NextLink from "next/link";

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  prefetch?: boolean | "hover";
}

export default function Link({
  href,
  children,
  prefetch = false,
  ...rest
}: LinkProps) {
  // Server Components cannot use refs or client-side event handlers.
  // We simply pass through to Next.js's own Link.
  return (
    <NextLink
      href={href}
      prefetch={prefetch === "hover" ? false : prefetch}
      {...rest}
    >
      {children}
    </NextLink>
  );
}

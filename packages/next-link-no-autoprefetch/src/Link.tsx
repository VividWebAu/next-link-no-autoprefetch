import NextLink, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, forwardRef } from "react";

type CombinedProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps;

export const Link = forwardRef<HTMLAnchorElement, CombinedProps>(
  ({ prefetch = false, children, ...props }, ref) => {
    return (
      <NextLink ref={ref} prefetch={prefetch} {...props}>
        {children}
      </NextLink>
    );
  },
);

Link.displayName = "Link";

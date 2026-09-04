import NextLink, { LinkProps } from "next/link";
import { ReactNode, AnchorHTMLAttributes, forwardRef } from "react";

export type VividLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
  };

export const Link = forwardRef<HTMLAnchorElement, VividLinkProps>(
  ({ prefetch = false, children, ...props }, ref) => {
    return (
      <NextLink ref={ref} prefetch={prefetch} {...props}>
        {children}
      </NextLink>
    );
  },
);

Link.displayName = "Link";

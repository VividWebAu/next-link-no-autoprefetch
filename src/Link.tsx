import NextLink, { LinkProps } from "next/link";
import { ReactNode } from "react";

export type NewLinkProps = LinkProps & {
  children: ReactNode;
};

export function Link({ prefetch = false, children, ...props }: NewLinkProps) {
  return (
    <NextLink prefetch={prefetch} {...props}>
      {children}
    </NextLink>
  );
}

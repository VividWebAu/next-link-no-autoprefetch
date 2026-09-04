import NextLink, { LinkProps } from "next/link";

export function Link({ prefetch = false, ...props }: LinkProps) {
  return <NextLink prefetch={prefetch} {...props} />;
}

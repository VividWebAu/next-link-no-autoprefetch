# @vividwebau/next-link-no-autoprefetch

A lightweight, controlled wrapper around the Next.js `<Link>` component with **auto-prefetch disabled by default**. Designed for consistent behaviour across projects, this package also includes an ESLint rule that prevents accidental usage of `next/link`.

This ensures predictable navigation performance, avoids unnecessary background prefetching, and keeps link behaviour fully **opt-in**.

---

## Why this exists

Next.js automatically prefetches linked routes, which can be helpful but often leads to:

- unnecessary network activity
- noisy performance profiles
- unexpected background requests
- inconsistent behaviour across projects

This package provides a **stable, predictable alternative**:

- `<Link>` defaults to `prefetch={false}`
- Developers can still enable prefetch manually
- ESLint warns if `next/link` is imported directly
- Behaviour is consistent across all Vivid Web apps

---

## Installation

```bash
pnpm add @vividwebau/next-link-no-autoprefetch
```

---

## Usage (`prefetch={false}` by default)

```tsx
import { Link } from "@vividwebau/next-link-no-autoprefetch";

export default function Example() {
  return (
    <Link href="/about">
      About Us
    </Link>
  );
}
```

## Opt-in prefetching

```tsx
<Link href="/dashboard" prefetch>
  Go to dashboard
</Link>
```

---

## ESLint Rule

To prevent accidental usage of next/link, enable the included ESLint plugin:

```js
// .eslintrc.cjs or eslint.config.js
module.exports = {
  plugins: ["@vividwebau/next-link-no-autoprefetch"],
  rules: {
    "@vividwebau/next-link-no-autoprefetch/no-next-link": "warn"
  }
};
```

This rule triggers whenever next/link is imported directly.

---

## Versioning

This package uses peer dependencies for next and react, ensuring compatibility across multiple Next.js versions without pinning or coupling to internal APIs.
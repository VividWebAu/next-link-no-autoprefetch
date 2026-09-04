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

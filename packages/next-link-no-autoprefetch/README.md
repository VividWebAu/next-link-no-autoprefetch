# @vividwebau/next-link-no-autoprefetch

A drop‑in replacement for Next.js `<Link>` with `prefetch={false}` by default.  
Designed for predictable performance, explicit intent, and strict TypeScript behaviour.

---

## **Features**

- autoprefetch disabled unless explicitly enabled
- identical API to `next/link`
- full passthrough of anchor attributes (`className`, `style`, `id`, etc.)
- strict TypeScript typing
- optional ESLint rule to enforce explicit `prefetch` usage
- Biome‑friendly import restriction pattern
- tested in a real Next.js app before publish

---

## **Installation**

```bash
pnpm add @vividwebau/next-link-no-autoprefetch
```

---

## **Usage**

```tsx
import Link from "@vividwebau/next-link-no-autoprefetch";

export default function Page() {
  return (
    <Link href="/about" className="nav-item">
      About
    </Link>
  );
}
```

### **Enable prefetch explicitly**

```tsx
<Link href="/contact" prefetch>
  Contact
</Link>
```

---

## **Typing**

This component merges:

- `LinkProps` from `next/link`
- `AnchorHTMLAttributes<HTMLAnchorElement>`
- `children: ReactNode`

This ensures correct typing for:

- `className`
- `style`
- `onClick`
- `target`
- `rel`
- all other anchor attributes

---

## **Biome Users**

Biome does not currently support custom lint rules, but you can still enforce usage of this component by restricting imports of `next/link`.

Add this to your `biome.json`:

```json
{
  "linter": {
    "enabled": true,
    "rules": {
      "style": {
        "noRestrictedImports": {
          "level": "error",
          "options": {
            "paths": {
              "next/link": "Use @vividwebau/next-link-no-autoprefetch instead"
            }
          }
        }
      }
    }
  }
}
```

This produces an error whenever `next/link` is imported.

---

## **ESLint Users**

Install the companion plugin:

```bash
pnpm add -D eslint-plugin-next-link-no-autoprefetch
```

Add the rule to your ESLint config:

```json
{
  "plugins": ["next-link-no-autoprefetch"],
  "rules": {
    "next-link-no-autoprefetch/no-next-link": "error"
  }
}
```

This rule prevents accidental usage of `next/link`:

### **Invalid**
```tsx
import Link from "next/link";
```

### **Valid**
```tsx
import Link from "@vividwebau/next-link-no-autoprefetch";
```

Use this if your project uses ESLint and you want a hard guarantee that the wrapper is always used.

---

## **Test App**

This package is validated in a real Next.js environment located at:

```
apps/test
```

The test app ensures:

- correct prop passthrough
- correct typing under strict TS
- correct runtime behaviour
- no regressions before publish
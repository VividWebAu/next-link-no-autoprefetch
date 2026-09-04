# eslint-plugin-next-link-no-autoprefetch

An ESLint plugin that prevents direct usage of `next/link` and guides developers to use `@vividwebau/next-link-no-autoprefetch` instead.

This is a small, focused plugin intended to be used alongside the `@vividwebau/next-link-no-autoprefetch` package.

---

## **Purpose**

In projects that adopt `@vividwebau/next-link-no-autoprefetch` as the standard, you generally want to avoid:

```tsx
import Link from "next/link";
```

This plugin provides a rule that:

- detects imports from `next/link`
- reports them as violations
- suggests using `@vividwebau/next-link-no-autoprefetch` instead

---

## **Installation**

```bash
pnpm add -D eslint-plugin-next-link-no-autoprefetch
```

---

## **Usage**

Add the plugin and rule to your ESLint config:

```json
{
  "plugins": ["next-link-no-autoprefetch"],
  "rules": {
    "next-link-no-autoprefetch/no-next-link": "error"
  }
}
```

---

## **Rule: no-next-link-import**

### **Invalid**

```tsx
import Link from "next/link";

<Link href="/about">About</Link>;
```

### **Valid**

```tsx
import Link from "@vividwebau/next-link-no-autoprefetch";

<Link href="/about">About</Link>;
```

The rule simply enforces that `next/link` is not imported directly.

---

## **Recommended Setup**

Use this plugin if your project uses **ESLint** and you want:

- a hard guarantee that `next/link` is not used
- a clear migration path to `@vividwebau/next-link-no-autoprefetch`

For teams using **Biome**, see the Biome section below.

---

## **Biome Users**

Biome does not currently support custom lint rules, but you can achieve similar behaviour using `noRestrictedImports`:

```json
{
  "linter": {
    "rules": {
      "noRestrictedImports": {
        "level": "error",
        "options": {
          "paths": [
            {
              "name": "next/link",
              "message": "Use @vividwebau/next-link-no-autoprefetch instead."
            }
          ]
        }
      }
    }
  }
}
```

This enforces usage of your wrapper component in Biome‑based projects.

# @vividwebau/next-link-no-autoprefetch

A focused workspace for a single Next.js utility:

- A `<Link>` wrapper that disables autoprefetch by default
- An optional ESLint rule to enforce explicit `prefetch` usage
- A small Next.js test app to catch typing and runtime regressions before publish

---

## **Packages**

### **next-link-no-autoprefetch**

- Next.js `<Link>` wrapper with `prefetch={false}` by default
- TypeScript-first
- Located at: `packages/next-link-no-autoprefetch`

### **eslint-plugin-next-link-no-autoprefetch**

- ESLint rule enforcing explicit `prefetch` usage
- Helps teams avoid accidental implicit prefetching
- Located at: `packages/eslint-plugin-next-link-no-autoprefetch`

---

## **Test App**

### **vividweb-test-app**

- Minimal Next.js app used to validate:
  - prop passthrough (`className`, `style`, etc.)
  - `prefetch` behaviour
  - typing under strict TypeScript
- Located at: `apps/test`

---

## **Structure**

```text
/
  packages/
    next-link-no-autoprefetch/
    eslint-plugin-next-link-no-autoprefetch/

  apps/
    test/

  .github/
  pnpm-workspace.yaml
  tsconfig.base.json
  pnpm-lock.yaml
  README.md
```

---

## **Development**

**Install:**

```bash
pnpm install
```

**Build package:**

```bash
pnpm --filter next-link-no-autoprefetch build
```

**Typecheck package:**

```bash
pnpm --filter next-link-no-autoprefetch typecheck
```

**Run test app:**

```bash
pnpm --filter vividweb-test-app dev
```

---

## **Publishing**

Publishing is automated via GitHub Releases:

- Create a release with a semver tag
- CI runs build, typecheck, lint, and test app
- If the version does not exist on npm, it is published

This keeps releases retryable and avoids broken versions.

---

## **Linting**

- **Biome**: recommended for consuming projects
- **ESLint**: supported via `eslint-plugin-next-link-no-autoprefetch` for teams using ESLint

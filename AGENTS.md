<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# AGENTS.md

- App is strictly RTL Arabic: `<html lang="ar" dir="rtl">` in `src/routes/__root.tsx`. All layout uses logical properties (ms/me/ps/pe, start/end), never left/right.
- Fonts: Cairo (display) + Tajawal (body) loaded via `<link>` in `__root.tsx` head; referenced through `--font-display` / `--font-body` tokens in `src/styles.css`. Never `@import` remote fonts in CSS.
- All colors are oklch semantic tokens in `src/styles.css` (`:root` + `.dark`); components use Tailwind semantic classes only (`text-brand`, `bg-surface`, `shadow-brand`, …).
- Structure: `src/components/app-shell.tsx` is the shared layout (desktop sidebar + mobile pill nav) wrapped around `<Outlet />` in the root route. Tabs are routes: `/` (تفريغ الصوتيات), `/review` (التدقيق والتشكيل), `/export` (تنسيق وتصدير).

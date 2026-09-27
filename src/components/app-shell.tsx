import { Link, useRouterState } from "@tanstack/react-router";
import { AudioLines, PenLine, FileDown } from "lucide-react";
import type { ReactNode } from "react";

const tabs = [
  { to: "/", label: "تفريغ الصوتيات", icon: AudioLines },
  { to: "/review", label: "التدقيق والتشكيل", icon: PenLine },
  { to: "/export", label: "تنسيق وتصدير", icon: FileDown },
] as const;

function useIsActive() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));
}

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand shadow-brand">
        <span className="font-display text-lg font-extrabold text-primary-foreground">ص</span>
      </div>
      <div>
        <p className="font-display text-lg font-extrabold leading-none text-foreground">صوتُك</p>
        <p className="mt-1 text-[11px] text-muted-foreground">استوديو التفريغ الذكي</p>
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const isActive = useIsActive();

  return (
    <div className="flex min-h-screen w-full bg-surface font-body text-foreground">
      {/* Desktop sidebar (right side in RTL) */}
      <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col border-e border-line bg-card px-5 py-6 lg:flex">
        <BrandMark />

        <nav className="mt-10 flex flex-col gap-2">
          {tabs.map((tab) => {
            const active = isActive(tab.to);
            return (
              <Link
                key={tab.to}
                to={tab.to}
                className={
                  "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-colors " +
                  (active
                    ? "bg-brand font-bold text-primary-foreground shadow-brand"
                    : "font-medium text-muted-foreground hover:bg-muted")
                }
              >
                <tab.icon className="size-5 shrink-0" />
                <span>{tab.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-2xl border border-line bg-surface p-4">
          <p className="flex items-center gap-2 font-display text-xs font-bold text-foreground">
            <span className="inline-block size-2 rounded-full bg-brand animate-pulse" />
            نسخة تجريبية
          </p>
          <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
            تستخدم حصة مجانية من التفريغ. ترقّي حسابك لمزيد من الساعات.
          </p>
        </div>
      </aside>

      {/* Main column */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Mobile top bar */}
        <header className="flex items-center justify-between px-5 pb-3 pt-5 lg:hidden">
          <BrandMark />
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-accent/25 px-3 py-1.5 text-[11px] font-bold text-accent-foreground">
              نسخة تجريبية
            </span>
            <div className="grid size-10 place-items-center rounded-full bg-destructive/15 font-display font-bold text-destructive">
              ن
            </div>
          </div>
        </header>

        {/* Mobile tab pills */}
        <nav className="px-5 pb-3 lg:hidden">
          <div className="flex items-center gap-2 rounded-3xl border border-line bg-card p-1.5 shadow-card">
            {tabs.map((tab) => {
              const active = isActive(tab.to);
              return (
                <Link
                  key={tab.to}
                  to={tab.to}
                  className={
                    "flex flex-1 flex-col items-center gap-1 rounded-2xl py-3 text-center transition-colors " +
                    (active
                      ? "bg-brand font-bold text-primary-foreground shadow-brand"
                      : "font-medium text-muted-foreground")
                  }
                >
                  <tab.icon className="size-4" />
                  <span className="text-[11px] leading-none">{tab.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

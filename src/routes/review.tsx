import { createFileRoute } from "@tanstack/react-router";
import { PenLine } from "lucide-react";

export const Route = createFileRoute("/review")({
  head: () => ({
    meta: [
      { title: "التدقيق والتشكيل — صوتُك" },
      { name: "description", content: "دقّق النص المُفرَّغ وأضف التشكيل تلقائياً لقراءة سليمة." },
      { property: "og:title", content: "التدقيق والتشكيل — صوتُك" },
      { property: "og:description", content: "دقّق النص المُفرَّغ وأضف التشكيل تلقائياً." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewPage,
});

function ReviewPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 pb-12 pt-2 lg:px-10 lg:pt-10">
      <section className="mt-1 lg:mt-0">
        <h1 className="font-display text-[27px] font-extrabold leading-[1.15] text-foreground md:text-4xl">
          التدقيق <span className="text-brand">والتشكيل</span>
        </h1>
        <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground md:text-sm">
          راجع النص المُفرَّغ لغوياً وأضف التشكيل تلقائياً.
        </p>
      </section>

      <section className="mt-6">
        <div className="flex min-h-[320px] flex-col items-center justify-center gap-3 rounded-3xl border border-line bg-card p-8 text-center md:p-12">
          <div className="grid size-16 place-items-center rounded-full bg-brand/10">
            <PenLine className="size-8 text-brand" />
          </div>
          <h2 className="font-display text-lg font-extrabold text-foreground">
            قريباً في الاستوديو
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            جهّز نصاً من تبويب «تفريغ الصوتيات» أولاً، وستجد أدوات التدقيق اللغوي والتشكيل الآلي هنا.
          </p>
        </div>
      </section>
    </div>
  );
}

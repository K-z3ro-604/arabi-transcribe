import { createFileRoute } from "@tanstack/react-router";
import { FileDown } from "lucide-react";

export const Route = createFileRoute("/export")({
  head: () => ({
    meta: [
      { title: "تنسيق وتصدير — صوتُك" },
      { name: "description", content: "صمّم النص النهائي وصدّره إلى Word أو PDF أو نص عادي." },
      { property: "og:title", content: "تنسيق وتصدير — صوتُك" },
      { property: "og:description", content: "صمّم النص النهائي وصدّره بضغطة واحدة." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExportPage,
});

function ExportPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 pb-12 pt-2 lg:px-10 lg:pt-10">
      <section className="mt-1 lg:mt-0">
        <h1 className="font-display text-[27px] font-extrabold leading-[1.15] text-foreground md:text-4xl">
          تنسيق <span className="text-brand">وتصدير</span>
        </h1>
        <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground md:text-sm">
          صمّم النص النهائي وصدّره إلى الصيغة التي تناسبك.
        </p>
      </section>

      <section className="mt-6">
        <div className="flex min-h-[320px] flex-col items-center justify-center gap-3 rounded-3xl border border-line bg-card p-8 text-center md:p-12">
          <div className="grid size-16 place-items-center rounded-full bg-brand/10">
            <FileDown className="size-8 text-brand" />
          </div>
          <h2 className="font-display text-lg font-extrabold text-foreground">
            قريباً في الاستوديو
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            بعد تفريغ نصك ومراجعته، ستجد هنا خيارات التنسيق والتصدير إلى Word وPDF والنص العادي.
          </p>
        </div>
      </section>
    </div>
  );
}

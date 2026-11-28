import { getTranslations } from "next-intl/server";

import { PainsBlock as Pains, pick } from "@/lib/sanity/types/courseBlocks";
import { cn } from "@/utils/cn";

import SectionHead from "../../homepage/SectionHead";
import { BlockCtx } from "./shared";

/** Pains and fears of the audience → how the course answers each one. */
const PainsBlock = async ({ block, ctx }: { block: Pains; ctx: BlockCtx }) => {
  const t = await getTranslations("courseBuilder");
  const items = (block.items ?? []).filter(i => pick(i.pain, ctx.locale));
  if (!items.length) return null;

  return (
    <section className={cn("py-14 md:py-20 xl:py-[100px]", ctx.bg)}>
      <div className="container max-w-[1280px]">
        <SectionHead
          title={
            pick(block.title, ctx.locale) || t("defaults.coursePainsBlock")
          }
          descr={pick(block.lead, ctx.locale) || undefined}
        />
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-3">
          {items.map((it, idx) => (
            <li
              key={it._key}
              className={cn(
                "flex flex-col overflow-hidden rounded-[24px]",
                ctx.bg === "bg-light" ? "bg-[#f3f6fd]" : "bg-light"
              )}
            >
              <div className="flex gap-3 p-5 pb-4 md:p-6 md:pb-5">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-dark text-[13px] font-semibold tabular-nums text-light">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-dark/60">
                    {t("painLabel")}
                  </p>
                  <p className="mt-1 text-pretty text-[16px] font-semibold leading-[1.4] text-dark md:text-[17px]">
                    {pick(it.pain, ctx.locale)}
                  </p>
                </div>
              </div>
              {pick(it.solution, ctx.locale) && (
                <div className="mt-auto flex gap-3 border-t border-dark/[0.06] bg-dark p-5 text-light md:p-6">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-accent-strong">
                    <svg aria-hidden viewBox="0 0 20 20" className="size-4">
                      <path
                        d="M4 10h11m-4-4 4 4-4 4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-accent">
                      {t("solutionLabel")}
                    </p>
                    <p className="mt-1 text-pretty text-[15px] leading-[1.5] text-white/85">
                      {pick(it.solution, ctx.locale)}
                    </p>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PainsBlock;

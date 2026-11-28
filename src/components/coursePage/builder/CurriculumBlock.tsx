import { getTranslations } from "next-intl/server";

import {
  CurriculumBlock as Curriculum,
  CurriculumSegment,
  pick,
} from "@/lib/sanity/types/courseBlocks";
import { cn } from "@/utils/cn";

import SectionHead from "../../homepage/SectionHead";
import CurriculumTabs, { CSegment, CWeek } from "./CurriculumTabs";
import { BlockCtx } from "./shared";

/** 5. Program as a hierarchy: weeks → modules → sections → segments → nuances. */
const CurriculumBlock = async ({
  block,
  ctx,
}: {
  block: Curriculum;
  ctx: BlockCtx;
}) => {
  const t = await getTranslations("courseBuilder");
  const L = ctx.locale;
  const seg = (s: CurriculumSegment): CSegment => ({
    key: s._key,
    title: pick(s.title, L),
    text: pick(s.text, L),
    note: pick(s.note, L),
    nuances: (s.nuances ?? []).map(n => ({
      key: n._key,
      title: pick(n.title, L),
      text: pick(n.text, L),
      optional: Boolean(n.optional),
    })),
  });

  const weeks: CWeek[] = (block.weeks ?? []).map(w => {
    const modules = (w.modules ?? []).map(m => {
      const sections = (m.sections ?? []).map(s => ({
        key: s._key,
        title: pick(s.title, L),
        segments: (s.segments ?? []).map(seg),
      }));
      const segments = (m.segments ?? []).map(seg);
      const n =
        segments.length + sections.reduce((a, s) => a + s.segments.length, 0);
      return {
        key: m._key,
        title: pick(m.title, L),
        paid: Boolean(m.paid),
        count: t("curriculum.segments", { count: n }),
        sections,
        segments,
        n,
      };
    });
    const total = modules.reduce((a, m) => a + m.n, 0);
    return {
      key: w._key,
      title: pick(w.title, L),
      goal: pick(w.goal, L),
      stats: [
        t("curriculum.modules", { count: modules.length }),
        t("curriculum.segments", { count: total }),
      ],
      modules: modules.map(m => ({ ...m, n: undefined })),
    };
  });
  if (!weeks.length) return null;

  return (
    <section
      id="program"
      className={cn("scroll-mt-24 py-14 md:py-20 xl:py-[100px]", ctx.bg)}
    >
      <div className="container max-w-[1280px]">
        <SectionHead
          title={pick(block.title, L) || t("defaults.courseProgramBlock")}
          descr={pick(block.intro, L) || undefined}
        />
        <CurriculumTabs
          weeks={weeks}
          card={ctx.bg === "bg-light" ? "bg-[#f3f6fd]" : "bg-light"}
          labels={{
            week: t("curriculum.week"),
            module: t("curriculum.module"),
            section: t("curriculum.section"),
            paid: t("curriculum.paid"),
            optional: t("curriculum.optional"),
          }}
        />
      </div>
    </section>
  );
};

export default CurriculumBlock;

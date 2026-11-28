"use client";

import { useState } from "react";

import { cn } from "@/utils/cn";

export type CNuance = {
  key: string;
  title: string;
  text: string;
  optional: boolean;
};
export type CSegment = {
  key: string;
  title: string;
  text: string;
  note: string;
  nuances: CNuance[];
};
export type CSection = { key: string; title: string; segments: CSegment[] };
export type CModule = {
  key: string;
  title: string;
  paid: boolean;
  /** «6 сегментів» */
  count: string;
  sections: CSection[];
  segments: CSegment[];
};
export type CWeek = {
  key: string;
  title: string;
  goal: string;
  /** «3 модулі», «20 сегментів» */
  stats: string[];
  modules: CModule[];
};

export type CurriculumLabels = {
  week: string;
  module: string;
  section: string;
  paid: string;
  optional: string;
};

/** "ТИЖДЕНЬ 1. Анатомія…" → { label: "Тиждень 1", name: "Анатомія…" } */
const splitTitle = (title: string) => {
  const m = title.match(/^(\D{2,30}?\d+(?:\.\d+)*)\.?:?\s+(.+)$/);
  if (!m) return { label: "", name: title };
  const label = m[1].charAt(0).toUpperCase() + m[1].slice(1).toLowerCase();
  return { label, name: m[2] };
};

const Segment = ({
  seg,
  optionalLabel,
}: {
  seg: CSegment;
  optionalLabel: string;
}) => {
  const { label, name } = splitTitle(seg.title);
  return (
    <li className="border-b border-dark/[0.08] py-4 first:pt-0 last:border-0 last:pb-0">
      <div className="flex gap-3 md:gap-4">
        {label && (
          <span className="mt-[3px] shrink-0 text-[13px] font-semibold tabular-nums text-accent-ink">
            {label.replace(/^\D+/, "")}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <p className="text-pretty text-[15px] font-semibold leading-[1.4] text-dark md:text-[16px]">
            {name}
          </p>
          {seg.text && (
            <p className="mt-1.5 text-pretty text-[14px] leading-[1.55] text-dark/65">
              {seg.text}
            </p>
          )}
          {seg.nuances.length > 0 && (
            <ul className="mt-3 flex flex-col gap-2 border-l-2 border-accent/30 pl-4">
              {seg.nuances.map(n => (
                <li key={n.key}>
                  <p className="text-pretty text-[14px] font-medium leading-[1.45] text-dark/85">
                    {n.title}
                    {n.optional && (
                      <span className="ml-2 inline-block rounded-full bg-dark/[0.06] px-2 py-0.5 align-[1px] text-[11px] font-semibold text-dark/60">
                        {optionalLabel}
                      </span>
                    )}
                  </p>
                  {n.text && (
                    <p className="mt-0.5 text-pretty text-[13px] leading-[1.5] text-dark/60">
                      {n.text}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
          {seg.note && (
            <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1.5 text-[13px] font-semibold text-accent-ink">
              <svg aria-hidden viewBox="0 0 20 20" className="size-3.5">
                <path
                  d="M4 10h11m-4-4 4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {seg.note}
            </p>
          )}
        </div>
      </div>
    </li>
  );
};

/** Tabs by week; inside — modules as accordions with sections, segments, nuances. */
const CurriculumTabs = ({
  weeks,
  labels,
  card,
}: {
  weeks: CWeek[];
  labels: CurriculumLabels;
  card: string;
}) => {
  const [active, setActive] = useState(0);
  const week = weeks[active];
  const wt = splitTitle(week.title);

  return (
    <div>
      {weeks.length > 1 && (
        <div
          role="tablist"
          aria-label={labels.week}
          className="-mx-4 mb-5 flex snap-x gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:mb-6 md:px-0"
        >
          {weeks.map((w, i) => {
            const { label, name } = splitTitle(w.title);
            const on = i === active;
            return (
              <button
                key={w.key}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls={`week-panel-${w.key}`}
                id={`week-tab-${w.key}`}
                onClick={() => setActive(i)}
                className={cn(
                  "flex min-w-[220px] max-w-[320px] shrink-0 snap-start flex-col items-start gap-1 rounded-[20px] px-5 py-4 text-left transition-colors duration-300 md:min-w-0 md:flex-1",
                  on
                    ? "bg-dark text-light shadow-[0_24px_50px_-28px_rgba(9,17,41,0.7)]"
                    : cn(card, "text-dark hover:bg-[#e6ecfb]")
                )}
              >
                <span
                  className={cn(
                    "text-[12px] font-semibold uppercase tracking-[0.06em]",
                    on ? "text-accent" : "text-accent-ink"
                  )}
                >
                  {label || `${labels.week} ${i + 1}`}
                </span>
                <span className="line-clamp-2 text-[15px] font-semibold leading-[1.3]">
                  {name}
                </span>
              </button>
            );
          })}
        </div>
      )}

      <div
        role="tabpanel"
        id={`week-panel-${week.key}`}
        aria-labelledby={`week-tab-${week.key}`}
      >
        <div className="relative isolate mb-3 overflow-hidden rounded-[24px] bg-dark p-5 text-light md:mb-4 md:p-7">
          <span
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(60%_90%_at_100%_0%,rgba(81,136,255,0.35),transparent_70%)]"
          />
          <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-accent">
            {wt.label || `${labels.week} ${active + 1}`}
          </p>
          <h3 className="mt-2 max-w-[820px] text-balance text-[20px] font-semibold leading-[1.3] md:text-[24px]">
            {wt.name}
          </h3>
          {week.goal && (
            <p className="mt-3 max-w-[820px] text-pretty text-[15px] leading-[1.6] text-white/70">
              {week.goal}
            </p>
          )}
          <p className="mt-4 flex flex-wrap gap-2 text-[13px] font-medium">
            {week.stats.map(st => (
              <span key={st} className="rounded-full bg-white/10 px-3 py-1.5">
                {st}
              </span>
            ))}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {week.modules.map((m, idx) => {
            const mt = splitTitle(m.title);
            return (
              <details
                key={`${week.key}-${m.key}`}
                open={idx === 0}
                className={cn(
                  "group rounded-[24px] transition-shadow duration-300 open:shadow-[0_24px_50px_-30px_rgba(9,17,41,0.35)]",
                  card
                )}
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 p-5 md:gap-5 md:p-6 [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2 text-[12px] font-medium text-dark/60">
                      {mt.label || labels.module}
                      <span aria-hidden>·</span>
                      {m.count}
                      {m.paid && (
                        <span className="rounded-full bg-accent-strong px-2.5 py-0.5 text-[11px] font-semibold text-light">
                          {labels.paid}
                        </span>
                      )}
                    </span>
                    <span className="mt-1 block text-pretty text-[17px] font-semibold leading-[1.3] text-dark md:text-[19px]">
                      {mt.name}
                    </span>
                  </span>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-dark/5 text-dark transition-transform duration-300 group-open:rotate-45">
                    <svg aria-hidden viewBox="0 0 20 20" className="size-4">
                      <path
                        d="M10 4v12M4 10h12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="flex flex-col gap-3 px-3 pb-3 md:px-4 md:pb-4">
                  {m.sections.map(sec => (
                    <div
                      key={sec.key}
                      className="rounded-[18px] bg-light p-4 md:p-5"
                    >
                      <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-accent-ink">
                        {splitTitle(sec.title).label || labels.section}
                      </p>
                      <p className="mt-1 text-pretty text-[16px] font-semibold leading-[1.35] text-dark md:text-[17px]">
                        {splitTitle(sec.title).name}
                      </p>
                      <ul className="mt-4">
                        {sec.segments.map(seg => (
                          <Segment
                            key={seg.key}
                            seg={seg}
                            optionalLabel={labels.optional}
                          />
                        ))}
                      </ul>
                    </div>
                  ))}
                  {m.segments.length > 0 && (
                    <div className="rounded-[18px] bg-light p-4 md:p-5">
                      <ul>
                        {m.segments.map(seg => (
                          <Segment
                            key={seg.key}
                            seg={seg}
                            optionalLabel={labels.optional}
                          />
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CurriculumTabs;

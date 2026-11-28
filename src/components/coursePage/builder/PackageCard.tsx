"use client";

import { useState } from "react";

import { track } from "@/lib/analytics/track";
import { APPLICATION } from "@/constants/application";
import { cn } from "@/utils/cn";

import LineIcon from "../../homepage/LineIcon";
import ModalTrigger from "../../module/modal/ModalTrigger";

export type PackageView = {
  key: string;
  name: string;
  note: string;
  price: string;
  priceValue: number;
  oldPrice?: string;
  highlighted: boolean;
  features: { text: string; included: boolean }[];
  paymentUrl?: string;
};

type Labels = {
  showAll: string;
  pay: string;
  nextFlow: string;
  included: string;
  hide: string;
  recommended: string;
  uah: string;
  /** «5 з 8 включено» */
  summary: string;
};

/**
 * One participation package (PM, slide 2 p.2): price and «Оплатити» are visible
 * at once, the list of services opens on click — included ones with green
 * ticks, not included ones grey.
 */
const PackageCard = ({
  pkg,
  course,
  salesClosed,
  labels,
}: {
  pkg: PackageView;
  course: string;
  salesClosed: boolean;
  labels: Labels;
}) => {
  const [open, setOpen] = useState(false);
  const hi = pkg.highlighted;

  const buttonBase =
    "flex h-[50px] w-full items-center justify-center rounded-full px-6 text-[15px] font-semibold transition-colors duration-300";

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-[28px] p-6 md:p-7",
        hi
          ? "bg-light text-dark shadow-[0_40px_80px_-40px_rgba(81,136,255,0.7)] ring-2 ring-accent"
          : "bg-white/[0.05] text-light shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
      )}
    >
      {hi && (
        <span className="absolute -top-3.5 left-6 inline-flex items-center gap-1.5 rounded-full bg-accent-strong px-3 py-1.5 text-[12px] font-semibold text-light shadow-[0_10px_24px_-10px_rgba(81,136,255,0.9)]">
          <LineIcon name="target" className="size-3.5" />
          {labels.recommended}
        </span>
      )}
      <h3 className="text-[20px] font-semibold leading-[1.25]">{pkg.name}</h3>
      {pkg.note && (
        <p
          className={cn(
            "mt-2 text-[14px] leading-[1.5] md:line-clamp-2 md:min-h-[42px]",
            hi ? "text-dark/60" : "text-white/60"
          )}
        >
          {pkg.note}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-end gap-x-3 gap-y-1">
        <span className="whitespace-nowrap font-micra text-[34px] leading-none lg:text-[30px] xl:text-[38px]">
          {pkg.price}
        </span>
        <span
          className={cn(
            "pb-1 text-[15px] font-semibold",
            hi ? "text-dark/70" : "text-white/70"
          )}
        >
          {labels.uah}
        </span>
        {pkg.oldPrice && (
          <span
            className={cn(
              "pb-1 text-[15px] line-through",
              hi ? "text-dark/60" : "text-white/60"
            )}
          >
            {pkg.oldPrice}
          </span>
        )}
      </div>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={`pkg-${pkg.key}`}
        onClick={() => setOpen(v => !v)}
        className={cn(
          "mt-6 flex w-full items-center justify-between gap-3 rounded-[16px] px-4 py-3 text-left transition-colors duration-300",
          hi
            ? "bg-[#f3f6fd] hover:bg-[#e6ecfb]"
            : "bg-white/[0.06] hover:bg-white/[0.1]"
        )}
      >
        <span className="min-w-0">
          <span className="block text-[14px] font-semibold">
            {open ? labels.hide : labels.showAll}
          </span>
          <span
            className={cn(
              "mt-0.5 block text-[13px]",
              hi ? "text-dark/60" : "text-white/60"
            )}
          >
            {labels.summary}
          </span>
        </span>
        <svg
          aria-hidden
          viewBox="0 0 20 20"
          className={cn(
            "size-5 shrink-0 transition-transform duration-300",
            open && "rotate-180"
          )}
        >
          <path
            d="m5 8 5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <ul id={`pkg-${pkg.key}`} hidden={!open} className="mt-1 px-1">
        {pkg.features.map(f => (
          <li
            key={f.text}
            className="flex items-start gap-3 pt-3.5 text-[14px] leading-[1.45] md:text-[15px]"
          >
            {f.included ? (
              <span className="mt-[1px] grid size-5 shrink-0 place-items-center rounded-full bg-[#22b573] text-light">
                <LineIcon name="check" className="size-3" />
              </span>
            ) : (
              <span
                className={cn(
                  "mt-[1px] grid size-5 shrink-0 place-items-center rounded-full",
                  hi ? "bg-dark/10 text-dark/60" : "bg-white/10 text-white/60"
                )}
              >
                <LineIcon name="close" className="size-3" />
              </span>
            )}
            <span
              className={cn(
                !f.included && "line-through decoration-1",
                !f.included && (hi ? "text-dark/60" : "text-white/60")
              )}
            >
              {f.text}
            </span>
          </li>
        ))}
      </ul>

      <div className="pt-6">
        {!salesClosed && pkg.paymentUrl ? (
          <a
            href={pkg.paymentUrl}
            rel="nofollow noopener noreferrer"
            onClick={() =>
              track("begin_checkout", {
                course,
                package: pkg.name,
                value: pkg.priceValue,
                currency: "UAH",
              })
            }
            className={cn(
              buttonBase,
              hi
                ? "bg-accent-strong text-light hover:bg-[#2f5fe0]"
                : "bg-light text-dark hover:bg-[#dfe8ff]"
            )}
          >
            {labels.pay}
          </a>
        ) : (
          <ModalTrigger
            variant="course"
            course={`${course} — ${pkg.name}`}
            buttonVariant={hi ? "accent" : "light"}
            label={salesClosed ? labels.nextFlow : labels.pay}
            buttonClassName="h-[50px] py-0 text-[15px] font-semibold"
            messageFrom={APPLICATION.COURSE}
          />
        )}
      </div>
    </article>
  );
};

export default PackageCard;

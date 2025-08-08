"use client";

import Image from "next/image";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { SanityImage } from "@/lib/sanity/types/shared";
import { cn } from "@/utils/cn";

import IconButtonOrLink from "../button/IconButtonOrLink";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { fadeInAnimation } from "@/helpers/animation";

import AnimatedWrapper from "../animated/AnimatedWrapper";

interface IGallerySliderProps {
  gallery: SanityImage[];
  variant?: "light" | "dark";
  imgAlt: string;
  sliderId: string;
  wrapperClassName?: string;
  isDecor?: boolean;
}

const GallerySlider = ({
  gallery,
  variant = "light",
  imgAlt,
  sliderId,
  wrapperClassName,
  isDecor = true,
}: IGallerySliderProps) => {
  const prefix = `slider-${sliderId}`;

  const pagBulletStyles = cn(
    "!w-[20px] !h-[20px] !flex !items-center !justify-center !font-medium",
    variant === "light" && "!bg-light !text-dark",
    variant === "dark" && "!bg-dark !text-light"
  );

  return (
    <div
      className={cn(
        "relative mx-auto max-w-[400px] pb-[74px] md:max-w-[700px] xl:max-w-[1280px]",
        wrapperClassName
      )}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          767.98: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1279.98: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        navigation={{
          prevEl: `.${prefix}-prev`,
          nextEl: `.${prefix}-next`,
        }}
        pagination={{
          el: `.${prefix}-pagination`,
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} ${pagBulletStyles}">${index + 1}</span>`,
        }}
        className={`mySwiper${prefix}`}
      >
        {gallery.map(({ url, description }) => (
          <SwiperSlide key={url} className="relative">
            <div className="relative h-[296px] md:h-[330px] xl:h-[380px]">
              <Image
                src={url}
                alt={description || imgAlt}
                fill
                sizes="(min-width: 768px) 40vw, (min-width: 1280px) 33vw, 100vw"
                className="rounded-xl object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <AnimatedWrapper animation={fadeInAnimation({ y: 50, delay: 0.6 })}>
        <div className="absolute -bottom-[74px] left-1/2 z-10 flex -translate-x-1/2 flex-row gap-6">
          <IconButtonOrLink
            variant={variant}
            buttonClassName={`${prefix}-prev`}
            iconClassName="rotate-180"
            aria-label="Попередній слайд"
          />

          <div
            className={`${prefix}-pagination !relative !bottom-0 !flex !flex-row !items-center`}
          />

          <IconButtonOrLink
            variant={variant}
            buttonClassName={`${prefix}-next`}
            aria-label="Наступний слайд"
          />
        </div>
      </AnimatedWrapper>

      {variant === "light" && isDecor && (
        <div className="absolute -right-[25px] -top-[220px] h-[417px] w-[399px] max-xl:hidden xl:bg-[url('/images/galleryPage/gallery-paginated-decor-desk.webp')]" />
      )}
    </div>
  );
};

export default GallerySlider;

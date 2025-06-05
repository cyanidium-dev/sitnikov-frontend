"use client";

import { usePaginationPage } from "@/hooks/usePaginationPage";

import { PublicationItem } from "@/lib/sanity/types/queryTypes";
import { PUBLICATIONS_PER_PAGE } from "@/constants/pagination";
import { Locale } from "@/types/locale";

import Pagination from "../paginator/Paginator";
import PublicationList from "./PublicationList";

interface IPublicationsPaginatedListProps {
  publicationList: PublicationItem[];
  lang: Locale;
}

const PublicationsPaginatedList = ({
  publicationList,
  lang,
}: IPublicationsPaginatedListProps) => {
  const totalPages = Math.ceil(publicationList.length / PUBLICATIONS_PER_PAGE);
  const { currentPage, changePage } = usePaginationPage(totalPages);

  const startIdx = (currentPage - 1) * PUBLICATIONS_PER_PAGE;
  const paginatedData = publicationList.slice(
    startIdx,
    startIdx + PUBLICATIONS_PER_PAGE
  );

  return (
    <section className="relative overflow-hidden pb-[194px] pt-[329px] md:pb-[96px] md:pt-[82px]">
      <div className="container relative max-w-[1280px]">
        <PublicationList data={paginatedData} lang={lang} className="mb-8" />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={changePage}
        />

        <div className="absolute left-0 top-[276px] -z-[5] h-[352px] w-[282px] max-md:hidden md:bg-[url('/images/publications/publications-decor-top-desk.webp')]" />
        <div className="absolute -bottom-[74px] right-0 -z-[5] h-[433px] w-[357px] max-md:hidden md:bg-[url('/images/publications/publications-decor-mid-desk.webp')]" />
      </div>

      <div className="absolute left-0 top-[80px] -z-[5] h-[312px] w-[281px] max-md:bg-[url('/images/publications/publications-decor-top-mob.webp')] md:hidden" />
      <div className="absolute right-0 top-[35%] -z-[5] h-[312px] w-[233px] max-md:bg-[url('/images/publications/publications-decor-mid-1-mob.webp')] md:hidden" />
      <div className="absolute left-0 top-[67%] -z-[5] h-[312px] w-[175px] max-md:bg-[url('/images/publications/publications-decor-mid-2-mob.webp')] md:hidden" />
      <div className="absolute -bottom-[220px] left-0 -z-[5] h-[411px] w-[360px] max-md:bg-[url('/images/publications/publications-decor-bot-mob.webp')] md:hidden" />

      <div className="absolute -bottom-[200px] left-0 -z-[5] h-[430px] w-[415px] max-md:hidden md:bg-[url('/images/publications/publications-decor-bot-desk.webp')]" />
    </section>
  );
};

export default PublicationsPaginatedList;

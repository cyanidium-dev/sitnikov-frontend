"use client";

import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const visiblePages = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  ).filter(page => {
    return (
      page === 1 ||
      page === totalPages ||
      (page >= currentPage - 1 && page <= currentPage + 1)
    );
  });

  const isEllipsis = (index: number) => {
    const current = visiblePages[index];
    const prev = visiblePages[index - 1];
    return current - prev > 1;
  };

  return (
    <div className="mt-8 flex items-center justify-center space-x-2 text-sm">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-md border bg-white px-3 py-1 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
      >
        Prev
      </button>

      {visiblePages.map((page, idx) => (
        <React.Fragment key={page}>
          {idx > 0 && isEllipsis(idx) && <span className="px-2">…</span>}
          <button
            onClick={() => onPageChange(page)}
            className={`rounded-md border px-3 py-1 ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        </React.Fragment>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-md border bg-white px-3 py-1 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

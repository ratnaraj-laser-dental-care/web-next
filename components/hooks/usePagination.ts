import { useEffect, useMemo, useState } from "react";

const usePagination = <T>(items: T[], itemsPerPage = 6) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [items, itemsPerPage, currentPage]);

  const gotoPage = (page: number) =>
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  const next = () => gotoPage(currentPage + 1);
  const prev = () => gotoPage(currentPage - 1);

  return {
    paginatedData,
    currentPage,
    totalPages,
    gotoPage,
    next,
    prev,
    setCurrentPage,
  };
};

export default usePagination;

import { useState, useMemo, useEffect } from "react";
import type { Character } from "../types";

const PAGE_DELAY = 800;

interface usePaginationValues {
  currentPage: number;
  totalPages: number;
  pageCharacters: Character[];
  handlePageChange: (page: number) => void;
}

export const usePagination = (
  items: Character[],
  itemsPerPage: number,
  setIsLoading: (loading: boolean) => void
): usePaginationValues => {
  // Keeps track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [items.length]);

  // Gets characters for the selected page
  const { pageCharacters, totalPages } = useMemo(() => {
    const totalPages = Math.floor(items.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const pageCharacters = items.slice(start, start + itemsPerPage);

    return { pageCharacters, totalPages };
  }, [items, currentPage, itemsPerPage]);

  // Page change, add small delay for loading state
  const handlePageChange = async (page: number) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, PAGE_DELAY));
    setCurrentPage(page);
    setIsLoading(false);
  };

  return { currentPage, totalPages, pageCharacters, handlePageChange };
};

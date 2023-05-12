import { useEffect } from 'react';

export function useSetToLocalStorage(
  developers,
  locations,
  handovers,
  currentPage,
  searchPriceStart,
  searchPriceEnd,
  setCurrentPage
) {
  useEffect(() => {
    localStorage.setItem('page', JSON.stringify(currentPage));
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [developers, locations, handovers, searchPriceStart, searchPriceEnd]);
}

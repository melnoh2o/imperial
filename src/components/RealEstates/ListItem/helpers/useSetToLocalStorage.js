import { useEffect } from 'react';

export function useSetToLocalStorage(
  developers,
  locations,
  handovers,
  currentPage,
  searchPriceStart,
  searchPriceEnd
) {
  useEffect(() => {
    localStorage.setItem('page', JSON.stringify(currentPage));
  }, [developers, locations, handovers, currentPage, searchPriceStart, searchPriceEnd]);
}

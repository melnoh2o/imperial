import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { LANG } from '../constants/lang';

export const STORAGE_NAME = 'cyprus';

const useStore = create(
  persist(
    (set) => ({
      lang: LANG.RU,
      isOpen: false,
      isFormClosed: false,
      isCallbackFormOpen: false,
      isBurgerMenuOpen: false,
      modifiedFilterTypes: [],
      open: () => set({ isOpen: true }),
      openCallbackModal: () => set({ isCallbackFormOpen: true }),
      toggleBurgerMenu: () => set((state) => ({ isBurgerMenuOpen: !state.isBurgerMenuOpen })),
      close: () => set({ isOpen: false, isFormClosed: true }),
      closeCallbackModal: () => set({ isCallbackFormOpen: false }),
      closeBurgerMenu: () => set({ isBurgerMenuOpen: false }),
      changeLang: (value) => set({ lang: value }),
      setModifiedFilterTypes: (value) => set({ modifiedFilterTypes: value }),
    }),
    {
      name: STORAGE_NAME,
      getStorage: () => sessionStorage,
    }
  )
);

export default useStore;

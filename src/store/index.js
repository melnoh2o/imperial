import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      isOpen: false,
      isFormClosed: false,
      isCallbackFormOpen: false,
      isBurgerMenuOpen: false,
      open: () => set({ isOpen: true }),
      openCallbackModal: () => set({ isCallbackFormOpen: true }),
      toggleBurgerMenu: () => set((state) => ({ isBurgerMenuOpen: !state.isBurgerMenuOpen })),
      close: () => set({ isOpen: false, isFormClosed: true }),
      closeCallbackModal: () => set({ isCallbackFormOpen: false }),
      closeBurgerMenu: () => set({ isBurgerMenuOpen: false }),
    }),
    {
      name: 'cyprus', // unique name
      getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    }
  )
);

export default useStore;

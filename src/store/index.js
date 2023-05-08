import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      isOpen: false,
      isFormClosed: false,
      isCallbackFormOpen: false,
      open: () => set({ isOpen: true }),
      openCallbackModal: () => set({ isCallbackFormOpen: true }),
      close: () => set({ isOpen: false, isFormClosed: true }),
      closeCallbackModal: () => set({ isCallbackFormOpen: false }),
    }),
    {
      name: 'cyprus', // unique name
      getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    }
  )
);

export default useStore;

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: 'user-store',
      storage: localStorage,
    }
  )
);

export default useUserStore;
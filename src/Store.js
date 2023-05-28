import { create } from 'zustand'

 export const useStore = create((set) => ({
  lang: "en",
  setLang: (lang) => set({ lang }),

}))
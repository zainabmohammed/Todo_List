import { create } from "zustand";

export const useStore = create((set) => ({
  lang: "en",
  setLang: (lang) => set({ lang }),
}));

export const useHomeStore = create((set) => ({
  newItem: "",
  items: [],
  setNewItem: (newItem) => set({ newItem }),
  setItems: (items) => set({ items }),
}));

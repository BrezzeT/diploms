import { create } from "zustand";

interface SidebarState {
  isOpen: boolean;
  onClose: () => void;
  toggle: () => void;
}
interface FilterState {
  isOpen: boolean;
  onClose: () => void;
  toggle: () => void;
  selectedBrand: string[];
  toggleBrand: (brand: string) => void;
}
// Sidebar
export const useSidebar = create<SidebarState>((set) => ({
  isOpen: true,
  toggle: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
  onClose: () => set({ isOpen: false }),
}));
// Filter
export const useFilter = create<FilterState>((set) => ({
  isOpen: false,
  toggle: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
  onClose: () => set({ isOpen: false }),
  selectedBrand: [],
  toggleBrand: (brand) =>
    set((state) => ({
      selectedBrand: state.selectedBrand.includes(brand)
        ? state.selectedBrand.filter((b) => b !== brand)
        : [...state.selectedBrand, brand],
    })),
}));

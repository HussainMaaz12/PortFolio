import { create } from 'zustand';

interface GameState {
  isOpen: boolean;
  openGame: () => void;
  closeGame: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  isOpen: false,
  openGame: () => set({ isOpen: true }),
  closeGame: () => set({ isOpen: false }),
}));
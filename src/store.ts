import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: String;
  searchText?: String;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  isOnPageDetailsPage: Boolean;

  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: String) => void;
  setSearchText: (searchText: String) => void;
  setIsOnPageDetailsPage: (onPageDetailsPage: Boolean) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  isOnPageDetailsPage: false,

  setGenreId: (genreId) =>
    set((s) => ({ gameQuery: { ...s.gameQuery, genreId: genreId } })),
  setPlatformId: (platformId) =>
    set((s) => ({ gameQuery: { ...s.gameQuery, platformId: platformId } })),
  setSortOrder: (sortOrder) =>
    set((s) => ({ gameQuery: { ...s.gameQuery, sortOrder: sortOrder } })),
  setSearchText: (searchText) =>
    set(() => ({ gameQuery: { searchText: searchText } })),
  setIsOnPageDetailsPage: (onPageDetailsPage) =>
    set(() => ({ isOnPageDetailsPage: onPageDetailsPage })),
}));

export default useGameQueryStore;

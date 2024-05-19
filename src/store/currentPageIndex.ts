import { create } from 'zustand';

interface CurrentPageIndexStore {
  mainCurrentPageIndex: number;
  mainProjectSwiperViewTime: number;
  projectCurrentPageIndex: number;
  projectTextToggle: boolean;
  setMainCurrentPageIndex: (currentIndex: number) => void;
  increaseMainProjectSwiperViewTime: (currentIndex: number) => void;
  setProjectCurrentPageIndex: (currentIndex: number) => void;
  setProjectTextToggle: (newState: boolean) => void;
}

const useCurrentPageIndexStore = create<CurrentPageIndexStore>()((set) => ({
  mainCurrentPageIndex: 0,
  mainProjectSwiperViewTime: 0,
  projectCurrentPageIndex: 0,
  projectTextToggle: false,
  setMainCurrentPageIndex: (currentIndex) =>
    set(() => ({
      mainCurrentPageIndex: currentIndex,
    })),
  increaseMainProjectSwiperViewTime: (viewTime) =>
    set(({ mainProjectSwiperViewTime }) => ({
      mainProjectSwiperViewTime: mainProjectSwiperViewTime + viewTime,
    })),
  setProjectCurrentPageIndex: (currentIndex) =>
    set(() => ({
      projectCurrentPageIndex: currentIndex,
    })),
  setProjectTextToggle: (newState) =>
    set(() => ({
      projectTextToggle: newState,
    })),
}));

export default useCurrentPageIndexStore;

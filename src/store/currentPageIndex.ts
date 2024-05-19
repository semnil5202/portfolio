import { create } from 'zustand';

interface CurrentPageIndexStore {
  mainCurrentPageIndex: number;
  mainProjectSwiperViewTime: number;
  projectCurrentPageIndex: number;
  setMainCurrentPageIndex: (currentIndex: number) => void;
  increaseMainProjectSwiperViewTime: (currentIndex: number) => void;
  setProjectCurrentPageIndex: (currentIndex: number) => void;
}

const useCurrentPageIndexStore = create<CurrentPageIndexStore>()((set) => ({
  mainCurrentPageIndex: 0,
  mainProjectSwiperViewTime: 0,
  projectCurrentPageIndex: 0,
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
}));

export default useCurrentPageIndexStore;

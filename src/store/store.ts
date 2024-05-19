import { create } from 'zustand';

interface Store {
  mainCurrentPageIndex: number;
  mainProjectSwiperViewTime: number;
  projectCurrentPageIndex: number;
  projectImageSwiperViewTime: number;
  projectContentSwiperViewTime: number;
  projectTextToggle: boolean;
  setMainCurrentPageIndex: (currentIndex: number) => void;
  increaseMainProjectSwiperViewTime: (currentIndex: number) => void;
  setProjectCurrentPageIndex: (currentIndex: number) => void;
  increaseProjectImageSwiperViewTime: (currentIndex: number) => void;
  increaseProjectContentSwiperViewTime: (currentIndex: number) => void;
  resetProjectImageSwiperViewTime: () => void;
  resetProjectContentSwiperViewTime: () => void;
  setProjectTextToggle: (newState: boolean) => void;
}

const useStore = create<Store>()((set) => ({
  mainCurrentPageIndex: 0,
  mainProjectSwiperViewTime: 0,
  projectCurrentPageIndex: 0,
  projectImageSwiperViewTime: 0,
  projectContentSwiperViewTime: 0,
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
  increaseProjectImageSwiperViewTime: (viewTime) =>
    set(({ projectImageSwiperViewTime }) => ({
      projectImageSwiperViewTime: projectImageSwiperViewTime + viewTime,
    })),
  increaseProjectContentSwiperViewTime: (viewTime) =>
    set(({ projectContentSwiperViewTime }) => ({
      projectContentSwiperViewTime: projectContentSwiperViewTime + viewTime,
    })),
  resetProjectImageSwiperViewTime: () =>
    set(() => ({
      projectImageSwiperViewTime: 0,
    })),
  resetProjectContentSwiperViewTime: () =>
    set(() => ({
      projectContentSwiperViewTime: 0,
    })),
  setProjectTextToggle: (newState) =>
    set(() => ({
      projectTextToggle: newState,
    })),
}));

export default useStore;

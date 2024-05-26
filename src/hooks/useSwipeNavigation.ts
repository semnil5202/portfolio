import { Dispatch, SetStateAction, TouchEventHandler, useState } from 'react';

interface Props {
  setState: Dispatch<SetStateAction<boolean>>;
}

const useSwipeNavigation = ({ setState }: Props) => {
  const [prevTouch, setPrevTouch] = useState<React.Touch | null>(null);

  const onTouchNavigation: TouchEventHandler = (event) => {
    const touch = event.touches[0]!;

    setPrevTouch(touch);
    if (!prevTouch) return;

    const diff = touch.pageX - prevTouch.pageX;
    const otherDiff = touch.pageY - prevTouch.pageY;

    if (diff > 3 && Math.abs(otherDiff) < 3) {
      setState(false);
      return;
    }

    setState(true);
  };

  const onTouchEndNavigation: TouchEventHandler = () => {
    setPrevTouch(null);
  };

  return {
    onTouchNavigation,
    onTouchEndNavigation,
  };
};

export default useSwipeNavigation;

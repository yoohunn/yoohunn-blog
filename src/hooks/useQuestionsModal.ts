import { useCallback, useEffect, useState } from 'react';

const SHOWING_HEIGHT = 200;

export function useQuestionsModal() {
  const [isShowing, setIsShowing] = useState(false);

  const onScroll = useCallback(() => {
    const scrollHeight = window.scrollY;
    const shouldShow = scrollHeight > SHOWING_HEIGHT;

    if (shouldShow !== isShowing) {
      setIsShowing(shouldShow);
    }
  }, [isShowing]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isShowing, onScroll]);

  return { isShowing };
}

import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export interface IsResponsive {
  isDeskTop?: boolean;
  isTablet?: boolean;
  isMobile?: boolean;
}

export const useResponsive = (): IsResponsive => {
  const isDeskTop = useMediaQuery({
    query: '(min-width: 1024px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isMobile = true;
  const [customIsDeskTop, setCustomIsDeskTop] = useState(false);
  const [cumstomIsTablet, setCustomIsTablet] = useState(false);
  const [cumstomIsMobile, setCustomIsMobile] = useState(false);
  useEffect(() => {
    setCustomIsDeskTop(isDeskTop);
    setCustomIsTablet(!isDeskTop && isTablet);
    setCustomIsMobile(!isDeskTop && !isTablet && isMobile);
  }, [isDeskTop, isTablet, isMobile]);
  return { isDeskTop: customIsDeskTop, isTablet: cumstomIsTablet, isMobile: cumstomIsMobile };
};

export default useResponsive;

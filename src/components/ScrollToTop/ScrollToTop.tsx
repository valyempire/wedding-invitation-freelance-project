import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Displays the component
 */
export const ScrollToTop: React.FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  /**
   * Gets the current path name
   */
  const { pathname } = useLocation();

  /**
   * Resets the scroll position to top upon route change
   */
  useEffect(() => {
    /**
     * Scrolls back to top
     */
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

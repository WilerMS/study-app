import { createContext, useCallback, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const IsBackContext = createContext(false);

export const useIsBack = () => useContext(IsBackContext);

export function useGoBack(fallback: string) {
  const navigate = useNavigate();
  const location = useLocation();
  return useCallback(() => {
    if (location.key !== "default") {
      navigate(-1);
    } else {
      navigate(fallback, { replace: true });
    }
  }, [navigate, location.key, fallback]);
}

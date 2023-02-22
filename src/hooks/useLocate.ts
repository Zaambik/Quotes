import { useLocation } from "react-router";


export const useLocate = () => {
   const locate = useLocation();
   return locate;
}
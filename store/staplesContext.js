import { createContext } from "react";
export const StaplesContext = createContext();
export const StaplesContextProvider = ({ children }) => {
  return <StaplesContext.Provider>{children}</StaplesContext.Provider>;
};

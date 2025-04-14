import { createContext, useState, useContext } from "react";
import { DayContext } from "./day-context";
export const StapleContext = createContext({
  ids: [],
  addStaple: (staple) => {},
});
export const StaplesContextProvider = ({ children }) => {
  const [staples, setStaples] = useState([]);
  function addStaple(staple) {
    setStaples((prev) => {
      const exists = prev.some((item) => item.name === staple.name);
      return exists ? prev : [...prev, staple];
    });
  }
  
  const value = {
    ids: staples,
    addStaple: addStaple,
  };
  return (
    <StapleContext.Provider value={value}>{children}</StapleContext.Provider>
  );
};

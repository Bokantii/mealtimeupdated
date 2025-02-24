import { createContext } from "react";

export const MealContext = createContext({
  ids: [],
  addToPlan: (meal) => {},
  removeFromPlan: (meal) => {},
});

 const MealContextProvider = ({ children }) => {
  return <MealContext.Provider>{children}</MealContext.Provider>;
};

export default MealContextProvider;
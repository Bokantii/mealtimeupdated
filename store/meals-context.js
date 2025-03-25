import { createContext } from "react";
import { useState } from "react";
export const MealContext = createContext({
  ids: [],
  addToPlan: (meal) => {},
  removeFromPlan: (meal) => {},
});

const MealContextProvider = ({ children }) => {
  const [addedMeals, setAddedMeals] = useState([]);
  function addToPlan(meal) {
    setAddedMeals([...addedMeals, meal]);
  }
  function removeFromPlan(mealId) {
    setAddedMeals(addedMeals.filter((prevMeals) => prevMeals.id !== mealId));
  }
  const mealCtxValue = {
    ids: addedMeals,
    addToPlan: addToPlan,
    removeFromPlan: removeFromPlan,
  };
  return (
    <MealContext.Provider value={mealCtxValue}>{children}</MealContext.Provider>
  );
};

export default MealContextProvider;

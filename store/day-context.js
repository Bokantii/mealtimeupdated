import { createContext, useState } from "react";

export const DayContext = createContext({
  mealsByDay: {},
  addMeal: (day, mealType, meal) => {},
  removeMeal: (day, mealType, mealId) => {},
});

export const DayContextProvider = ({ children }) => {
  const [mealsByDay, setMealsByDay] = useState({
    Monday: { Breakfast: [], Lunch: [], Dinner: [], Desserts: [], Snacks: [] },
    Tuesday: { Breakfast: [], Lunch: [], Dinner: [], Desserts: [], Snacks: [] },
    Wednesday: {
      Breakfast: [],
      Lunch: [],
      Dinner: [],
      Desserts: [],
      Snacks: [],
    },
    Thursday: {
      Breakfast: [],
      Lunch: [],
      Dinner: [],
      Desserts: [],
      Snacks: [],
    },
    Friday: { Breakfast: [], Lunch: [], Dinner: [], Desserts: [], Snacks: [] },
    Saturday: {
      Breakfast: [],
      Lunch: [],
      Dinner: [],
      Desserts: [],
      Snacks: [],
    },
    Sunday: { Breakfast: [], Lunch: [], Dinner: [], Desserts: [], Snacks: [] },
  });

  function addMeal(day, mealType, meal) {
    setMealsByDay((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [mealType]: [meal],
      },
    }));
  }
  //meal.id was in the array before the filter function and is removed afterwards

  function removeMeal(day, mealType, mealId) {
    setMealsByDay((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [mealType]: prev[day][mealType].filter((meal) => meal.id !== mealId),
      },
    }));
  }

  const value = {
    mealsByDay,
    addMeal,
    removeMeal,
  };
  return <DayContext.Provider value={value}>{children}</DayContext.Provider>;
};

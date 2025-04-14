import { createContext, useState } from "react";

export const DayContext = createContext({
  mealsByDay: {},
  addMeal: (day, mealType, meal) => {},
  removeMeal: (day, mealType, mealId) => {},
  getAllIngredients: () => [],
});

export const DayContextProvider = ({ children }) => {
  const [mealsByDay, setMealsByDay] = useState({
    Monday: { Breakfast: [], Lunch: [], Dinner: [], Desserts: [], Snacks: [] },
    Tuesday: { Breakfast: [], Lunch: [], Dinner: [], Desserts: [], Snacks: [] },
    Wednesday: { Breakfast: [], Lunch: [], Dinner: [], Desserts: [], Snacks: [] },
    Thursday: { Breakfast: [], Lunch: [], Dinner: [], Desserts: [], Snacks: [] },
    Friday: { Breakfast: [], Lunch: [], Dinner: [], Desserts: [], Snacks: [] },
    Saturday: { Breakfast: [], Lunch: [], Dinner: [], Desserts: [], Snacks: [] },
    Sunday: { Breakfast: [], Lunch: [], Dinner: [], Desserts: [], Snacks: [] },
  });

  // ✅ Replaces the current meal for that mealType on the given day
  function addMeal(day, mealType, meal) {
    setMealsByDay((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [mealType]: [meal], // Only one meal per mealType per day
      },
    }));
  }

  // ✅ Removes a meal by ID from the specified day and mealType
  function removeMeal(day, mealType, mealId) {
    setMealsByDay((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [mealType]: prev[day][mealType].filter((meal) => meal.id !== mealId),
      },
    }));
  }

  // ✅ Flattens and returns all ingredients from all days
  function getAllIngredients() {
    const ingredients = [];

    Object.values(mealsByDay).forEach((dayMeals) => {
      Object.values(dayMeals).forEach((mealList) => {
        mealList.forEach((meal) => {
          meal.ingredientsId?.forEach((ingredient, index) => {
            const quantity = meal.ingredientQtyId?.[index] || "1 unit";
            ingredients.push({ ingredient, quantity });
          });
        });
      });
    });

    return ingredients;
  }

  const value = {
    mealsByDay,
    addMeal,
    removeMeal,
    getAllIngredients,
  };

  return (
    <DayContext.Provider value={value}>
      {children}
    </DayContext.Provider>
  );
};

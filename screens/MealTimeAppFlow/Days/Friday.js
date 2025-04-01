import React, { useContext } from "react";
import Day from "./Days"; // ✅ Use correct blueprint import
import { DayContext } from "../../../store/day-context";

const Friday = () => {
  const { mealsByDay } = useContext(DayContext);

  const fridayMeals = mealsByDay["Friday"];
  const mealContainers = Object.entries(fridayMeals).map(([mealType, meals]) => ({
    id: mealType,
    title: mealType,
    data: meals,
  }));

  return <Day day="Friday" mealContainers={mealContainers} />;
};

export default Friday;

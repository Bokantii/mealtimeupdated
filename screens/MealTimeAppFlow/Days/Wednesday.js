import React, { useContext } from "react";
import Day from "./Days"; // ✅ Using your preferred import path
import { DayContext } from "../../../store/day-context";

const Wednesday = () => {
  const { mealsByDay } = useContext(DayContext);

  const wednesdayMeals = mealsByDay["Wednesday"];
  const mealContainers = Object.entries(wednesdayMeals).map(([mealType, meals]) => ({
    id: mealType,
    title: mealType,
    data: meals,
  }));

  return <Day day="Wednesday" mealContainers={mealContainers} />;
};

export default Wednesday;

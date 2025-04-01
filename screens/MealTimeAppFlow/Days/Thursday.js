import React, { useContext } from "react";
import Day from "./Days"; // ✅ Correct import path
import { DayContext } from "../../../store/day-context";

const Thursday = () => {
  const { mealsByDay } = useContext(DayContext);

  const thursdayMeals = mealsByDay["Thursday"];
  const mealContainers = Object.entries(thursdayMeals).map(([mealType, meals]) => ({
    id: mealType,
    title: mealType,
    data: meals,
  }));

  return <Day day="Thursday" mealContainers={mealContainers} />;
};

export default Thursday;

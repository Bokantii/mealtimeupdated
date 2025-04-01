import React, { useContext } from "react";
import Day from "./Days"; // ✅ Shared blueprint component
import { DayContext } from "../../../store/day-context";

const Sunday = () => {
  const { mealsByDay } = useContext(DayContext);

  const sundayMeals = mealsByDay["Sunday"];
  const mealContainers = Object.entries(sundayMeals).map(([mealType, meals]) => ({
    id: mealType,
    title: mealType,
    data: meals,
  }));

  return <Day day="Sunday" mealContainers={mealContainers} />;
};

export default Sunday;

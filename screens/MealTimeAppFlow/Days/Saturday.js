import React, { useContext } from "react";
import Day from "./Days"; // ✅ Correct blueprint import
import { DayContext } from "../../../store/day-context";

const Saturday = () => {
  const { mealsByDay } = useContext(DayContext);

  const saturdayMeals = mealsByDay["Saturday"];
  const mealContainers = Object.entries(saturdayMeals).map(([mealType, meals]) => ({
    id: mealType,
    title: mealType,
    data: meals,
  }));

  return <Day day="Saturday" mealContainers={mealContainers} />;
};

export default Saturday;

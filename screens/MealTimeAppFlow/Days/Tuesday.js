import React, { useContext } from "react";
import Day from "./Days";
import { DayContext } from "../../../store/day-context";

const Tuesday = () => {
  const { mealsByDay } = useContext(DayContext);

  const tuesdayMeals = mealsByDay["Tuesday"];
  const mealContainers = Object.entries(tuesdayMeals).map(([mealType, meals]) => ({
    id: mealType,
    title: mealType,
    data: meals,
  }));

  return <Day day="Tuesday" mealContainers={mealContainers} />;
};

export default Tuesday;

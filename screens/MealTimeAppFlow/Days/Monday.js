import React, { useContext } from "react";
import Day from "./Days";
import { DayContext } from "../../../store/day-context";

const Monday = () => {
  const { mealsByDay } = useContext(DayContext);

  // Transform Monday meals into mealContainers format
  const mondayMeals = mealsByDay["Monday"];
  const mealContainers = Object.entries(mondayMeals).map(([mealType, meals]) => ({
    id: mealType,
    title: mealType,
    data: meals,
  }));

  return <Day day="Monday" mealContainers={mealContainers} />;
};

export default Monday;

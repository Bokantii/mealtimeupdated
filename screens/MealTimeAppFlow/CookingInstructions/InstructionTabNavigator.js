import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import InstructionStepScreen from "./InstructionStepScreen"; // Importing Step Screen
import { Colors } from "../../../util/Colors";
const Tab = createMaterialTopTabNavigator();

const InstructionTabNavigator = ({ instructions, ingredientsPerStep }) => {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { display: "none" },tabBarPressColor:Colors.bodybgColor }}>
      {instructions.map((instruction, index) => (
        <Tab.Screen
          key={index}
          name={`Step ${index + 1}`}
          component={InstructionStepScreen}
          initialParams={{
            stepNumber: index + 1,
            instruction,
            totalSteps: instructions.length,
            ingredients: ingredientsPerStep[index] || [],
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default InstructionTabNavigator;

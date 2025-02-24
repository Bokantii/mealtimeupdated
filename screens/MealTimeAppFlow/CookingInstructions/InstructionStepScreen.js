import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";
import { Colors } from "../../../util/Colors";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const InstructionStepScreen = ({ route }) => {
  const { stepNumber, instruction, totalSteps, ingredients } = route.params;
  const navigation = useNavigation();
 
  // Ensure ingredients is always an array
  const safeIngredients = Array.isArray(ingredients) ? ingredients : [];
  
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: Colors.bodybgColor }}>
     
      {/* Step Progress Bar */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 20,
          padding:10
        }}
      >
        {Array.from({ length: totalSteps }).map((_, index) => (
          <View
            key={index}
            style={{
              height: 10,
              width:`${100/totalSteps}%`,
              marginHorizontal: 2,
              backgroundColor: index < stepNumber ? "#33995b" : "#ddd",
              borderRadius: 5,
            }}
          />
        ))}
      </View>

      {/* Step Number & Instruction */}
      <Text style={{ fontSize: 60, fontWeight: "bold" }}>
        {String(stepNumber).padStart(2, "0")}
      </Text>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        {instruction}
      </Text>

      {/* Ingredients for this step */}
      {safeIngredients.length > 0 ? (
        <View style={{ marginTop: 10 }}>
          {safeIngredients.map((item, index) => (
            <Text key={index} style={{ fontSize: 16 }}>
              • {item}
            </Text>
          ))}
        </View>
      ) : (
        <Text style={{ fontSize: 16, fontStyle: "italic", marginTop: 10 }}>
          No ingredients listed for this step.
        </Text>
      )}

      {/* Navigation Buttons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "90%",
        }}
      >
        {stepNumber > 1 && (
          <Pressable
            style={{
              padding: 12,
              borderWidth: 1,
              borderRadius: 8,
              borderColor:"#ddd",
              width: "17%",
              alignItems: "center",
              backgroundColor:"white"
            }}
            onPress={() => navigation.navigate(`Step ${stepNumber - 1}`)}
          >
             <MaterialIcons name="format-list-bulleted" size={24} color="black" />
          </Pressable>
        )}

        {stepNumber < totalSteps && (
          <Pressable
            style={{
              padding: 12,
              backgroundColor: Colors.mealTimePrimary,
              borderRadius: 8,
              width: "80%",
              alignItems: "center",
              color: "black",
            }}
            onPress={() => navigation.navigate(`Step ${stepNumber + 1}`)}
          >
            <Text style={{ fontSize: 16, color: "black" }}>Next</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default InstructionStepScreen;

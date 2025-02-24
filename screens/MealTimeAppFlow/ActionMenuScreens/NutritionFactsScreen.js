
import { View, Text, StyleSheet } from "react-native";
import React from "react";
const NutritionFactsScreen = ({ route }) => {
  const nutritionFacts = route?.params?.nutritionFacts;
  console.log("🔍 NutritionFactsScreen Route Params:", route.params);

  if (!nutritionFacts) {
    console.error("⚠️ nutritionFacts is undefined in NutritionFactsScreen!");
    return <Text style={styles.heading}>No Nutrition Data Available</Text>;
  }

  return (
    <View>
      <Text style={styles.heading}>Carbs: {nutritionFacts.carbs}g</Text>
      <Text style={styles.heading}>Protein: {nutritionFacts.protein}g</Text>
      <Text style={styles.heading}>Fat: {nutritionFacts.fat}g</Text>
      <Text style={styles.heading}>
        Calories: {nutritionFacts.calories} kcal
      </Text>
    </View>
  );
};

export default NutritionFactsScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    padding: 10,
  },
});


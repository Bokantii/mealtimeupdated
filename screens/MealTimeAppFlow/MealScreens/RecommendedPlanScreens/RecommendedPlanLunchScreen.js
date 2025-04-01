import React, { useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import { LUNCH_OPTIONS } from "../../../../models/mealCategories/recommendedPlan/lunchClass";
import Card from "../../../../components/ui/Card";
import { Colors } from "../../../../util/Colors";
import { MealContext } from "../../../../store/meals-context";
import { DayContext } from "../../../../store/day-context";

const RecommendedPlanLunchScreen = ({ searchQuery }) => {
  const mealCtx = useContext(MealContext);
  const dayCtx = useContext(DayContext);

  const addToMealPlan = (meal) => {
    Alert.alert(
      "Add Lunch to Day",
      "Choose the day to add this lunch meal:",
      [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ].map((day) => ({
        text: day,
        onPress: () => {
          dayCtx.addMeal(day, "Lunch", meal);
          mealCtx.addToPlan(meal);
          Alert.alert("✅ Added!", `Lunch added to ${day}`);
          console.log(`🥪 ${meal.title} added to ${day} - Lunch`);
        },
      })),
      { cancelable: true }
    );
  };

  const renderCard = ({ item }) => {
    return (
      <Card
        id={item.id}
        title={item.title}
        imgUrl={item.imgUrl}
        duration={item.duration}
        numOfServings={item.numOfServings}
        ingredientsId={item.ingredientsId}
        ingredientQtyId={item.ingredientQtyId}
        cookware={item.cookware}
        instructions={item.instructions}
        isPro={item.isPro}
        mealCategory={item.mealCategory}
        description={item.description}
        tags
        onPress={() => addToMealPlan(item)}
        addRemoveIcon="plus"
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatListVertical
        data={LUNCH_OPTIONS}
        keyExtractor={(item) => item.id}
        horizontal={false}
        renderItem={renderCard}
        title={"Recommended Plan"}
        numColumns={2}
        searchQuery={searchQuery}
      />
    </View>
  );
};

export default RecommendedPlanLunchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex: 1,
  },
});

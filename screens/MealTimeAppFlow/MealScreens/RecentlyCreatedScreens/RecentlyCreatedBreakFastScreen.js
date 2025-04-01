import React, { useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import { RECENTLY_CREATED_BREAKFAST } from "../../../../models/mealCategories/recentlyCreated/breakfastClass";
import Card from "../../../../components/ui/Card";
import { Colors } from "../../../../util/Colors";
import { MealContext } from "../../../../store/meals-context";
import { DayContext } from "../../../../store/day-context";

const RecentlyCreatedBreakFastScreen = ({ searchQuery }) => {
  const mealCtx = useContext(MealContext);
  const dayCtx = useContext(DayContext);

  const addToMealPlan = (meal) => {
    Alert.alert(
      "Add Meal to Day",
      "Choose the day you want to add this meal to:",
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
          dayCtx.addMeal(day, "Breakfast", meal);
          mealCtx.addToPlan(meal);
          Alert.alert("✅ Added!", `Meal added to ${day} - Breakfast`);
          console.log(`✅ Added to ${day}: ${meal?.title}`);
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
        data={RECENTLY_CREATED_BREAKFAST}
        keyExtractor={(item) => item.id}
        horizontal={false}
        renderItem={renderCard}
        title={"Recently Created"}
        numColumns={2}
        searchQuery={searchQuery}
      />
    </View>
  );
};

export default RecentlyCreatedBreakFastScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex: 1,
  },
});

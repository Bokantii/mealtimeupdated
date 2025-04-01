import React, { useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { MOST_POPULAR_LUNCH } from "../../../../models/mealCategories/mostPopular/lunchClass";
import Card from "../../../../components/ui/Card";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import { Colors } from "../../../../util/Colors";
import { MealContext } from "../../../../store/meals-context";
import { DayContext } from "../../../../store/day-context"; // 👈 Make sure this is imported

const MostPopularLunchScreen = ({ searchQuery }) => {
  const mealCtx = useContext(MealContext);
  const dayCtx = useContext(DayContext); // 👈 Access DayContext here

  const addToMealPlan = (meal) => {
    Alert.alert(
      "Add Meal to Day",
      "Choose the day you want to add this lunch to:",
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
          dayCtx.addMeal(day, "Lunch", meal); // 👈 Add to DayContext
          mealCtx.addToPlan(meal);             // 👈 Add to general plan (optional)
          Alert.alert("✅ Added!", `Meal added to ${day} - Lunch`);
          console.log(`✅ Added to ${day}: ${meal.title}`);
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
        onPress={() => addToMealPlan(item)} // 👈 Wrap item correctly
        addRemoveIcon="plus"
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatListVertical
        data={MOST_POPULAR_LUNCH}
        keyExtractor={(item) => item.id}
        horizontal={false}
        renderItem={renderCard}
        title={"Most Popular"}
        numColumns={2}
        searchQuery={searchQuery}
      />
    </View>
  );
};

export default MostPopularLunchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex: 1,
  },
});

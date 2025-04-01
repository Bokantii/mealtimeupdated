import React, { useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Card from "../../../../components/ui/Card";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import { MOST_POPULAR_DINNER } from "../../../../models/mealCategories/mostPopular/dinnerClass";
import { Colors } from "../../../../util/Colors";
import { MealContext } from "../../../../store/meals-context";
import { DayContext } from "../../../../store/day-context"; // ✅ import DayContext

const MostPopularDinnerScreen = ({ searchQuery }) => {
  const mealCtx = useContext(MealContext);
  const dayCtx = useContext(DayContext); // ✅ use DayContext

  const addToMealPlan = (meal) => {
    Alert.alert(
      "Add Meal to Day",
      "Choose the day you want to add this dinner to:",
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
          dayCtx.addMeal(day, "Dinner", meal); // ✅ Add to Dinner slot
          mealCtx.addToPlan(meal);             // ✅ Optional general plan
          Alert.alert("✅ Added!", `Meal added to ${day} - Dinner`);
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
        data={MOST_POPULAR_DINNER}
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

export default MostPopularDinnerScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex: 1,
  },
});

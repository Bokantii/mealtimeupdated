import React, { useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Card from "../../../../components/ui/Card";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import { MOST_POPULAR_DESSERTS } from "../../../../models/mealCategories/mostPopular/dessertClass";
import { Colors } from "../../../../util/Colors";
import { MealContext } from "../../../../store/meals-context";
import { DayContext } from "../../../../store/day-context";

const MostPopularDessertScreen = ({ searchQuery }) => {
  const mealCtx = useContext(MealContext);
  const dayCtx = useContext(DayContext);

  const addToMealPlan = (meal) => {
    Alert.alert(
      "Add Meal to Day",
      "Choose the day you want to add this dessert to:",
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
          dayCtx.addMeal(day, "Desserts", meal);
          mealCtx.addToPlan(meal);
          Alert.alert("✅ Added!", `Meal added to ${day} - Desserts`);
          console.log(`✅ Added to ${day}: ${meal?.title}`);
        },
      })),
      { cancelable: true }
    );
  };

  const renderCard = ({ item }) => (
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

  return (
    <View style={styles.container}>
      <FlatListVertical
        data={MOST_POPULAR_DESSERTS}
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

export default MostPopularDessertScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex: 1,
  },
});

import React, { useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import { LUNCH_OPTIONS } from "../../../../models/mealCategories/recommendedPlan/lunchClass";
import Card from "../../../../components/ui/Card";
import { Colors } from "../../../../util/Colors";
import { MealContext } from "../../../../store/meals-context";

const RecommendedPlanLunchScreen = ({ searchQuery }) => {
  const mealCtx = useContext(MealContext);

  const addToMealPlan = (meal) => {
    Alert.alert("Lunch added! 🥪", "Meal has been added to your plan.");
    mealCtx.addToPlan(meal);
    console.log("Added to meal plan! MEAL IDS:", mealCtx.ids);
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

import React, { useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { MOST_POPULAR_SNACKS } from "../../../../models/mealCategories/mostPopular/snackClass";
import Card from "../../../../components/ui/Card";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import { Colors } from "../../../../util/Colors";
import { MealContext } from "../../../../store/meals-context";

const MostPopularSnackScreen = ({ searchQuery }) => {
  const mealCtx = useContext(MealContext);

  const addToMealPlan = (meal) => {
    Alert.alert(
      `Great Choice! \u{1F44D}`,
      "This meal has been added to your meal plan!"
    );
    mealCtx.addToPlan(meal);
    console.log(`Added to meal plan! MEAL IDS:`, mealCtx.ids);
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
        data={MOST_POPULAR_SNACKS}
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

export default MostPopularSnackScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex: 1,
  },
});

import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import Card from "../../../../components/ui/Card";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import { MOST_POPULAR_DINNER } from "../../../../models/mealCategories/mostPopular/dinnerClass";
import { Colors } from "../../../../util/Colors";
import { MealContext } from "../../../../store/meals-context";
import { DayContext } from "../../../../store/day-context";
import CustomDayPickerModal from "../../../../components/ui/CustomDayPickerModal";

const MostPopularDinnerScreen = ({ searchQuery }) => {
  const mealCtx = useContext(MealContext);
  const dayCtx = useContext(DayContext);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleDaySelect = (day) => {
    dayCtx.addMeal(day, "Dinner", selectedMeal);
    mealCtx.addToPlan(selectedMeal);
    setIsModalVisible(false);
    setSelectedMeal(null);
  };

  const addToMealPlan = (meal) => {
    setSelectedMeal(meal);
    setIsModalVisible(true);
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
        data={MOST_POPULAR_DINNER}
        keyExtractor={(item) => item.id}
        horizontal={false}
        renderItem={renderCard}
        title={"Most Popular"}
        numColumns={2}
        searchQuery={searchQuery}
      />

      <CustomDayPickerModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSelectDay={handleDaySelect}
        meal={selectedMeal}
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

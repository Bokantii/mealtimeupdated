import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import Card from "../../../../components/ui/Card";
import { Colors } from "../../../../util/Colors";
import { RECENTLY_CREATED_DINNER } from "../../../../models/mealCategories/recentlyCreated/dinnerClass";
import { MealContext } from "../../../../store/meals-context";
import { DayContext } from "../../../../store/day-context";
import CustomDayPickerModal from "../../../../components/ui/CustomDayPickerModal";

const RecentlyCreatedDinnerScreen = ({ searchQuery }) => {
  const mealCtx = useContext(MealContext);
  const dayCtx = useContext(DayContext);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const addToMealPlan = (meal) => {
    setSelectedMeal(meal);
    setIsModalVisible(true);
  };

  const handleDaySelect = (day) => {
    dayCtx.addMeal(day, "Dinner", selectedMeal);
    mealCtx.addToPlan(selectedMeal);
    setIsModalVisible(false);
    setSelectedMeal(null);
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
        data={RECENTLY_CREATED_DINNER}
        keyExtractor={(item) => item.id}
        horizontal={false}
        renderItem={renderCard}
        title={"Recently Created"}
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

export default RecentlyCreatedDinnerScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex: 1,
  },
});

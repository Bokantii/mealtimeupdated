import React from "react";
import { View, StyleSheet } from "react-native";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import Card from "../../../../components/ui/Card";
import { Colors } from "../../../../util/Colors";
import { RECENTLY_CREATED_DINNER } from "../../../../models/mealCategories/recentlyCreated/dinnerClass";
const RecentlyCreatedDinnerScreen = ({searchQuery}) => {
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
      />
    );
  };
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
    </View>
  );
};

export default RecentlyCreatedDinnerScreen;
const styles=StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex:1
  },
})
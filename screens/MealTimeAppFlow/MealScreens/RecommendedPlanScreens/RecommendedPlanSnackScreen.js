import React from "react";
import { View,StyleSheet } from "react-native";
import FlatListVertical from "../../../../components/ui/FlatListVertical";
import { RECOMMENDED_SNACKS } from "../../../../models/mealCategories/recommendedPlan/snackClass";
import Card from "../../../../components/ui/Card";
import { Colors } from "../../../../util/Colors";
const RecommendedPlanSnackScreen = ({searchQuery}) => {
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
        data={RECOMMENDED_SNACKS}
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

export default RecommendedPlanSnackScreen;

const styles=StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex:1
  },
})
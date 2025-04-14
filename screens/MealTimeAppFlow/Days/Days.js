import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useContext } from "react";
import { Colors } from "../../../util/Colors";
import Card from "../../../components/ui/Card";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { DayContext } from "../../../store/day-context";
const Day = ({ day, mealContainers }) => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.openDrawer();
    console.log("Navigating to drawer...");
  };
  const dayCtx = useContext(DayContext);
  
  const renderMealSection = ({ item }) => (
    <View style={styles.mealContainer}>
      <Text style={styles.mealTime}>{item.title}:</Text>
      <FlatList
        data={item.data}
        keyExtractor={(meal) => meal.id}
        renderItem={({ item: meal }) => (
          <Card
            id={meal.id}
            title={meal.title}
            imgUrl={meal.imgUrl}
            duration={meal.duration}
            numOfServings={meal.numOfServings}
            ingredientsId={meal.ingredientsId}
            ingredientQtyId={meal.ingredientQtyId}
            cookware={meal.cookware}
            instructions={meal.instructions}
            isPro={meal.isPro}
            mealCategory={meal.mealCategory}
            description={meal.description}
            tags={meal.tags}
            addRemoveIcon="minus"
            onPress={()=>dayCtx.removeMeal(day,item.title,meal.id)}
          />
        )}
      />
    </View>
  );

  return (
    <View style={styles.safeContainer}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.bgDark} />
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer}>
          <Entypo name="menu" size={34} color={Colors.mealTimePrimary} />
        </TouchableOpacity>

        <Text style={styles.dayTitle}>{day.toUpperCase()}</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={mealContainers}
          keyExtractor={(item) => item.id}
          renderItem={renderMealSection}
        />
      </View>
    </View>
  );
};

export default Day;

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: Colors.bodybgColor,
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: Colors.bgDark,
  },
  dayTitle: {
    fontWeight: "bold",
    color: Colors.bodybgColor,
  },
  mealContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginVertical: 10,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: Colors.mealTimePrimary,
    backgroundColor: Colors.bgAlt,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  mealTime: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a1a",
    marginRight: 12,
  },
});

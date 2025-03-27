import { StyleSheet, Text, View, FlatList } from "react-native";
import { Colors } from "../../util/Colors";
import Button from "../../components/ui/Button";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../../store/authContext";
import * as Notifications from "expo-notifications";
import { MealContext } from "../../store/meals-context";
import { ALL_MEALS } from "../../data/ALLMEALS";
import Card from "../../components/ui/Card";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Monday from "./Days/Monday";
import Tuesday from "./Days/Tuesday";
import Wednesday from "./Days/Wednesday";
import Thursday from "./Days/Thursday";
import Friday from "./Days/Friday";
import Saturday from "./Days/Saturday";
import Sunday from "./Days/Sunday";
import Meals from "./Meals";
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});
const Drawer = createDrawerNavigator();
export function DrawerNavigator() {
  return (
    <Drawer.Navigator
    
      initialRouteName="Monday"
      screenOptions={{
        headerShown:false,
        drawerActiveTintColor: Colors.mealTimePrimary,
        drawerStyle: { backgroundColor: Colors.bodybgColor },

      }}
    >
      <Drawer.Screen name="Monday" component={Monday} />
      <Drawer.Screen name="Tuesday" component={Tuesday} />
      <Drawer.Screen name="Wednesday" component={Wednesday} />
      <Drawer.Screen name="Thursday" component={Thursday} />
      <Drawer.Screen name="Friday" component={Friday} />
      <Drawer.Screen name="Saturday" component={Saturday} />
      <Drawer.Screen name="Sunday" component={Sunday} />
      <Drawer.Screen name="< Back to Meals" component={Meals}/>
    </Drawer.Navigator>
  );
}
const MealPlan = () => {
  const navigation = useNavigation();
  const { updateMealPlanStatus } = useContext(AuthContext);
  const mealCtx = useContext(MealContext);

  const navigateToMeals = async () => {
    await updateMealPlanStatus(true);
    navigation.navigate("Meals");
  };

  const mealsInPlan = mealCtx.ids
    .map((id) => ALL_MEALS.find((meal) => meal.id === id))
    .filter(Boolean); // remove nulls if any ID isn't found

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
      tags={item.tags}
      addRemoveIcon="minus"
    />
  );

  const hasMeals = (
    // <FlatList
    //   data={mealsInPlan}
    //   keyExtractor={(item) => item.id}
    //   renderItem={renderCard}
    //   numColumns={2}
    //   columnWrapperStyle={styles.columnWrapper}
    //   contentContainerStyle={styles.flatListContent}
    // />
    <DrawerNavigator />
  );

  const hasNoMeals = (
    <View style={styles.content}>
      <Text style={styles.title}>Your Personalized Meal Plan</Text>
      <Text style={styles.description}>
        Plan your meals for the entire week in minutes. Build your first meal
        plan to get started!
      </Text>
      <Button isAlternateBtnStyle onPress={navigateToMeals}>
        Build Your First Meal Plan
      </Button>
    </View>
  );

  return (
    <View style={styles.container}>
      {mealCtx.ids.length > 0 ? hasMeals : hasNoMeals}
    </View>
  );
};

export default MealPlan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 27,
    width: 250,
  },
  description: {
    textAlign: "center",
    marginTop: -7,
    marginBottom: 20,
    width: "70%",
    color: "#666666",
  },
  flatListContent: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "./screens/AuthScreens/SignUp";
import Login from "./screens/AuthScreens/Login";
import { Colors } from "./util/Colors";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./store/authContext";
import MealPlan from "./screens/MealTimeAppFlow/MealPlan";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";
import AuthContextProvider from "./store/authContext";
import IconButton from "./components/ui/IconButton";
import Favourite from "./screens/MealTimeAppFlow/Favourite";
import Groceries from "./screens/MealTimeAppFlow/Groceries";
import Meals from "./screens/MealTimeAppFlow/Meals";
import Settings from "./screens/MealTimeAppFlow/Settings";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MealDetail from "./screens/MealTimeAppFlow/MealDetail";
import MostPopularTabs from "./screens/MealTimeAppFlow/Tabs/MostPopularTabs";
import RecentlyCreatedMealsTabs from "./screens/MealTimeAppFlow/Tabs/RecentlyCreatedMealsTabs";
import RecommendedPlanTabs from "./screens/MealTimeAppFlow/Tabs/RecommendedPlanTabs";
import FavouriteContextProvider from "./store/favourites-context";
import * as Notifications from "expo-notifications";
import CookingInstructionScreen from "./screens/MealTimeAppFlow/CookingInstructions/CookingInstructionScreen";
import NotesScreen from "./screens/MealTimeAppFlow/ActionMenuScreens/NotesScreen";
import NutritionFactsScreen from "./screens/MealTimeAppFlow/ActionMenuScreens/NutritionFactsScreen";
import FeedbackScreen from "./screens/MealTimeAppFlow/ActionMenuScreens/FeedbackScreen";
import AddNewCollection from "./screens/MealTimeAppFlow/ActionMenuScreens/AddNewCollection";
import SelectCollections from "./screens/MealTimeAppFlow/ActionMenuScreens/SelectCollections";
import SelectAllergies from "./screens/OnBoarding/SelectAllergies";
import SelectDislikes from "./screens/OnBoarding/SelectDislikes";
import SelectDiet from "./screens/OnBoarding/SelectDiet";
import SelectServings from "./screens/OnBoarding/SelectServings";
import GrocerySearch from "./screens/MealTimeAppFlow/GrocerySearch";
import { StaplesContextProvider } from "./store/staplesContext";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "#fff",
        contentStyle: { backgroundColor: Colors.mealTimePrimary },
      }}
      style={{ backgroundColor: Colors.bodybgColor }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="SelectDiet" component={SelectDiet} />
      <Stack.Screen name="SelectAllergies" component={SelectAllergies} />
      <Stack.Screen name="SelectDislikes" component={SelectDislikes} />
      <Stack.Screen name="SelectServings" component={SelectServings} />
      <Stack.Screen name="SelectCollections" component={SelectCollections} />
    </Stack.Navigator>
  );
}
function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.mealTimePrimary },
        headerTintColor: "black",
        contentStyle: { backgroundColor: Colors.primary100 },
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MealPlan"
        component={MealPlan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Meals" component={Meals} />
      <Stack.Screen name="MealDetail" component={MealDetail} />
      <Stack.Screen
        name="CookingInstructionScreen"
        component={CookingInstructionScreen}
      />
      <Stack.Screen
        name="MostPopularTabs"
        component={MostPopularTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecentlyCreatedMealsTabs"
        component={RecentlyCreatedMealsTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecommendedPlanTabs"
        component={RecommendedPlanTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotesScreen"
        component={NotesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NutritionFactsScreen"
        component={NutritionFactsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FeedbackScreen"
        component={FeedbackScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddNewCollection"
        component={AddNewCollection}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectCollections"
        component={SelectCollections}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SelectAllergiesScreen"
        component={SelectAllergies}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectDislikesScreen"
        component={SelectDislikes}
        options={{ header: false }}
      />
      <Stack.Screen
        name="SelectDietScreen"
        component={SelectDiet}
        options={{ header: false }}
      />
      <Stack.Screen
        name="SelectServingsScreen"
        component={SelectServings}
        options={{ header: false }}
      />
      <Stack.Screen name="GrocerySearch" component={GrocerySearch} />
      <Stack.Screen name="Groceries" component={Groceries} />
    </Stack.Navigator>
  );
}
function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer style={styles.container}>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}
const TabNavigator = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.mealTimePrimary },
        headerTintColor: "black",
        contentStyle: { backgroundColor: Colors.mealTimePrimary },
        headerRight: ({ tintColor }) => (
          <IconButton
            icon={"log-out-outline"}
            color={"black"}
            size={24}
            onPress={authCtx.logout}
          />
        ),
      }}
    >
      <Tab.Screen
        name="MealPlan"
        component={MealPlan}
        options={{
          title: "Meal Plan",
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="food-bank"
                size={24}
                color={focused ? Colors.mealTimePrimary : Colors.unfocused}
              />
            );
          },
          tabBarActiveTintColor: Colors.mealTimePrimary,
          tabBarInactiveTintColor: Colors.unfocused,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Groceries"
        component={Groceries}
        options={{
          title: "Groceries",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="storefront-outline"
                size={24}
                color={focused ? Colors.mealTimePrimary : Colors.unfocused}
              />
            );
          },
          tabBarActiveTintColor: Colors.mealTimePrimary,
          tabBarInactiveTintColor: Colors.unfocused,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourite}
        options={{
          title: "Favourites",
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="favorite"
                size={24}
                color={focused ? Colors.mealTimePrimary : Colors.unfocused}
              />
            );
          },
          tabBarActiveTintColor: Colors.mealTimePrimary,
          tabBarInactiveTintColor: Colors.unfocused,
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="settings-outline"
                size={24}
                color={focused ? Colors.mealTimePrimary : Colors.unfocused}
              />
            );
          },
          tabBarActiveTintColor: Colors.mealTimePrimary,
          tabBarInactiveTintColor: Colors.unfocused,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        if (typeof authCtx.authenticate === "function") {
          authCtx.authenticate(storedToken);
        } else {
          console.error(
            "authCtx.authenticate is not a function:",
            authCtx.authenticate
          );
        }
      }
      setIsTryingLogin(false);
    }
    fetchToken();
  }, []);
  if (isTryingLogin) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary500} />
      </View>
    );
  }
  return <Navigation />;
}
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "My first local notification",
        body: "This is the body of the notification",
        data: { userName: "Daniel" },
      },
      trigger: { seconds: 5 },
    });
  }
  return (
    <View style={styles.container}>
      <AuthContextProvider>
        <StaplesContextProvider>
          <FavouriteContextProvider>
            <Root />
          </FavouriteContextProvider>
        </StaplesContextProvider>
      </AuthContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
  },
  goBack: {
    marginTop: 30,
    padding: 30,
    alignSelf: "flex-start", // Aligns the arrow to the start
  },

  recentlyCreatedMealsTabscontainer: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
  },
  recommendedMealPlanTabscontainer: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
  },
});

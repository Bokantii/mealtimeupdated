import React, { useState } from "react";
import { Pressable, View, StyleSheet, TextInput } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "../../../util/Colors";
import RecentlyCreatedBreakFastScreen from "../MealScreens/RecentlyCreatedScreens/RecentlyCreatedBreakFastScreen";
import RecentlyCreatedDessertScreen from "../MealScreens/RecentlyCreatedScreens/RecentlyCreatedDessertScreen";
import RecentlyCreatedDinnerScreen from "../MealScreens/RecentlyCreatedScreens/RecentlyCreatedDinnerScreen";
import RecentlyCreatedLunchScreen from "../MealScreens/RecentlyCreatedScreens/RecentlyCreatedLunchScreen";
import RecentlyCreatedSnackScreen from "../MealScreens/RecentlyCreatedScreens/RecentlyCreatedSnackScreen";
const Tab = createBottomTabNavigator();
function RecentlyCreatedMealsTabs({ route, navigation }) {
  function navBack() {
    navigation.goBack();
    console.log("navigating back...");
  }
  const initialRouteName = route?.params?.initialRouteName || "Breakfast";
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  function navBack() {
    navigation.goBack();
  }

  function toggleSearch() {
    setShowSearch(!showSearch);
  }

  return (
    <View style={styles.recentlyCreatedMealsTabscontainer}>
      <View style={styles.headerIcons}>
        <Pressable onPress={navBack}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            style={styles.goBack}
          />
        </Pressable>
        <Pressable onPress={toggleSearch}>
          <AntDesign
            name="search1"
            size={24}
            color="black"
            style={styles.search}
          />
        </Pressable>
      </View>
      {showSearch && (
        <TextInput
          value={searchQuery}
          placeholder="Search Meals..."
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
      )}
      <Tab.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Breakfast"
          children={() => <RecentlyCreatedBreakFastScreen searchQuery={searchQuery}/>}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialIcons
                  name="free-breakfast"
                  size={24}
                  color={focused ? Colors.mealTimePrimary : Colors.unfocused}
                />
              );
            },
            tabBarActiveTintColor: Colors.mealTimePrimary,
            tabBarInactiveTintColor: Colors.unfocused,
          }}
        />
        <Tab.Screen
          name="Lunch"
          children={() => <RecentlyCreatedLunchScreen searchQuery={searchQuery}/>}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialIcons
                  name="lunch-dining"
                  size={24}
                  color={focused ? Colors.mealTimePrimary : Colors.unfocused}
                />
              );
            },
            tabBarActiveTintColor: Colors.mealTimePrimary,
            tabBarInactiveTintColor: Colors.unfocused,
          }}
        />
        <Tab.Screen
          name="Dinner "
          children={() => <RecentlyCreatedDinnerScreen searchQuery={searchQuery}/>}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialIcons
                  name="dinner-dining"
                  size={24}
                  color={focused ? Colors.mealTimePrimary : Colors.unfocused}
                />
              );
            },
            tabBarActiveTintColor: Colors.mealTimePrimary,
            tabBarInactiveTintColor: Colors.unfocused,
          }}
        />
        <Tab.Screen
          name="Snacks"
          children={() => <RecentlyCreatedSnackScreen searchQuery={searchQuery}/>}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialCommunityIcons
                  name="food-hot-dog"
                  size={24}
                  color={focused ? Colors.mealTimePrimary : Colors.unfocused}
                />
              );
            },
            tabBarActiveTintColor: Colors.mealTimePrimary,
            tabBarInactiveTintColor: Colors.unfocused,
          }}
        />
        <Tab.Screen
          name="Desserts"
          children={() => <RecentlyCreatedDessertScreen searchQuery={searchQuery}/>}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialIcons
                  name="cake"
                  size={24}
                  color={focused ? Colors.mealTimePrimary : Colors.unfocused}
                />
              );
            },
            tabBarActiveTintColor: Colors.mealTimePrimary,
            tabBarInactiveTintColor: Colors.unfocused,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default RecentlyCreatedMealsTabs;

const styles = StyleSheet.create({
  recentlyCreatedMealsTabscontainer: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop:30,
  },
  search: {
    padding: 10,
  },
  goBack: {
    padding: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 18,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    backgroundColor: "white",
  },
});

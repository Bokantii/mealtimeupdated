import React, { useState } from "react";
import { Pressable, View, StyleSheet, TextInput } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "../../../util/Colors";
import RecommendedPlanBreakFastScreen from "../MealScreens/RecommendedPlanScreens/RecommendedPlanBreakFastScreen";
import RecommendedPlanLunchScreen from "../MealScreens/RecommendedPlanScreens/RecommendedPlanLunchScreen";
import RecommendedPlanDinnerScreen from "../MealScreens/RecommendedPlanScreens/RecommendedPlanDinnerScreen";
import RecommendedPlanSnackScreen from "../MealScreens/RecommendedPlanScreens/RecommendedPlanSnackScreen";
import RecommendedPlanDessertScreen from "../MealScreens/RecommendedPlanScreens/RecommendedPlanDessertScreen";

const Tab = createBottomTabNavigator();

function RecommendedPlanTabs({ route, navigation }) {
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
    <View style={styles.container}>
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
      <Tab.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Breakfast"
          children={() => (
            <RecommendedPlanBreakFastScreen searchQuery={searchQuery} />
          )}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="free-breakfast"
                size={24}
                color={focused ? Colors.mealTimePrimary : Colors.unfocused}
              />
            ),
            tabBarActiveTintColor: Colors.mealTimePrimary,
            tabBarInactiveTintColor: Colors.unfocused,
          }}
        />
        <Tab.Screen
          name="Lunch"
          children={() => (
            <RecommendedPlanLunchScreen searchQuery={searchQuery} />
          )}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="lunch-dining"
                size={24}
                color={focused ? Colors.mealTimePrimary : Colors.unfocused}
              />
            ),
            tabBarActiveTintColor: Colors.mealTimePrimary,
            tabBarInactiveTintColor: Colors.unfocused,
          }}
        />
        <Tab.Screen
          name="Dinner"
          children={() => (
            <RecommendedPlanDinnerScreen searchQuery={searchQuery} />
          )}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="dinner-dining"
                size={24}
                color={focused ? Colors.mealTimePrimary : Colors.unfocused}
              />
            ),
            tabBarActiveTintColor: Colors.mealTimePrimary,
            tabBarInactiveTintColor: Colors.unfocused,
          }}
        />
        <Tab.Screen
          name="Snacks"
          children={() => (
            <RecommendedPlanSnackScreen searchQuery={searchQuery} />
          )}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="food-hot-dog"
                size={24}
                color={focused ? Colors.mealTimePrimary : Colors.unfocused}
              />
            ),
            tabBarActiveTintColor: Colors.mealTimePrimary,
            tabBarInactiveTintColor: Colors.unfocused,
          }}
        />
        <Tab.Screen
          name="Desserts"
          children={() => (
            <RecommendedPlanDessertScreen searchQuery={searchQuery} />
          )}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="cake"
                size={24}
                color={focused ? Colors.mealTimePrimary : Colors.unfocused}
              />
            ),
            tabBarActiveTintColor: Colors.mealTimePrimary,
            tabBarInactiveTintColor: Colors.unfocused,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default RecommendedPlanTabs;

const styles = StyleSheet.create({
  container: {
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

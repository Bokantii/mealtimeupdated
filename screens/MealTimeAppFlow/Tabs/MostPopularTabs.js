import React, { useState } from "react";
import { Pressable, View, StyleSheet, TextInput } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MostPopularBreakFastScreen from "../MealScreens/MostPopularScreens/MostPopularBreakFastScreen";
import MostPopularLunchScreen from "../MealScreens/MostPopularScreens/MostPopularLunchScreen";
import MostPopularDinnerScreen from "../MealScreens/MostPopularScreens/MostPopularDinnerScreen";
import MostPopularDessertScreen from "../MealScreens/MostPopularScreens/MostPopularDessertScreen";
import MostPopularSnackScreen from "../MealScreens/MostPopularScreens/MostPopularSnackScreen";
import { Colors } from "../../../util/Colors";

const Tab = createBottomTabNavigator();

function MostPopularTabs({ route, navigation }) {
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
    <View style={styles.mostPopularTabscontainer}>
      <View style={styles.headerIcons}>
        <Pressable onPress={navBack}>
          <AntDesign name="arrowleft" size={24} color="black" style={styles.goBack} />
        </Pressable>
        <Pressable onPress={toggleSearch}>
          <AntDesign name="search1" size={24} color="black" style={styles.search} />
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
          children={() => <MostPopularBreakFastScreen searchQuery={searchQuery} />}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons name="free-breakfast" size={24} color={focused ? Colors.mealTimePrimary : Colors.unfocused} />
            ),
            tabBarActiveTintColor: Colors.mealTimePrimary,
          }
          
        }
        
        />
        <Tab.Screen
          name="Lunch"
          children={() => <MostPopularLunchScreen searchQuery={searchQuery} />}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons name="lunch-dining" size={24} color={focused ? Colors.mealTimePrimary : Colors.unfocused} />
            ),
            tabBarActiveTintColor: Colors.mealTimePrimary,
          }}
        />
        <Tab.Screen
          name="Dinner"
          children={() => <MostPopularDinnerScreen searchQuery={searchQuery} />}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons name="dinner-dining" size={24} color={focused ? Colors.mealTimePrimary : Colors.unfocused} />
            ),
            tabBarActiveTintColor: Colors.mealTimePrimary,
          }}
        />
        <Tab.Screen
          name="Snacks"
          children={() => <MostPopularSnackScreen searchQuery={searchQuery} />}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons name="food-hot-dog" size={24} color={focused ? Colors.mealTimePrimary : Colors.unfocused} />
            ),
            tabBarActiveTintColor: Colors.mealTimePrimary,
          }}
        />
        <Tab.Screen
          name="Desserts"
          children={() => <MostPopularDessertScreen searchQuery={searchQuery} />}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons name="cake" size={24} color={focused ? Colors.mealTimePrimary : Colors.unfocused} />
            ),
            tabBarActiveTintColor: Colors.mealTimePrimary,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default MostPopularTabs;

const styles = StyleSheet.create({
  mostPopularTabscontainer: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVerticalTop: 10,
    marginTop:30,
  },
  search: {
    paddingTop: 10,
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

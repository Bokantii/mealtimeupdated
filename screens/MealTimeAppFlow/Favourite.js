import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { FavouriteContext } from "../../store/favourites-context";
import { ALL_MEALS } from "../../data/ALLMEALS";
import { Colors } from "../../util/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavoritesScreen = ({ navigation }) => {
  const [bookmarkItem, setBookmarkItem] = useState([]); // Initialize as an empty array
  const [isLoading, setIsLoading] = useState(true); // Ensure loading is true initially
  const favoriteCtx = useContext(FavouriteContext);

  // Filter favorite meals from ALL_MEALS
  const favoriteMeals = ALL_MEALS.filter((meal) =>
    favoriteCtx.ids.includes(meal.id)
  );

  // Navigate to MealDetail screen
  const selectMealHandler = (meal) => {
    navigation.navigate("MealDetail", {
      id: meal.id,
      title: meal.title,
      imgUrl: meal.imgUrl,
      duration: meal.duration,
      numOfServings: meal.numOfServings,
      ingredientsId: meal.ingredientsId,
      ingredientQtyId: meal.ingredientQtyId,
      cookware: meal.cookware,
      instructions: meal.instructions,
      isPro: meal.isPro,
      mealCategory: meal.mealCategory,
      description: meal.description,
      tags: meal.tags,
    });
  };

  // Render each favorite meal
  const renderMealItem = ({ item }) => {
    return (
      <Pressable
        style={styles.mealItem}
        onPress={() => selectMealHandler(item)}
      >
        <Image source={{ uri: item.imgUrl }} style={styles.mealImage} />
        <View style={styles.mealDetails}>
          <Text style={styles.mealTitle}>{item.title}</Text>
          <Text style={styles.mealInfo}>
            {item.duration} minutes | {item.numOfServings} servings
          </Text>
        </View>
      </Pressable>
    );
  };

  // Fetch Bookmark
  const fetchBookmark = async () => {
    try {
      setIsLoading(true);
      const token = await AsyncStorage.getItem("bookmark");
      const res = JSON.parse(token);
      if (res && res.length > 0) {
        const items = res
          .map((id) => ALL_MEALS.find((meal) => meal.id === id))
          .filter(Boolean); // Filter valid matches
        console.log("Bookmark items loaded:", items);
        setBookmarkItem(items);
      } else {
        console.log("No bookmarks found");
        setBookmarkItem([]); // No bookmarks
      }
    } catch (error) {
      console.error("Error fetching bookmarks:", error);
      setBookmarkItem([]);
    } finally {
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    fetchBookmark();
  }, []);

  return (
    <View style={styles.screenContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.primary500} />
      ) : bookmarkItem.length > 0 ? (
        <FlatList
          data={bookmarkItem}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            No favorite meals yet. Start adding some!
          </Text>
        </View>
      )}
    </View>
  );
  
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  mealItem: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  mealImage: {
    width: 100,
    height: 100,
  },
  mealDetails: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  mealTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
  },
  mealInfo: {
    fontSize: 14,
    color: "#666",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
  },
});

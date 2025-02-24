import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  Animated,
  Alert,
  Modal,
} from "react-native";
import { MealContext } from "../../store/meals-context";
import { StyleSheet } from "react-native";
import { Colors } from "../../util/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FavouriteContext } from "../../store/favourites-context";
import { useContext } from "react";
import Meal from "../../models/mealsModel";
import { useState, useEffect } from "react";
import { ALL_MEALS } from "../../data/ALLMEALS";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import SelectCollections from "./ActionMenuScreens/SelectCollections";
import * as Sharing from "expo-sharing";
import { Share } from "react-native";
// import * as Print from "expo-print";
// Sharing.isAvailableAsync();
const renderCookWare = ({ item }) => {
  return <Text style={styles.cookwareItem}>{item}</Text>;
};
//Cookware Screen
const CookwareScreen = ({ route }) => {
  const { cookware } = route.params;

  return (
    <View style={styles.tabContent}>
      {cookware && cookware.length > 0 ? (
        <FlatList
          data={cookware}
          keyExtractor={(item, index) => `${item}-${index}`} // Ensure uniqueness
          renderItem={renderCookWare}
        />
      ) : (
        <Text>No Cookware Listed</Text>
      )}
    </View>
  );
};
//Ingredients Screen
const IngredientScreen = ({ route }) => {
  const { ingredientsId, ingredientQtyId } = route.params;

  const renderIngredient = ({ item, index }) => (
    <View style={styles.ingredientRow}>
      <Text style={styles.ingredientName}>{item}</Text>
      <Text style={styles.ingredientQty}>{ingredientQtyId[index]}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: Colors.bodybgColor }}>
      {ingredientsId && ingredientsId.length > 0 ? (
        <FlatList
          data={ingredientsId}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({ item, index }) => renderIngredient({ item, index })}
        />
      ) : (
        <Text style={styles.emptyText}>No Ingredient Listed</Text>
      )}
    </View>
  );
};

const InstructionScreen = ({ route }) => {
  const { instructions, ingredientsId, ingredientQtyId, numberOfInstructions } =
    route.params;

  const renderInstructionStep = ({ item, index }) => (
    <View style={styles.cookingSteps}>
      <View style={styles.cookingStepIndex}>
        <Text style={styles.cookingStepIndexText}>{index + 1}</Text>
      </View>
      <View style={styles.instructionStep}>
        <Text style={styles.instructionStepText}>{item}</Text>

        {ingredientsId && ingredientQtyId && ingredientsId.length > 0 ? (
          <FlatList
            data={ingredientsId}
            keyExtractor={(item, i) => `${item}-${i}`}
            renderItem={({ item, index }) => (
              <View style={styles.ingredientRow}>
                <Text style={styles.ingredientName}>{item}</Text>
                <Text style={styles.ingredientQty}>
                  {ingredientQtyId[index]}
                </Text>
              </View>
            )}
          />
        ) : (
          <Text style={styles.emptyText}>No ingredients listed</Text>
        )}
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: Colors.bodybgColor }}>
      <FlatList
        data={instructions}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={renderInstructionStep}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No instruction listed</Text>
        }
      />
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();
//Meal Detail Component
const MealDetail = ({ route, navigation }) => {
  const [bookmark, setBookMark] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const favoriteCtx = useContext(FavouriteContext);
  useEffect(() => {
    if (mealId) {
      renderBookMark(mealId);
    }
  }, [mealId]);

  const mealId = route?.params?.id;
  if (!mealId) {
    console.error("Meal ID is undefined. Check Navigation Paramseters");
    return null;
  }
  const ALLMEALS = ALL_MEALS.find((meal) => meal.id === mealId);
  const isFavorite = favoriteCtx.ids.includes(mealId);
  function changeFavoriteStatusHandler() {
    console.log("Meal ID:" + mealId);
    console.log("Is Favorite Before Change:", isFavorite);
    console.log("New Favorite Added!");
    if (isFavorite) {
      favoriteCtx.removeFavorite(mealId);
    } else {
      favoriteCtx.addFavorite(mealId);
    }

    console.log("Favorite IDs After Change:", favoriteCtx.ids);
  }
  function openMenuModal() {
    setModalVisible(true);
    console.log("Modal Menu Opened");
  }
  async function addBookmark(ItemId) {
    try {
      const token = await AsyncStorage.getItem("bookmark");
      let bookmarks = token ? JSON.parse(token) : [];
      if (!bookmarks.includes(ItemId)) {
        bookmarks.push(ItemId);
        await AsyncStorage.setItem("bookmark", JSON.stringify(bookmarks));
        Alert.alert(
          `Great Choice! \u{1F44D}`,
          "This meal has been added to your favorites!"
        );
        setBookMark(true);
      } else {
        console.log("Meal is already bookmarked:", ItemId);
      }
    } catch (error) {
      console.error("Error adding bookmark:", error);
    }
  }

  async function removeBookmark(ItemId) {
    try {
      const token = await AsyncStorage.getItem("bookmark");
      let bookmarks = token ? JSON.parse(token) : [];
      bookmarks = bookmarks.filter((id) => id !== ItemId); // Remove the item
      await AsyncStorage.setItem("bookmark", JSON.stringify(bookmarks));
      Alert.alert(
        `Meal Removed`,
        "This meal has been removed from your favorites."
      );
      setBookMark(false); // Update state
    } catch (error) {
      console.error("Error removing bookmark:", error);
    }
  }

  async function renderBookMark(ItemId) {
    try {
      const token = await AsyncStorage.getItem("bookmark");
      const bookmarks = token ? JSON.parse(token) : [];
      const isBookmarked = bookmarks.includes(ItemId);
      console.log(`Meal ${ItemId} is bookmarked:`, isBookmarked);
      setBookMark(isBookmarked);
    } catch (error) {
      console.error("Error rendering bookmark:", error);
    }
  }

  const {
    id,
    title,
    imgUrl,
    duration,
    numOfServings,
    ingredientsId,
    ingredientQtyId,
    cookware,
    instructions,
    isPro,
    mealCategory,
    description,
    tags,
    nutritionFacts,
    groceryListArr,
  } = route.params;
  const numberOfInstructions = instructions ? instructions.length : 0;
  function goBack() {
    navigation.goBack();
  }
 
  function startCooking() {
    console.log("Started Cooking");
    navigation.navigate("CookingInstructionScreen", {
      instructions,
      numberOfInstructions,
      ingredientsPerStep: ingredientsId, // Pass ingredient list per step
    });
    console.log(
      "numberOfInstructions before navigating:",
      numberOfInstructions
    );
    setModalVisible(false);
  }
  //Navigate to Nutrition Facts
  function navToNutritionFacts() {
    navigation.navigate("SelectServingsScreen");
    setModalVisible(false);
  }
  //Navigate to Feedback Screen
  function navToFeedBack() {
    navigation.navigate("FeedbackScreen");
    setModalVisible(false);
  }
  //Navigate to Notes
  function navToNotes() {
    navigation.navigate("NotesScreen");
    setModalVisible(false);
  }
  //Navigate to Collections
  function navToCollections() {
    navigation.navigate("SelectCollections");
    setModalVisible(false);
  }
  const shareMeal = async () => {
    try {
      const message = `🍽️ Check out this meal!
      
      Name: ${title}
      Pic:${imgUrl}
      Duration: ${duration} minutes
      Servings: ${numOfServings}
      
      Try it out!`;
  
      await Share.share({ message });
    } catch (error) {
      Alert.alert("Error", "Something went wrong while sharing.");
    }
  };
  console.log("number of servings:" + numOfServings);
  console.log("cookware:" + cookware);
  console.log("Route Params:" + route.params);
  return (
    <View style={styles.container}>
      <View style={styles.cookedStatus}>
        <View style={styles.cookedStatusContent}>
          <Pressable style={[styles.cookedStatusBtn, styles.cooked]}>
            <FontAwesome6 name="circle-check" size={22} color="#999999" />
            <Text style={styles.cooked_text}>Cooked?</Text>
          </Pressable>
          <Pressable
            style={[styles.cookedStatusBtn, styles.startCooking]}
            onPress={startCooking}
          >
            <Text style={styles.startCooking_text}>Start Cooking</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.largeImg}>
        <Image source={{ uri: imgUrl }} style={styles.img} />
        <View style={styles.largeImgContent}>
          <Pressable style={styles.icon} onPress={goBack}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
          <Pressable style={styles.icon} onPress={openMenuModal}>
            <Entypo
              name="dots-three-horizontal"
              size={24}
              color="black"
              style={styles.menu}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.content_header}>
          <Text style={styles.title}>{title}</Text>
          <Pressable
            onPress={() => {
              bookmark ? removeBookmark(mealId) : addBookmark(mealId);
            }}
          >
            <MaterialIcons
              name={bookmark ? "favorite" : "favorite-outline"}
              size={24}
              color={bookmark ? Colors.mealTimePrimary : "black"}
            />
          </Pressable>
        </View>
        <View style={styles.meal_info}>
          <Text style={styles.duration}>{duration} minutes-</Text>
          <Text style={styles.numOfServings}>-{numOfServings} servings</Text>
        </View>
        {/* Tab Navigating */}
        <View style={styles.tabNavigator}>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: Colors.mealTimePrimary,
              tabBarInactiveTintColor: "#666",
              tabBarIndicatorStyle: { backgroundColor: Colors.mealTimePrimary },
              tabBarLabelStyle: { fontWeight: "bold" },
            }}
          >
            <Tab.Screen
              name="Cookware"
              component={CookwareScreen}
              initialParams={{ cookware }}
            />
            <Tab.Screen
              name="Ingredients"
              component={IngredientScreen}
              initialParams={{ ingredientQtyId, ingredientsId }}
            />
            <Tab.Screen
              name="Instructions"
              component={InstructionScreen}
              initialParams={{ instructions }}
            />
          </Tab.Navigator>
        </View>
      </View>

      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{ alignSelf: "flex-end", padding: 10 }}
            >
              <Text style={{ fontSize: 18 }}>✖</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
              }}
              onPress={navToNutritionFacts}
            >
              <View style={styles.modal_content}>
                <AntDesign
                  name="exclamationcircleo"
                  size={18}
                  color="#999999"
                />
                <Text style={styles.modalText}>Nutrition Facts</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
              }}
              onPress={startCooking}
            >
              <View style={styles.modal_content}>
                <MaterialCommunityIcons
                  name="timer-settings-outline"
                  size={24}
                  color="#999999"
                />
                <Text style={styles.modalText}>Open Cooking Mode</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
              }}
              onPress={navToNotes}
            >
              <View style={styles.modal_content}>
                <FontAwesome name="sticky-note-o" size={24} color="#999999" />
                <Text style={styles.modalText}>Add Notes</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
              }}
              onPress={shareMeal}
            >
              <View style={styles.modal_content}>
                <FontAwesome name="mail-forward" size={24} color="#999999" />
                <Text style={styles.modalText}>Share</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
              }}
            >
              <View style={styles.modal_content}>
                <Ionicons name="print-outline" size={24} color="#999999" />
                <Text style={styles.modalText}>Print</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
              }}
              onPress={navToFeedBack}
            >
              <View style={styles.modal_content}>
                <FontAwesome name="commenting-o" size={24} color="#999999" />
                <Text style={styles.modalText}>Feedback For The Chef</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingVertical: 15 }}
              onPress={navToCollections}
            >
              <View style={styles.modal_content}>
                <Feather name="folder-plus" size={24} color="#999999" />
                <Text style={styles.modalText}>Add To Collections</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
  },
  cookedStatus: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 40,
    paddingBottom: 30,
    paddingTop: 15,
    borderRadius: 14,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 500,
  },
  cookedStatusContent: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  cookedStatusBtn: {
    textAlign: "center",
    borderWidth: 1,
    padding: 20,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  img: {
    width: "100%",
    // height: "70%",
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    width: "90%",
  },
  duration: {
    fontSize: 16,
    textAlign: "center",
    color: "#666666",
  },
  largeImg: {
    position: "relative",
  },
  largeImgContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    left: 0,
    right: 0,
    top: 40,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "50%",
    padding: 10,
  },

  numOfServings: {
    fontSize: 16,
    textAlign: "center",
    color: "#666666",
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    width: "100%",
  },
  content_header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cookwareItem: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    paddingVertical: 10,
    marginVertical: 4,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  meal_info: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
  },
  startCooking: {
    backgroundColor: Colors.mealTimePrimary,
    borderWidth: 0,
    width: "55%",
  },
  startCooking_text: {
    color: "black",
    fontWeight: "bold",
  },
  cooked: {
    width: "40%",
    borderColor: "#999999",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
  },
  cooked_text: {
    fontWeight: "bold",
  },
  tabContent: {
    flex: 1,
    padding: 0,
    width: "100%",
    backgroundColor: Colors.bodybgColor,
  },
  ingredientRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  ingredientName: {
    fontSize: 18,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    paddingVertical: 10,
    marginVertical: 4,
  },
  ingredientQty: {
    fontSize: 16,
    fontWeight: "400",
    color: "#666",
    textAlign: "right", // Align quantities to the right
  },

  instructionStep: {
    // fontSize: 16,
    // marginBottom: 10,

    // paddingVertical: 10,
    // marginVertical: 4,
    marginTop: 0,
    // borderBottomColor: "#cccccc",
    // borderWidth: 1,
    // borderColor: "pink",
    width: "95%",
    flexWrap: "wrap",
  },
  ingredientList: {
    marginTop: 10,
    paddingLeft: 20,
  },
  instructionStepText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    width: "100%",
    padding: 0,
  },
  cookingStepIndex: {
    // borderColor: "red",
    width: "5%",
  },
  cookingStepIndexText: {
    fontSize: 20,
    color: "#999999",
    fontWeight: "bold",
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },
  cookingSteps: {
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "space-between",
    marginTop: 15,
  },
  tabNavigator: {
    flex: 1,
    marginTop: 40,
  },
  ingredientText: {
    color: "red",
  },
  //MODAL
  modalText: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  modal_content: {
    flexDirection: "row",
    alignItems: "center",
  },
});

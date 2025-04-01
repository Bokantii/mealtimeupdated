import React, { useContext, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  TextInput,
  Modal,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";

import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import ScrollViewUI from "../../components/ui/ScrollViewUI";
import CustomDayPickerModal from "../../components/ui/CustomDayPickerModal";

import { Colors } from "../../util/Colors";
import { AuthContext } from "../../store/authContext";
import { MealContext } from "../../store/meals-context";
import { DayContext } from "../../store/day-context";

import { MOST_POPULAR_BREAKFAST } from "../../models/mealCategories/mostPopular/breakfastClass";
import { RECENTLY_CREATED_BREAKFAST } from "../../models/mealCategories/recentlyCreated/breakfastClass";
import { RECOMMENDED_PLAN_BREAKFAST } from "../../models/mealCategories/recommendedPlan/breakfastClass";

const Meals = () => {
  const navigation = useNavigation();
  const mealCtx = useContext(MealContext);
  const dayCtx = useContext(DayContext);
  const authCtx = useContext(AuthContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [isPopoverVisible, setIsPopoverVisible] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(50)).current;

  const toggleSearch = () => setShowSearch((prev) => !prev);
  const hidePopover = () => setIsPopoverVisible(false);
  const navigateHome = () => {
    hidePopover();
    navigation.goBack();
  };

  const handleDaySelect = (day) => {
    dayCtx.addMeal(day, "Breakfast", selectedMeal);
    mealCtx.addToPlan(selectedMeal);
    setIsModalVisible(false);
    setSelectedMeal(null);
  };

  const addToMealPlan = (meal) => {
    setSelectedMeal(meal);
    setIsModalVisible(true);
  };

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
      tags
      onPress={() => addToMealPlan(item)}
      addRemoveIcon="plus"
    />
  );

  useEffect(() => {
    if (isPopoverVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();

      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [isPopoverVisible]);

  return (
    <View style={styles.container}>
      <View style={styles.headerIcons}>
        <Pressable onPress={navigateHome} style={{ marginTop: 10 }}>
          <FontAwesome name="times" size={24} color="black" />
        </Pressable>
        <Pressable onPress={toggleSearch}>
          <AntDesign name="search1" size={24} color="black" />
        </Pressable>
      </View>

      {showSearch && (
        <TextInput
          style={styles.searchInput}
          placeholder="Search meals..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      )}

      <Text style={styles.title}>Build a meal plan</Text>

      <View style={styles.content}>
        <ScrollViewUI
          mealTime="Meals"
          title1="Most Popular"
          title2="Recently Created"
          title3="Recommended Plan"
          data1={MOST_POPULAR_BREAKFAST}
          data2={RECENTLY_CREATED_BREAKFAST}
          data3={RECOMMENDED_PLAN_BREAKFAST}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          horizontal
          navScreen1="MostPopularTabs"
          navScreen2="RecentlyCreatedMealsTabs"
          navScreen3="RecommendedPlanTabs"
          searchQuery={searchQuery}
        />
      </View>

      {mealCtx.ids.length < 1 && (
        <Modal transparent animationType="fade" visible={isPopoverVisible} onRequestClose={hidePopover}>
          <BlurView intensity={20} tint="dark" style={StyleSheet.absoluteFill}>
            <View style={styles.modalOverlay}>
              <Animated.View style={[styles.popover, { opacity: fadeAnim, transform: [{ translateY }] }]}>
                <Pressable onPress={hidePopover} style={styles.cancel}>
                  <FontAwesome name="times" size={24} color="#999999" />
                </Pressable>
                <Text style={styles.modalTitle}>Build your first meal plan</Text>
                <Text style={styles.modalSubtitle}>
                  Add a few recipes to cook this week, and we'll build you an easy-to-shop grocery list.
                </Text>
                <Button onPress={hidePopover} isAlternateBtnStyle>
                  <Text>Got it!</Text>
                </Button>
              </Animated.View>
            </View>
          </BlurView>
        </Modal>
      )}

      <CustomDayPickerModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSelectDay={handleDaySelect}
        meal={selectedMeal}
      />
    </View>
  );
};

export default Meals;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: Colors.mealTimePrimary,
    padding: 18,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: Colors.bgAlt,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
  content: {
    marginTop: 60,
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  popover: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    paddingVertical: 40,
    alignItems: "center",
    marginTop: 650,
    position: "absolute",
    bottom: -10,
  },
  cancel: {
    position: "absolute",
    right: 12,
    top: 10,
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    alignSelf: "flex-start",
  },
  modalSubtitle: {
    marginBottom: 30,
    width: "80%",
    textAlign: "left",
    alignSelf: "flex-start",
    color: "#666666",
  },
});

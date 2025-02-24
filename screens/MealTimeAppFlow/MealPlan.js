import { StyleSheet, Text, View, Modal } from "react-native";
import { Colors } from "../../util/Colors";
import Button from "../../components/ui/Button";
import { useNavigation } from "@react-navigation/native";
import { useState, useContext } from "react";
import { AuthContext } from "../../store/authContext";
import * as Notifications from 'expo-notifications';
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});
const MealPlan = () => {
  function scheduleNotificationHandler() {
    console.log('scheduling notification...');
    Notifications.scheduleNotificationAsync({
      content: {
        title: "My first local notification",
        body: "This is the body of the notification",
        data: { userName: "Daniel" },
      },
      trigger: { seconds: 5 },
    });
  }
  const navigation = useNavigation();
  const { updateMealPlanStatus } = useContext(AuthContext);

  const navigateToMeals = async () => {
    await updateMealPlanStatus(true);
    navigation.navigate("Meals");
  };

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
  const hasMeals = (
    <View style={styles.container}>
      <Text>Monday:</Text>
      <Text>Tuesday:</Text>
      <Text>Wednesday:</Text>
      <Text>Thursday:</Text>
      <Text>Friday:</Text>
      <Text>Saturday:</Text>
      <Text>Sunday:</Text>
    </View>
  );
  return <View style={styles.container}>{hasNoMeals}</View>;
};

export default MealPlan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "90%",
    alignItems: "center",
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
  subTitle: {
    textAlign: "center",
  },
});

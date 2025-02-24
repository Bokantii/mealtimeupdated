import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import InstructionTabNavigator from "./InstructionTabNavigator"; // Import your tab navigator
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from '@expo/vector-icons/Entypo';
import { Colors } from "../../../util/Colors";
export default function CookingInstructionScreen({ route, navigation }) {
  const { instructions, ingredientsPerStep } = route.params;
  function goBack() {
    navigation.goBack();
  }

  if (!instructions || instructions.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.bodybgColor,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          No instructions available
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{ flex: 1,backgroundColor: Colors.bodybgColor ,paddingTop:50}}
    >
      <View style={styles.iconContainer}>
        <Pressable style={styles.icon} onPress={goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
      </View>
      
      <InstructionTabNavigator
        instructions={instructions}
        ingredientsPerStep={ingredientsPerStep}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    padding: 10,
    flexDirection: "row",
  },
});

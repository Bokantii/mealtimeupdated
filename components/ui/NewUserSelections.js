import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,

} from "react-native";
import React from "react";
import { Colors } from "../../util/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
const NewUserSelections = ({  children, action, headingText }) => {
    const navigation=useNavigation()
  function goBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <Pressable style={styles.icon} onPress={goBack}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
      <Text style={styles.heading}>{headingText} </Text>
      {children}
      <TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            padding: 25,
            borderRadius: 15,
            fontWeight: "bold",
            backgroundColor: Colors.mealTimePrimary,
            width:"100%",
            position:"absolute",
            bottom:-200
          }}
        >
          {action}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 45,
    backgroundColor: Colors.bodybgColor,
  },
  heading: { fontSize: 35, fontWeight: "bold", marginVertical: 20 },
  allergy: {
    paddingHorizontal: 22,
    paddingVertical: 15,
    margin: 5,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: "center",
  },
  allergyText: { fontSize: 18, textAlign: "center", fontWeight: "bold" },
});

export default NewUserSelections;

import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Colors } from "../../util/Colors";
const Button = ({ onPress, children, isAlternateBtnStyle }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        isAlternateBtnStyle && styles.alternateBtn,
      ]}
      onPress={onPress}
    >
      <View>
        <Text style={ [styles.buttonText,isAlternateBtnStyle && styles.alternateBtnText]}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    paddingVertical: 18,
    paddingHorizontal: 12,
    elevation: 2,
    shadowColor: "black",
    backgroundColor: "#e6e6e6",

  },
  alternateBtn: {
    color: "black",
    backgroundColor: Colors.mealTimePrimary,
    width:'100%'
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    color: "#999999",
    fontSize: 16,
    fontWeight: "bold",
  },
  alternateBtnText:{
    color:'black'
  }
});

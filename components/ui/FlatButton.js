import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../util/Colors";
const FlatButton = ({ children, onPress}) => {
  return (
    <Pressable
      style={({ pressed }) => {
        [styles.button, pressed && styles.pressed];
      }}
      onPress={onPress}
    >
      <View>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth:1
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    color: 'red',
    borderWidth:1,
   
  },
  text:{
    borderBottomWidth:1,
    fontWeight:'bold'
  }
});

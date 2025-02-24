import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../util/Colors";

const CustomCheckbox = ({isChecked,setIsChecked}) => {
  

  return (
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={() => setIsChecked(!isChecked)}
    >
      <View style={[styles.checkbox, isChecked && styles.checkedBox]}>
        {isChecked && <Text style={styles.checkmark}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checkedBox: {
    backgroundColor: Colors.mealTimePrimary,
    borderColor: Colors.mealTimePrimary,
  },
  checkmark: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
    alignItems:'center'
  },
  label: {
    fontSize: 16,
  },
});

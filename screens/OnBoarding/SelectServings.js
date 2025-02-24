import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import NewUserSelections from "../../components/ui/NewUserSelections";
import { Colors } from "../../util/Colors";

const SelectServings = () => {
  const [selected, setSelected] = useState(null); // ✅ Single selection - store string, not array

  const options = [
    { numServings: "2 servings", description: "for two, or one with leftovers" },
    { numServings: "4 servings", description: "for four, or two-three with leftovers" },
    { numServings: "6 servings", description: "for a family of 5+" },
  ];

  const toggleSelection = (item) => {
    setSelected(item.numServings); // ✅ Store only `numServings` string
  };

  return (
    <NewUserSelections action="Continue" headingText="How many servings per meal?">
      <View style={styles.gridContainer}>
        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleSelection(item)}
            style={[
              styles.option,
              {
                backgroundColor: selected === item.numServings ? Colors.bgAlt : "white",
                borderColor: selected === item.numServings ? Colors.mealTimePrimary : "#cccccc",
              },
            ]}
          >
            <View>
              <Text style={styles.optionText}>{item.numServings}</Text>
              <Text style={styles.descriptionText}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </NewUserSelections>
  );
};

export default SelectServings;

const styles = StyleSheet.create({
  gridContainer: {
    width: "100%",
    alignItems: "center",
  },
  option: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: "flex-start",
  },
  optionText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
  descriptionText: {
    fontSize: 14,
    color: "gray",
    textAlign: "left",
  },
});

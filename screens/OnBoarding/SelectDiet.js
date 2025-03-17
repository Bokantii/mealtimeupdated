import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import NewUserSelections from "../../components/ui/NewUserSelections";
import { Colors } from "../../util/Colors";

const SelectDiet = ({navigation}) => {
  const options = [
    "Classic",
    "Low Carb",
    "Keto",
    "Flexitarian",
    "Paleo",
    "Vegetarian",
    "Pescetarian",
    "Vegan",
    
  ];
  const [selected, setSelected] = useState([]);

  const toggleSelection = (item) => {
    setSelected((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((selectedItem) => selectedItem !== item)
        : [...prevSelected, item]
    );
  };

  const submitHandler=()=>{
    navigation.navigate('SelectDislikes')
  }
  return (
    <NewUserSelections action="Continue" headingText="Pick your diet" navigate={submitHandler}>
      <View style={styles.gridContainer}>
        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleSelection(item)}
            style={[
              styles.option,
              {
                backgroundColor: selected.includes(item) ? Colors.bgAlt : "white",
                borderColor: selected.includes(item) ? Colors.mealTimePrimary : "#cccccc",
              },
            ]}
          >
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </NewUserSelections>
  );
};

export default SelectDiet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  gridContainer: {
    width: "100%",
    alignItems: "center",
  },
  option: {
    width: "100%", // Keeps buttons uniform
    padding: 20,
    marginVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    alignItems:"flex-start"
  },
  optionText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight:"bold"
  },
  button: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
  import React, { useState } from "react";
  import { Colors } from "../../util/Colors";
  import NewUserSelections from "../../components/ui/NewUserSelections";
 
  const SelectDislikes = ({ navigation }) => {
    const options = [
      "Beets",
      "Bell Peppers",
      "Brussels",
      "Sprouts",
      "Cauliflower",
      "Olives",
      "Quinoa",
      "Tofu",
      "Turnips",
    ];
 
    const [selected, setSelected] = useState([]);
    const submitHandler=()=>{
      navigation.navigate('SelectServings')
    }
    const toggleSelection = (item) => {
      setSelected((prevSelected) =>
        prevSelected.includes(item)
          ? prevSelected.filter((selectedItem) => selectedItem !== item)
          : [...prevSelected, item]
      );
    };
  
    return (
      <NewUserSelections headingText="How about dislikes?" action="Continue" navigate={submitHandler}>
        <View style={styles.gridContainer}>
          {options.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => toggleSelection(item)}
              style={[
                styles.allergy,
                {
                  backgroundColor: selected.includes(item)
                    ? Colors.bgAlt
                    : "white",
                  borderColor: selected.includes(item)
                    ? Colors.mealTimePrimary
                    : "#cccccc",
                },
              ]}
            >
              <Text style={styles.allergyText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </NewUserSelections>
    );
  };
  
  export default SelectDislikes;
  
  const styles = StyleSheet.create({
    gridContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    allergy: {
      paddingHorizontal: 22,
      paddingVertical: 15,
      margin: 5,
      borderRadius: 15,
      borderWidth: 1,
      alignItems: "center",
    },
    allergyText: { 
      fontSize: 18, 
      textAlign: "center", 
      fontWeight: "bold" 
    },
  });
  
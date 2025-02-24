import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomCheckbox from "./CustomCheckbox";
import { Colors } from "../../util/Colors";

const CollectionsCard = ({ title, numberOfRecipes, imgURI,collectionsLength,setCollectionsLength}) => {
  const [isChecked, setIsChecked] = useState(false);
  

  return (
    <TouchableOpacity>
      <View
        style={[
          styles.container,
          {
            backgroundColor: isChecked ? Colors.bgAlt : "#fff",
            borderColor: isChecked ? Colors.mealTimePrimary : "#999999",
          },
        ]}
      >
        <View style={styles.container_inner}>
          <Image
            source={{
              uri: { imgURI },
            }}
            style={{ width: 60, height: 60, borderRadius: 5 }}
          />
          <View style={styles.text}>
            <Text style={styles.collectionTitle}>{title}</Text>
            <Text
              style={styles.number_of_recipes}
            >{`${collectionsLength} recipes`}</Text>
          </View>
        </View>
        <CustomCheckbox isChecked={isChecked} setIsChecked={setIsChecked} />
      </View>
    </TouchableOpacity>
  );
};

export default CollectionsCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,

    width: "100%",
    borderRadius: 10,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  collectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  container_inner: {
    flexDirection: "row",
    width: "46%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  number_of_recipes: {
    color: "#999999",
  },
});

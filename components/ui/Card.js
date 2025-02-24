import React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Card = ({
  id,
  title,
  imgUrl,
  duration,
  numOfServings,
  ingredientsId,
  ingredientQtyId,
  cookware,
  instructions,
  isPro,
  mealCategory,
  description,
  tags,
  onPress,
}) => {
  const navigation = useNavigation();
  function navToDetails() {
    navigation.navigate("MealDetail", {
      id,
      title,
      imgUrl,
      duration,
      numOfServings,
      ingredientsId,
      ingredientQtyId,
      cookware,
      instructions,
      isPro,
      mealCategory,
      description,
      tags,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Pressable onPress={navToDetails}>
          <Image source={{ uri: imgUrl }} style={styles.img} />
        </Pressable>
        <Pressable style={styles.iconContainer} onPress={onPress}>
          <AntDesign name="plus" size={19} color="black" style={styles.icon} />
        </Pressable>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  content: {
    width: 150,
    height: 150,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    position: "relative",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "white",
    borderRadius: "50%",
    padding: 8,
    right: 8,
    top: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    width: 150,
  },
});

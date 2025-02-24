import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { Colors } from "../../util/Colors";
const FlatListVertical = ({
  title,
  data,
  keyExtractor,
  horizontal,
  renderItem,
  numColumns,
  searchQuery,
}) => {
  const filteredMeal =
    searchQuery.trim().length > 0
      ? data.filter((meal) =>
          meal.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
        )
      : data;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {filteredMeal && filteredMeal.length > 0 ? (
        <FlatList
          data={filteredMeal}
          keyExtractor={keyExtractor}
          horizontal={horizontal}
          renderItem={renderItem}
          numColumns={numColumns}
          style={styles.flatList}
        />
      ) : (
        <Text>No Items Available</Text>
      )}
    </View>
  );
};

export default FlatListVertical;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    marginTop: 15,
    fontWeight: "bold",
    fontStyle: "italic",
    color: Colors.flatBtnColor,
  },
  flatList: {
    marginTop: 25,
  },
});

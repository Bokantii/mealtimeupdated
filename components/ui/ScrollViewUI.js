import React, { useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import FlatListView from "./FlatListView";
const ScrollViewUI = ({
  mealTime,
  title1,
  title2,
  title3,
  data1,
  data2,
  data3,
  renderItem,
  horizontal,
  keyExtractor,
  navScreen1,
  navScreen2,
  navScreen3,
  searchQuery
}) => {
  return (
    <View>
      <Text style={styles.mealTime}>{mealTime}</Text>
      <ScrollView>
        <FlatListView
          title={title1}
          data={data1}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal={horizontal}
          screenName={mealTime}
          navScreen={navScreen1}
          searchQuery={searchQuery}
        />
        <FlatListView
          title={title2}
          data={data2}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal={horizontal}
          screenName={mealTime}
          navScreen={navScreen2}
          searchQuery={searchQuery}
        />
        <FlatListView
          title={title3}
          data={data3}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal={horizontal}
          screenName={mealTime}
          navScreen={navScreen3}
          searchQuery={searchQuery}
        />
      </ScrollView>
    </View>
  );
};

export default ScrollViewUI;

const styles = StyleSheet.create({
  mealTime: {
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    marginBottom: 20,
  },
});

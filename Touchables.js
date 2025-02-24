// React Native Touchable Components Guide
//
// React Native provides several "Touchable" components to capture tapping gestures
// and display feedback when a gesture is recognized. These components do not have
// default styling, so customization is necessary to integrate them seamlessly
// into your app.

// Which "Touchable" component to use depends on the kind of feedback you want to provide:
//
// 1. TouchableHighlight: Generally used where you would use a button or link on web.
//    - Darkens the view's background when pressed.
// 2. TouchableNativeFeedback: Best for Android, as it displays ink surface reaction ripples.
// 3. TouchableOpacity: Reduces the opacity of the button, showing the background while pressed.
// 4. TouchableWithoutFeedback: Used when you want to handle a tap gesture without showing feedback.
// 5. Long Presses: All "Touchable" components support long presses by using the `onLongPress` prop.

// Example Implementation:

import React from "react";
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Touchables = () => {
  const onPressButton = () => {
    Alert.alert("You tapped the button!");
  };

  const onLongPressButton = () => {
    Alert.alert("You long-pressed the button!");
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPressButton} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity onPress={onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>
      <TouchableNativeFeedback
        onPress={onPressButton}
        background={
          Platform.OS === "android"
            ? TouchableNativeFeedback.SelectableBackground()
            : undefined
        }
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            TouchableNativeFeedback{" "}
            {Platform.OS !== "android" ? "(Android only)" : ""}
          </Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableWithoutFeedback onPress={onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableHighlight
        onPress={onPressButton}
        onLongPress={onLongPressButton}
        underlayColor="white"
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Touchable with Long Press</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center",
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
});

export default Touchables;

// Save this file as Touchables.js and load it in your React Native app to experiment with touchable components.

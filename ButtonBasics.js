// React Native Basic Button Component Guide
//
// The Button component in React Native provides a simple way to create buttons
// that render nicely on all platforms. Below is an example of how to use the Button component.
//
// Example Usage:
//
// <Button
//   onPress={() => {
//     console.log('You tapped the button!');
//   }}
//   title="Press Me"
// />
//
// This renders a button with platform-specific styling.
// - iOS: A blue label.
// - Android: A blue rounded rectangle with light text.
//
// You can customize the button using the `color` prop to set a custom color.

import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

const ButtonBasics = () => {
  const onPress = () => {
    Alert.alert('You tapped the button!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={onPress} title="Press Me" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onPress} title="Press Me" color="#841584" />
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button onPress={onPress} title="This looks great!" />
        <Button onPress={onPress} title="OK!" color="#841584" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ButtonBasics;

// Save this file as ButtonBasics.js and load it in your React Native app to experiment with button components.

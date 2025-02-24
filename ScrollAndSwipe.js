// React Native Scrolling and Swiping Guide
//
// Gestures like scrolling and swiping are common on touch devices. React Native's ScrollView
// component is used to handle scrolling gestures and display scrollable content.
//
// Known Issues:
// - react-native#29308: Touch area never extends past parent view bounds.
// - On Android, negative margins are not supported.

// Example Code:

import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView}  alwaysBounceVertical={true}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
});

export default App;

// Save this file as App.js and load it in your React Native app to experiment with scrolling.

// Key Takeaways:
// - ScrollView renders all child components at once, which can impact performance for long lists.
// - For performance-critical applications with large datasets, consider using FlatList instead.

// ScrollView Props:
//
// StickyHeaderComponent: A React Component used to render sticky headers. Useful with stickyHeaderIndices.
// Type: component, element
//
// alwaysBounceHorizontal (iOS): Bounces horizontally even if content is smaller than the view.
// Type: bool, Default: true when horizontal={true}, false otherwise
//
// alwaysBounceVertical (iOS): Bounces vertically even if content is smaller than the view.
// Type: bool, Default: false when vertical={true}, true otherwise
//
// automaticallyAdjustContentInsets (iOS): Adjusts content insets behind navigation/tab bars.
// Type: bool, Default: true
//
// automaticallyAdjustKeyboardInsets (iOS): Adjusts contentInset and scrollViewInsets when the keyboard changes.
// Type: bool, Default: false
//
// automaticallyAdjustsScrollIndicatorInsets (iOS): Adjusts scroll indicator insets automatically.
// Type: bool, Default: true
//
// bounces (iOS): Enables/disables bouncing when scrolling past content bounds.
// Type: bool, Default: true
//
// bouncesZoom (iOS): Enables zoom gestures beyond min/max limits.
// Type: bool, Default: true
//
// canCancelContentTouches (iOS): Prevents dragging if touch moves once tracking starts.
// Type: bool, Default: true
//
// centerContent (iOS): Centers content if smaller than the view.
// Type: bool, Default: false
//
// contentContainerStyle: Styles for the content container.
// Example: { paddingVertical: 20 }
// Type: View Style
//
// contentInset (iOS): Insets for content edges.
// Type: object: {top: number, left: number, bottom: number, right: number}, Default: {top: 0, left: 0, bottom: 0, right: 0}
//
// contentInsetAdjustmentBehavior (iOS): Adjusts safe area insets. Options: 'automatic', 'scrollableAxes', 'never', 'always'
// Type: enum, Default: 'never'
//
// contentOffset: Sets starting scroll offset.
// Type: Point {x: number, y: number}, Default: {x: 0, y: 0}
//
// decelerationRate: Controls how quickly scrolling decelerates after releasing.
// Options: 'normal', 'fast', or a number. Default: 'normal'
//
// directionalLockEnabled (iOS): Locks scrolling to vertical or horizontal direction.
// Type: bool, Default: false



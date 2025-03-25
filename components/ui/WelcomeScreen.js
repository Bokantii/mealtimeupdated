import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ img, heading, bodyText }) => {
  return (
    <View>
      <Image source={img} />
      <View>
        <Text>{heading}</Text>
        <Text>{bodyText}</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

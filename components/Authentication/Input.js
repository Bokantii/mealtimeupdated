import React from "react";
import { TextInput, Text, View, StyleSheet } from "react-native";
import { Colors } from "../../util/Colors";
const Input = ({
  label,
  placeholder,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  width
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        style={  [styles.input, isInvalid && styles.inputIsInvalid]}
        keyboardType={keyboardType}
        onChangeText={onUpdateValue}
        secureTextEntry={secure}
        value={value}
        autoCapitalize="none"
        autoComplete="none"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical:8,
    minWidth:'100%',
  },
  label:{
    marginBottom:4,
    fontWeight:'bold',
    fontSize:17
  },
  labelInvalid:{
    color:Colors.error500
  },
  input:{
    paddingVertical:14,
    paddingHorizontal:12,
    backgroundColor:Colors.inputBgColor,
    borderWidth:1,
    borderColor:Colors.inputBorderColor,
    borderRadius:15,
    fontSize:16,
    marginTop:5
  },
  inputIsInvalid:{
    backgroundColor:Colors.error100
  }
});







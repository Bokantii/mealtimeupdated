import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import Button from "../ui/Button";
import { useState } from "react";
import FlatButton from "../ui/FlatButton";
import CheckBox from "@react-native-community/checkbox";
import { Image } from "react-native";

const AuthForm = ({ isLogin, credentialIsInvalid, onSubmit }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmEmail, setConfirmEmail] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [checkBoxIschecked, setCheckboxIsChecked] = useState(false);

  const {
    email: emailIsInvalid,
    password: passwordIsInvalid,
    confirmEmail: emailsDontMatch,
    confirmPassword: passwordsDontMatch,
    name: nameIsInvalid,
  } = credentialIsInvalid;
  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "name":
        setEnteredName(enteredValue);
        break;
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "confirmEmail":
        setConfirmEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }
  function checkBox() {
    setCheckboxIsChecked(true);
  }
  function submitHandler() {
    onSubmit({
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
      confirmEmail: enteredConfirmEmail,
    });
    console.log({
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
      confirmEmail: enteredConfirmEmail,
    });
  }
  return (
    <View style={styles.form}>
      <View style={styles.header}>
        <Image source={require("./iconImg.png")} style={styles.iconImg} />
        <Text style={styles.authTitle}>{!isLogin ? "Sign Up" : "Log In"}</Text>
      </View>

      <View style={styles.form_content}>
        {!isLogin && (
          <Input
            label={"Full Name"}
            placeholder={"e.g John Doe"}
            value={enteredName}
            onUpdateValue={updateInputValueHandler.bind(this, "name")}
          />
        )}
        <Input
          label={"Email Address"}
          placeholder={"johndoe@email.com"}
          onUpdateValue={updateInputValueHandler.bind(this, "email")}
          keyboardType={"email-address"}
          value={enteredEmail}
          isInvalid={emailIsInvalid}
        />
        {!isLogin && (
          <Input
            label={"Confirm Email Address"}
            placeholder={"johndoe@email.com"}
            onUpdateValue={updateInputValueHandler.bind(this, "confirmEmail")}
            keyboardType={"email-address"}
            value={enteredConfirmEmail}
            isInvalid={emailsDontMatch}
          />
        )}
        <Input
          label={"Password"}
          placeholder={"Enter your password"}
          isInvalid={passwordIsInvalid}
          value={enteredPassword}
          onUpdateValue={updateInputValueHandler.bind(this, "password")}
          secure
        />
        {!isLogin && (
          <Input
            label={"Confirm Password"}
            placeholder={"Re-enter your password"}
            value={enteredConfirmPassword}
            onUpdateValue={updateInputValueHandler.bind(
              this,
              "confirmPassword"
            )}
            isInvalid={passwordsDontMatch}
            secure
          />
        )}
        {!isLogin && (
          <View style={styles.terms_conditions}>
            {/* <CheckBox disabled={false} value={checkBoxIschecked} onValueChange={(newValue)=>{
              setCheckboxIsChecked(newValue) 
            }}/> */}
            <Text>I agree to Mealtime's</Text>
            <FlatButton>Terms & Conditions</FlatButton>
          </View>
        )}
      </View>
      <View style={styles.buttons}>
        <Button onPress={submitHandler}>
          {isLogin ? "Log In" : "Create an Account"}
        </Button>
      </View>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  form: {
    padding: 16,
    Width: "100%",
  },
 header:{
  flexDirection:'row',
  justifyContent:"space-between",
  alignItems:'center'
 },
  authTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 8,
    marginRight:"30%"
  },
  buttons: {
    marginTop: 12,
  },
  terms_conditions: {
    flexDirection: "row",
    // justifyContent:'space-around'
  },
  iconImg: {
    width: 50,
    height: 50,
  },
});

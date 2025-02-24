import React, { useState,useContext } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import AuthContent from "../../components/Authentication/AuthContent";
import { Colors } from "../../util/Colors";
import { AuthContext } from "../../store/authContext";
import { createUser } from "../../util/auth";
import LoadingOverlay from "../../components/ui/LoadingOverlay";

const SignUp = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  async function signupHandler({ email, password }) {
    console.log('signing up....')
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not create user,please check your input and try again later"
      );
      setIsAuthenticating(false)
    }
  }
  if(isAuthenticating){
    return <LoadingOverlay message="Creating user..."/>
  }
  return (
    <View style={styles.container}>
      <AuthContent  onAuthenticate={signupHandler}/>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex: 1,
    justifyContent: "center",
    height:'80%'
  },
});

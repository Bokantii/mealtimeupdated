import AuthForm from "./AuthForm";
import { View, Alert, StyleSheet,Text, Image } from "react-native";
import FlatButton from "../ui/FlatButton";
import Button from "../ui/Button";
import { Colors } from "../../util/Colors";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const AuthContent = ({ isLogin, onAuthenticate }) => {
  const [credentialIsInvalid, setCredentialIsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });
  const navigation = useNavigation()
  function switchAuthModeHandler() {
    if(isLogin){
      navigation.replace('Signup')
    }else{
      navigation.replace('Login')
    }
  }
  function submitHandler(credentials) {
    let { name,email, password, confirmPassword, confirmEmail } = credentials;
    email = email.trim();
    password = password.trim();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Email:', confirmEmail);
    console.log('Confirm Password:', confirmPassword);
  

    const nameIsInvalid= name.value === ""
    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;
    if (nameIsInvalid ||
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert("Invalid Input", "Please check your entered credentials");
      setCredentialIsInvalid({
        name:nameIsInvalid,
        email: !emailIsValid,
        password: !passwordIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View styles={styles.authContent}>
      
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialIsInvalid={credentialIsInvalid}
      />
      <View style={styles.buttons}>
        <Text style={styles.authPrompt}>{!isLogin ? 'Already a member?' :'Not a member?'}</Text>
        <FlatButton onPress={switchAuthModeHandler} >
          {!isLogin ? "Log In" : "Sign Up"}
        </FlatButton>
      </View>
    </View>
  );
};

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "green",
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    alignItems:'center',
   
  },
  buttons: {
    marginTop: 8,
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
    textAlign:'center',
  },
  flatBtn:{
    borderWidth:1,
    borderColor:'black',
    
  },
  authPrompt:{
    textAlign:'center'
  },
 
});



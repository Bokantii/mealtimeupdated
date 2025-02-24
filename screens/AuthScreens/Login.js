import AuthContent from "../../components/Authentication/AuthContent";
import React, { useContext, useState } from "react";
import { Text, StyleSheet, Alert,View } from "react-native";
import { login } from "../../util/auth";
import { AuthContext } from "../../store/authContext";
import LoadingOverlay from "../../components/ui/LoadingOverlay";
import { Colors } from "../../util/Colors";
const Login = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials or try again later"
      );
      setIsAuthenticating(false);
    }
    if (isAuthenticating) {
      return <LoadingOverlay message="Logging you in..." />;
    }
  }
  return (
    <View style={styles.container}>
      <AuthContent isLogin onAuthenticate={loginHandler} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bodybgColor,
    flex: 1,
    justifyContent: "center",
  },
 
});

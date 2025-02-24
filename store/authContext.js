import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
//Compound component pattern of component design
export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  hasCompletedOnboarding: false,
  authenticate: (token) => {},
  completeOnBoarding: () => {},
  logout: () => {},
  hasMealPlan:false,
  updateMealPlanStatus:(status)=>{}
});

//Provider pattern of component design
function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [hasMealPlan,setHasMealPlan] = useState(false)

  useEffect(() => {
    async function loadToken() {
      try {
        const storedToken = await AsyncStorage.getItem("token");

        const onboardingStatus = await AsyncStorage.getItem(
          "onboardingComplete"
        );

        if (storedToken) {
          setAuthToken(storedToken);
        }
        if (onboardingStatus === "true") {
          setOnboardingComplete(true);
        }
      } catch (error) {
        console.error("Failed to load from async storage:", error);
      } finally {
        setIsLoading(false); //Token retrieval is complete
      }
    }
    loadToken();
  }, []);

  async function authenticate(token) {
    try {
      setAuthToken(token);
      await AsyncStorage.setItem("token", token);
    } catch (error) {
      console.error("Failed to save token to Async storage:", error);
    }
  }

  async function completeOnboarding() {
    try {
      setOnboardingComplete(true);
      await AsyncStorage.setItem("onboardingComplete", "true");
    } catch (error) {
      console.error("Failed to save onboarding status to AsyncStorage:", error);
    }
  }

  async function logout() {
    try {
      setAuthToken(null);
      setOnboardingComplete(false);
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("onboardingComplete");
    } catch (error) {
      console.error("Failed to remove token from Async Storage:", error);
    }
  }
  const updateMealPlanStatus= async (status)=>{
    setHasMealPlan(status)
    await AsyncStorage.setItem('hasMealPlan',JSON.stringify(status))
  }
  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    hasCompletedOnboarding: onboardingComplete,
    authenticate: authenticate,
    completeOnboarding: completeOnboarding,
    logout: logout,
    hasMealPlan:hasMealPlan,
    updateMealPlanStatus:updateMealPlanStatus
  };

  if (isLoading) {
    return null; //Render nothing or a loading screen whule checking storage
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;

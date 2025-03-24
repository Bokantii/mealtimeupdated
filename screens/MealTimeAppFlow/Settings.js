import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView
} from "react-native";
import { Colors } from "../../util/Colors";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
const Settings = () => {
  const settingsMenu = [
    {
      title: "Food Waste Savings",
      icon: (
        <Text
          style={{
            backgroundColor: "#d9f2e3",
            borderWidth: 1,
            borderRadius: 40,
            borderColor: "#40bf72",
            padding: 5,
          }}
        >
          1 lb
        </Text>
      ),
    },
    {
      title: "Eating Preferences",
      icon: <Feather name="sliders" size={24} color="#999999" />,
    },
    {
      title: "Your Recipes",
      icon: (
        <MaterialCommunityIcons
          name="pot-steam-outline"
          size={24}
          color="#999999"
        />
      ),
    },
    {
      title: "Share Mealtime",
      icon: <AntDesign name="gift" size={24} color="#999999" />,
    },
    {
      title: "Meet Our Chefs",
      icon: <Octicons name="people" size={24} color="#999999" />,
    },
  ];
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>Settings</Text>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
              }}
              style={{
                borderRadius: 50,
                width: 100,
                height: 100,
                borderWidth: 2,
                borderColor: "#cccccc",
              }}
            />
          </TouchableOpacity>
          <Text style={{ marginTop: 12, color: "#b2b0ad" }}>
            smileyface@gmail.com
          </Text>
        </View>
        <View style={styles.upgradePro}>
          <Text style={styles.upgradeProHeading}>Upgrade to Pro</Text>
          <Text style={styles.upgradeProBody}>
            Get exclusive recipes, nutritional information, advanced filters,
            and more.
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                backgroundColor: Colors.mealTimePrimary,
                padding: 20,
                textAlign: "center",
                borderRadius:10,
                fontSize:17,
                fontWeight:"500",
                
              }}
            >
              Upgrade Now!
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {settingsMenu.map((item, index) => (
            <View
              key={index}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#cccccc",
                paddingVertical: Platform.OS === "android" ? 23 : 22,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 5,
                }}
              >
                {item.icon}
                <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>
                  {item.title}
                </Text>
              </View>

              <TouchableOpacity>
                <Entypo name="chevron-small-right" size={24} color="#999999" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
  },
  container: {
    padding: 10,
  },
  heading: {
    fontWeight: "600",
    fontSize: 30,
  },
  upgradePro: {
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    backgroundColor: "#ffe4c2",

  },
  upgradeProHeading: {
    fontWeight: "700",
    fontSize: 32,
  },
  upgradeProBody:{
    marginVertical:20,
    fontSize:16,
    color:"#8c867d"
  },
  
});

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import { Colors } from "../../util/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import stapleData from "../../data/stapleData";
import { FlatList } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
const Groceries = ({ navigation }) => {
  const [warningVisible, setWarningVisible] = useState(true);

  function hideWarning() {
    setWarningVisible(false);
  }

  function navigateToSearch() {
    navigation.navigate("GrocerySearch");
  }
  const renderedStaples = stapleData.slice(0, 10);
  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* ✅ SafeAreaView added */}
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Groceries</Text>
        <TouchableOpacity onPress={navigateToSearch}>
          <AntDesign
            name="plus"
            size={24}
            color="black"
            style={styles.plusIcon}
          />
        </TouchableOpacity>
      </View>
      {/* Allergen Warning */}
      {warningVisible && (
        <View style={styles.allergenWarning}>
          <Text style={styles.allergenWarningHeader}>Allergen Warning</Text>
          <Text style={styles.allergenWarningBody}>
            Ingredients with a ⚠️ symbol may contain allergens. Tap an
            ingredient for more details, and make sure to purchase an
            allergen-free variety.
          </Text>
          <TouchableOpacity onPress={hideWarning}>
            <View style={styles.gotIt}>
              <Text style={styles.gotItText}>Got It!</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {/* Allergen Warning end*/}
      <View>
        <Text
          style={{
            marginTop: 10,
            color: "#666666",
            width: "95%",
            alignSelf: "center",
          }}
        >
          Produce
        </Text>
        <FlatList
          data={renderedStaples}
          keyExtractor={(item, index) => index.toString().toLowerCase()}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 20,
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "#cccccc",
                width: "95%",
                alignSelf: "center",
              }}
            >
              <TouchableOpacity>
                <Ionicons name="checkmark" size={24} color="#cccccc" />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 10,
                  textTransform: "lowercase",
                  fontWeight: "500",
                }}
              >
                {item.staple}
              </Text>
            </View>
          )}
        />
      </View>
      {/* ✅ Shop Online button positioned properly */}
      <TouchableOpacity style={styles.shopOnline}>
        <Text style={styles.shopOnlineText}>Shop Online</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Groceries;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
    paddingHorizontal: 10,
  },
  heading: {
    fontWeight: "500",
    fontSize: 30,
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 10 : 50,
    width: "95%",
    alignSelf: "center",
  },
  plusIcon: {
    fontWeight: "bold",
  },
  allergenWarning: {
    borderWidth: 0,
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#e55b48",
    marginTop: 20,
    width: "95%",
    alignSelf: "center",
  },
  allergenWarningHeader: {
    fontSize: 20,
    fontWeight: "500",
    color: "#ffffff",
  },
  allergenWarningBody: {
    marginTop: 8,
    lineHeight: 20,
    color: "#ffffff",
  },
  gotIt: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  gotItText: {
    fontWeight: "bold",
  },
  scrollContainer: {
    flex: 1,
  },
  shopOnline: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.mealTimePrimary,
    padding: 20,
    borderRadius: 17,
    position: "absolute",
    bottom: 20,
    width: "95%",
    alignSelf: "center",
  },
  shopOnlineText: {
    fontWeight: "bold",
  },
});

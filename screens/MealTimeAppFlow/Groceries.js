import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  FlatList,
} from "react-native";
import { Colors } from "../../util/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import stapleData from "../../data/stapleData";
import { Ionicons } from "@expo/vector-icons";
const Groceries = ({ navigation }) => {
  const [warningVisible, setWarningVisible] = useState(true);
  const [checkedItems, setCheckedItems] = useState([]);

  const toggleItem = (item) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter((i) => i !== item));
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  function hideWarning() {
    setWarningVisible(false);
  }

  function navigateToSearch() {
    navigation.navigate("GrocerySearch");
  }
  function shopOnline(){
    navigation.navigate("ShopOnline")
  }
  const renderedStaples = stapleData.slice(0, 10);

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Header */}
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Groceries</Text>
        <TouchableOpacity onPress={navigateToSearch}>
          <AntDesign name="plus" size={24} color="black" style={styles.plusIcon} />
        </TouchableOpacity>
      </View>

      {/* Allergen Warning */}
      {warningVisible && (
        <View style={styles.allergenWarning}>
          <Text style={styles.allergenWarningHeader}>Allergen Warning</Text>
          <Text style={styles.allergenWarningBody}>
            Ingredients with a ⚠️ symbol may contain allergens. Tap an ingredient for more details, 
            and make sure to purchase an allergen-free variety.
          </Text>
          <TouchableOpacity onPress={hideWarning}>
            <View style={styles.gotIt}>
              <Text style={styles.gotItText}>Got It!</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      {/* Grocery List */}
      <View>
        <Text style={styles.sectionTitle}>Produce</Text>
        <FlatList
          data={renderedStaples}
          keyExtractor={(item, index) => index.toString().toLowerCase()}
          renderItem={({ item }) => {
            const isChecked = checkedItems.includes(item.staple);
            return (
              <View style={styles.listItem}>
                {/* Checkbox */}
                <TouchableOpacity onPress={() => toggleItem(item.staple)} style={[styles.checkbox, isChecked && styles.checkedBox]}>
                  {isChecked && <Ionicons name="checkmark" size={18} color="white" />}
                </TouchableOpacity>
              
                {/* Item Text */}
                <Text style={[styles.itemText, isChecked && styles.strikethrough]}>
                  {item.staple}
                </Text>
              </View>
            );
          }}
        />
      </View>

      {/* Shop Online Button */}
      <TouchableOpacity style={styles.shopOnline} onPress={shopOnline}>
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
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 10 : 50,
    width: "95%",
    alignSelf: "center",
  },
  heading: {
    fontWeight: "500",
    fontSize: 30,
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
  sectionTitle: {
    marginTop: 10,
    color: "#666666",
    width: "95%",
    alignSelf: "center",
  },
  listItem: {
    flexDirection: "row",
    paddingVertical: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    width: "95%",
    alignSelf: "center",
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 4, // Slight rounding like in screenshot
    borderWidth: 2,
    borderColor: "#A1A1A1", // Light gray border for unselected
    backgroundColor: "#FFFFFF",
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  checkedBox: {
    borderColor: "#F58700", // Orange border when checked
    backgroundColor: "#F58700",
  },
  innerCheck: {
    width: 12,
    height: 12,
    borderRadius: 2, // Small rounded corners inside
    backgroundColor: "#FFFFFF",
  },
  itemText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  strikethrough: {
    textDecorationLine: "line-through",
    color: "#A1A1A1", // Dimmed gray when checked
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

import React, { useState, useContext } from "react";
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
import { Ionicons } from "@expo/vector-icons";
import { DayContext } from "../../store/day-context";
import { StapleContext } from "../../store/staplesContext";
const Groceries = ({ navigation }) => {
  const [warningVisible, setWarningVisible] = useState(true);
  const [checkedItems, setCheckedItems] = useState([]);
  const dayCtx = useContext(DayContext);
  const stapleCtx = useContext(StapleContext);
  const toggleItem = (itemName) => {
    if (checkedItems.includes(itemName)) {
      setCheckedItems(checkedItems.filter((i) => i !== itemName));
    } else {
      setCheckedItems([...checkedItems, itemName]);
    }
  };

  const hideWarning = () => setWarningVisible(false);
  const navigateToSearch = () => navigation.navigate("GrocerySearch");
  const shopOnline = () => navigation.navigate("ShopOnline");

  const extractStaples = () => {
    const allIngredients = stapleCtx.ids;

    for (const day of Object.values(dayCtx.mealsByDay)) {
      for (const mealType of Object.keys(day)) {
        day[mealType].forEach((meal) => {
          meal.ingredientsId.forEach((ingredient, index) => {
            const quantity = meal.ingredientQtyId?.[index] || "";
            allIngredients.push({ name: ingredient, quantity });
          });
        });
      }
    }

    // Group by unique name
    const grouped = {};
    for (const item of allIngredients) {
      if (!grouped[item.name]) {
        grouped[item.name] = { ...item };
      }
    }

    return Object.values(grouped);
  };

  const staples = extractStaples();

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Header */}
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

      {/* Grocery List */}
      <View>
        <Text style={styles.sectionTitle}>Produce</Text>

        {staples.length < 1 ? (
          <Text style={styles.emptyText}>No ingredients added yet.</Text>
        ) : (
          <FlatList
            data={staples}
            keyExtractor={(item, index) => `${item.name}-${index}`}
            renderItem={({ item }) => {
              const isChecked = checkedItems.includes(item.name);
              return (
                <View style={styles.listItem}>
                  {/* Checkbox */}
                  <TouchableOpacity
                    onPress={() => toggleItem(item.name)}
                    style={[styles.checkbox, isChecked && styles.checkedBox]}
                  >
                    {isChecked && (
                      <Ionicons name="checkmark" size={18} color="white" />
                    )}
                  </TouchableOpacity>

                  {/* Item Text with Quantity */}
                  <View
                    style={{
                      flexDirection: "row",
                      width: "90%",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={[
                        styles.itemText,
                        isChecked && styles.strikethrough,
                      ]}
                    >
                      {item.name}
                    </Text>
                    <Text style={{ color: "#666666" }}>
                      {item.quantity && `(${item.quantity})`}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        )}
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
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#A1A1A1",
    backgroundColor: "#FFFFFF",
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  checkedBox: {
    borderColor: "#F58700",
    backgroundColor: "#F58700",
  },
  itemText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
    textTransform:"lowercase"
  },
  strikethrough: {
    textDecorationLine: "line-through",
    color: "#A1A1A1",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    color: "#999999",
    fontSize: 16,
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

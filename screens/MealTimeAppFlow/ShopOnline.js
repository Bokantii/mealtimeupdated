import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Linking,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { Colors } from "../../util/Colors";
import { stores } from "../../util/groceryStores";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
const renderStores = ({ item }) => (
  <View style={styles.storeItem}>
    {/* Display store image */}
    <Image source={item.img} style={styles.storeImage} />
    <Text style={styles.storeName}>{item.name}</Text>
    <TouchableOpacity onPress={() => Linking.openURL(item.website)}>
      <Entypo name="chevron-small-right" size={24} color="black" />
    </TouchableOpacity>
  </View>
);
const { width, height } = Dimensions.get("window");
const ShopOnline = () => {
  const availableStores = stores.slice(0, 8);
  const [storesDisplayed, setStoresDisplayed] = useState(availableStores);
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();
  const showAllStores = () => {
    setStoresDisplayed(stores);
  };
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.safecontainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.heading}>Shop Online</Text>
        </View>

        <View style={styles.flatListContainer}>
          <FlatList
            data={storesDisplayed}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderStores}
          />
        </View>
        <Text
          style={{
            color: "#8c8b89",
            fontSize: 18,
            width: "100%",
            marginTop: 10,
            textAlign: "center",
          }}
        >
          Only showing stores available in your country.
        </Text>
        <TouchableOpacity onPress={showAllStores}>
          <Text
            style={{
              backgroundColor: "#fff",
              padding: 20,
              borderWidth: 1,
              borderColor: "#ccc",
              textAlign: "center",
              fontWeight: "600",
              marginTop: 20,
              borderRadius: 10,
            }}
          >
            Show All Stores
          </Text>
        </TouchableOpacity>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontWeight: "600", fontSize: 18 }}>Settings</Text>
          <Text style={{ color: "#a8a6a5", marginTop: 11 }}>
            Access online shopping options quickly with a shortcut button on
            your grocery list.
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "58%",
              justifyContent: "space-between",
              marginTop:10
            }}
          >
            <TouchableOpacity
              style={[styles.checkbox, checked && styles.checked]}
              onPress={() => setChecked(!checked)}
            >
              {checked && <Ionicons name="checkmark" size={18} color="white" />}
            </TouchableOpacity>
            <Text style={{ color: "#191919" }}>
              Show online shopping shortcut
            </Text>
          </View>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text style={{ color: "#666666", width: 300, textAlign: "center" }}>
              How can we make online shopping better for you?
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 150,
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <FontAwesome name="commenting-o" size={24} color="#cccccc" />
              <Text>Give us feedback</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShopOnline;

const styles = StyleSheet.create({
  safecontainer: { flex: 1, backgroundColor: Colors.bodybgColor },

  container: {
    padding: width > 500 ? 20 : 10, // Less padding on smaller screens
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: width > 400 ? 10 : 5,
    textAlign: "center",
  },

  storeItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: width > 400 ? 15 : 10, // Reduce vertical padding on small screens
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    textAlign: "center",
  },

  storeImage: {
    width: width > 400 ? 100 : 80, // Reduce image size for smaller screens
    height: width > 400 ? 100 : 80,
    resizeMode: "contain",
    borderRadius: 20,
  },

  storeName: {
    fontSize: width > 400 ? 18 : 16, // Adjust font size
    fontWeight: "500",
    flex: 1,
    marginLeft: width > 400 ? 10 : 5,
  },

  flatListContainer: {
    height: height > 700 ? 400 : 300, // Reduce height for smaller screens
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRightL: 10,
    backgroundColor: "white",
  },
  checked: {
    backgroundColor: "#f58700",
  },
});

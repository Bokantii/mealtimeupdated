import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextInput,
  Platform,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StaplesContext } from "../../store/staplesContext";
import stapleData from "../../data/stapleData";
import { Colors } from "../../util/Colors";
import { AntDesign } from "@expo/vector-icons";

const GrocerySearch = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredStaples = stapleData.filter((item) =>
    item.staple.toLowerCase().includes(searchQuery.toLowerCase())
  );
 
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <Pressable>
            <AntDesign name="search1" size={24} color="#666666" />
          </Pressable>
          <TextInput
            style={{ paddingLeft: 10, fontSize: 18 }}
            placeholder="Add Something..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <View style={{paddingVertical:40}}>
          <FlatList
            data={filteredStaples}
            keyExtractor={(item, index) => index.toString().toLowerCase()}
            style={{ marginTop: 10 }}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 20,
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderBottomColor: "#cccccc",
                }}
              >
                <TouchableOpacity>
                  <AntDesign name="plus" size={24} color="#666666" />
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
      </View>
    </SafeAreaView>
  );
};

export default GrocerySearch;

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: Colors.bodybgColor,
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#cccccc",
    flexDirection: "row",
    // paddingHorizontal:10,
    // paddingVerical:Platform.OS === "ios" ? 30 : 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    alignItems: "center",
    marginTop: 50,
  },
});

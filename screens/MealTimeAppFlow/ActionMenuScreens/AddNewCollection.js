import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { Colors } from "../../../util/Colors";
const AddNewCollection = ({ route, navigation }) => {
  const [name, setName] = useState("");
  const collections = route?.params?.collections ?? [];
  
 
  function goBack() {
    navigation.goBack();
  }

  function createCollection() {
    if (name.trim() !== "") {
      const updatedCollections = [...collections, name];
      navigation.navigate("SelectCollections", {
        updatedCollections,
      });
    }
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={goBack}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          style={{ marginTop: 60 }}
        />
      </Pressable>
      <Text style={styles.heading}>Add a new collection</Text>
      <View style={styles.collectionName}>
        <Text style={styles.collectionNameText}>Collection's Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
      </View>
      <TouchableOpacity onPress={createCollection}>
        <Text style={styles.create_collection}>Create Collection</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNewCollection;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
    padding: 18,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    fontSize: 18,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#999999",
    marginTop: 4,
  },
  collectionNameText: {
    fontWeight: "bold",
    marginTop: 20,
  },
  create_collection: {
    backgroundColor: Colors.mealTimePrimary,
    fontSize: 17,
    position: "absolute",
    top: 500,
    width: "100%",
    textAlign: "center",
    padding: 16,
    borderRadius: 20,
    fontWeight: "bold",
  },
});


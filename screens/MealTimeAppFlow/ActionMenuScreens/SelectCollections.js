import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "../../../util/Colors";
import { FlatList } from "react-native";
import CollectionsCard from "../../../components/ui/CollectionsCard";

const SelectCollections = ({ route, navigation, title }) => {
  const [collections, setCollections] = useState([]);
  const [imageURL, setImageURL] = useState("");
  // const { imgUrl } = route.params;
  // function addCollections(){

  // }
  const AddNewCollection = () => {
    navigation.navigate("AddNewCollection", {
      collections,
    });
  };
  function goBack() {
    navigation.navigate("Meals");
  }
  // function addToCurrentSelection() {
  //   setImageURL(imgUrl);
  // }
  // const renderCollectionCard = (item) => (
  //   <CollectionsCard key={item} title={item} />
  // );

  useEffect(() => {
    if (route?.params?.updatedCollections) {
      setCollections(route?.params?.updatedCollections);
    }
  }, [route?.params?.updatedCollections]);
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
      <Text style={styles.heading}>Select Collections</Text>
      <Text style={styles.description}>
        Create your own collections for quick access to all your favorites. Add
        your first collection to get started.
      </Text>
      {collections && collections.length > 0 && (
        <FlatList
          data={collections}
          keyExtractor={(item, index) => index.toString()}
          // renderItem={renderCollectionCard}
          renderItem={({ item, index }) => (
            <CollectionsCard title={item} key={item} />
          )}
          style={{ marginTop: 25 }}
        />
      )}

      <TouchableOpacity onPress={AddNewCollection}>
        <View
          style={{
            backgroundColor: "#ffffff",
            color: "black",
            marginTop: 40,
            borderRadius: 20,
            padding: 15,
            textAlign: "center",
            borderWidth: 1,
            borderColor: "#e6e6e6",
            fontWeight: "bold",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <AntDesign name="plus" size={24} color="#999999" />
          <Text
            style={{ paddingHorizontal: 40, fontWeight: "bold", fontSize: 18 }}
          >
            Add New Collection
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.addBtn}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectCollections;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.bodybgColor,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
  description: {
    marginTop: 18,
    color: "#999999",
    fontSize: 17,
  },
  addBtn: {
    textAlign: "center",
    padding: 19,
    backgroundColor: Colors.mealTimePrimary,
    borderRadius: 20,
    marginBottom: 30,
    fontSize: 18,
  },
});


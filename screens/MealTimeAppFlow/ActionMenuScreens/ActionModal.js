import { View, Text, Modal ,StyleSheet,TouchableOpacity} from "react-native";
import React from "react";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import * as Sharing from "expo-sharing";
import { Share } from "react-native";
Sharing.isAvailableAsync();

const ActionModal = ({ modalVisible, setModalVisible}) => {
    const navigation=useNavigation()

  function startCooking() {
    console.log("Started Cooking");
    navigation.navigate("CookingInstructionScreen", {
      instructions,
      numberOfInstructions,
      ingredientsPerStep: ingredientsId, // Pass ingredient list per step
    });
    console.log(
      "numberOfInstructions before navigating:",
      numberOfInstructions
    );
    setModalVisible(false);
  }
  //Navigate to Nutrition Facts
  function navToNutritionFacts() {
    navigation.navigate("NutritionFactsScreen");
    setModalVisible(false);
  }
  //Navigate to Feedback Screen
  function navToFeedBack() {
    navigation.navigate("FeedbackScreen");
    setModalVisible(false);
  }
  //Navigate to Notes
  function navToNotes() {
    navigation.navigate("NotesScreen");
    setModalVisible(false);
  }
  //Navigate to Collections
  function navToCollections() {
    navigation.navigate("SelectCollections");
    setModalVisible(false);
  }
  // const shareMeal = async () => {
  //    try {
  //      const message = `🍽️ Check out this meal!
       
  //      Name: ${title}
  //      Pic:${imgUrl}
  //      Duration: ${duration} minutes
  //      Servings: ${numOfServings}
       
  //      Try it out!`;
   
  //      await Share.share({ message });
  //    } catch (error) {
  //      Alert.alert("Error", "Something went wrong while sharing.");
  //    }
  //  };
  return (
    <Modal transparent={true} visible={modalVisible} animationType="slide">
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={{ alignSelf: "flex-end", padding: 10 }}
          >
            <Text style={{ fontSize: 18 }}>✖</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
            }}
            onPress={navToNutritionFacts}
          >
            <View style={styles.modal_content}>
              <AntDesign name="exclamationcircleo" size={18} color="#999999" />
              <Text style={styles.modalText}>Nutrition Facts</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
            }}
            onPress={startCooking}
          >
            <View style={styles.modal_content}>
              <MaterialCommunityIcons
                name="timer-settings-outline"
                size={24}
                color="#999999"
              />
              <Text style={styles.modalText}>Open Cooking Mode</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
            }}
            onPress={navToNotes}
          >
            <View style={styles.modal_content}>
              <FontAwesome name="sticky-note-o" size={24} color="#999999" />
              <Text style={styles.modalText}>Add Notes</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
            }}
            // onPress={shareMeal}
          >
            <View style={styles.modal_content}>
              <FontAwesome name="mail-forward" size={24} color="#999999" />
              <Text style={styles.modalText}>Share</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
            }}
          >
            <View style={styles.modal_content}>
              <Ionicons name="print-outline" size={24} color="#999999" />
              <Text style={styles.modalText}>Print</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
            }}
            onPress={navToFeedBack}
          >
            <View style={styles.modal_content}>
              <FontAwesome name="commenting-o" size={24} color="#999999" />
              <Text style={styles.modalText}>Feedback For The Chef</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingVertical: 15 }}
            onPress={navToCollections}
          >
            <View style={styles.modal_content}>
              <Feather name="folder-plus" size={24} color="#999999" />
              <Text style={styles.modalText}>Add To Collections</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ActionModal;

const styles=StyleSheet.create({
    modalText: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  modal_content: {
    flexDirection: "row",
    alignItems: "center",
  },
})


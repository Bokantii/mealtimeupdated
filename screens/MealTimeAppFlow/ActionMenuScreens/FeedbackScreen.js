import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ActionModal from "./ActionModal";
import { Colors } from "../../../util/Colors";

const FeedbackScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const ratingStars = [1, 2, 3, 4, 5];

  function sendFeedback() {
    console.log("Sending Feedback");
    if (comment) {
      Alert.alert("Feedback Received!", "Thanks for your feedback!");
      setComment("");
      setRating(0);
      navigation.goBack();
    }else{
      Alert.alert("No comment Yet!","Please leave a comment!")
    }
  }

  function goBack() {
    navigation.goBack();
  }

  function openMenuModal() {
    setModalVisible(true);
    console.log("Modal Menu Opened");
  }

  function navToNutritionFacts() {
    navigation.navigate("NutritionFactsScreen");
    setModalVisible(false);
  }

  function navToNotes() {
    navigation.navigate("NotesScreen");
    setModalVisible(false);
  }

  function navToFeedBack() {
    navigation.navigate("FeedbackScreen");
    setModalVisible(false);
  }

  function navToCollections() {
    navigation.navigate("SelectCollections");
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Pressable style={styles.icon} onPress={goBack}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
          <Text style={styles.heading}>Feedback</Text>
          <Pressable style={styles.icon} onPress={openMenuModal}>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </Pressable>
        </View>
      </View>

      {/* Rating Section */}
      <View>
        <Text style={{ padding: 10, fontWeight: "bold", fontSize: 17 }}>
          How was this recipe?
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10,
            marginTop: 30,
          }}
        >
          {ratingStars.map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
              <FontAwesome
                name="star"
                size={40}
                color={rating >= star ? "orange" : "#e6e6e6"}
                style={{ marginHorizontal: 5 }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Comment Section */}
      <View>
        <Text style={{ padding: 10, fontWeight: "bold", fontSize: 17 }}>
          Comments for the Chef
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10,
            marginTop: 30,
            padding: 15,
          }}
        >
          <TextInput
            style={{
              backgroundColor: "white",
              borderWidth: 1,
              width: "100%",
              padding: 20,
            }}
            value={comment}
            onChangeText={(value) => setComment(value)}
          />
        </View>
      </View>

      {/* Submit Button */}
      <View style={styles.actionBtns}>
        <TouchableOpacity
          style={[styles.save, styles.actionBtn]}
          onPress={sendFeedback}
        >
          <Text style={styles.actionBtnTxt}>Send</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
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
              style={styles.modalOption}
              onPress={navToNutritionFacts}
            >
              <AntDesign name="exclamationcircleo" size={18} color="#999999" />
              <Text style={styles.modalText}>Nutrition Facts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption} onPress={navToNotes}>
              <FontAwesome name="sticky-note-o" size={24} color="#999999" />
              <Text style={styles.modalText}>Add Notes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={navToFeedBack}
            >
              <FontAwesome name="commenting-o" size={24} color="#999999" />
              <Text style={styles.modalText}>Feedback For The Chef</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={navToCollections}
            >
              <Feather name="folder-plus" size={24} color="#999999" />
              <Text style={styles.modalText}>Add To Collections</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bodybgColor,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
    paddingTop: 30,
  },
  headerContent: {
    borderBottomWidth: 1,
    borderBottomColor: "#d6d6d6",
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
  },
  actionBtn: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
  },
  actionBtns: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  actionBtnTxt: {
    width: "100%",
    textAlign: "center",
    color: "black",
    fontWeight: "bold",

    padding: 10,
  },
  save: {
    backgroundColor: Colors.mealTimePrimary,
  },
  modalOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
  },
  modalText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

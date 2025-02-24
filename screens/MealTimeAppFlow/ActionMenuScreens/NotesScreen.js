import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
  Keyboard,
  Alert
} from "react-native";
import React, { useState, useEffect } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ActionModal from "./ActionModal";
import { Colors } from "../../../util/Colors";

const NotesScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  // Save Notes
  const saveNotes = async (newNotes) => {
    try {
      await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
    } catch (error) {
      console.error("Failed to save notes: ", error);
    }
  };

  // Load Notes from Storage
  const loadNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem("notes");
      if (storedNotes) setNotes(JSON.parse(storedNotes));
    } catch (error) {
      console.error("Failed to load notes: ", error);
    }
  };

  // Add Note
  const addNote = () => {
    if (text.trim() === "") {
      Alert.alert("Error", "Note cannot be empty!");
      return;
    }
    const newNotes = [...notes, { id: Date.now().toString(), content: text }];
    setNotes(newNotes);
    saveNotes(newNotes);
    setText("");
  };

  // Delete Note
  const deleteNotes = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
    saveNotes(filteredNotes);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  // Navigation Functions
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
          <Text style={styles.heading}>Notes</Text>
          <Pressable style={styles.icon} onPress={openMenuModal}>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </Pressable>
        </View>
      </View>

      {/* Note Input */}
      <TextInput
        style={styles.noteTextArea}
        placeholder="Take notes..."
        value={text}
        onChangeText={setText}
        multiline
        returnKeyType="done"
        onSubmitEditing={Keyboard.dismiss}
      />

      {/* Notes List */}
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={{ width: "90%" }}>{item.content}</Text>
            <TouchableOpacity onPress={() => deleteNotes(item.id)}>
              <AntDesign name="delete" size={16} color="red" style={{ padding: 4 }} />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Action Buttons */}
      <View style={styles.actionBtns}>
        <TouchableOpacity style={[styles.cancel, styles.actionBtn]} onPress={goBack}>
          <Text style={styles.actionBtnTxt}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.save, styles.actionBtn]} onPress={addNote}>
          <Text style={styles.actionBtnTxt}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Modal Menu */}
      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ alignSelf: "flex-end", padding: 10 }}>
              <Text style={{ fontSize: 18 }}>✖</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption} onPress={navToNutritionFacts}>
              <AntDesign name="exclamationcircleo" size={18} color="#999999" />
              <Text style={styles.modalText}>Nutrition Facts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption} onPress={navToFeedBack}>
              <FontAwesome name="commenting-o" size={24} color="#999999" />
              <Text style={styles.modalText}>Feedback For The Chef</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption} onPress={navToCollections}>
              <Feather name="folder-plus" size={24} color="#999999" />
              <Text style={styles.modalText}>Add To Collections</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NotesScreen;

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
  noteTextArea: {
    paddingHorizontal: 10,
    textAlignVertical: "top",
    padding: 10,
  },
  noteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
    borderColor: "#e6e6e6",
  },
  actionBtn: {
    borderWidth: 1,
    padding: 15,
    width: "48%",
    borderRadius: 15,
  },
  actionBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 20,
  },
  actionBtnTxt: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
  cancel: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  // save: {
  //   backgroundColo
})
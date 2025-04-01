// CustomDayPickerModal.js
import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../util/Colors";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const CustomDayPickerModal = ({ visible, onClose, onSelectDay, meal }) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.backdrop}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Add to Day</Text>
          <Text style={styles.subtitle}>Select the day to add this meal to:</Text>

          {daysOfWeek.map((day) => (
            <TouchableOpacity
              key={day}
              style={styles.dayButton}
              onPress={() => {
                onSelectDay(day, meal);
                onClose();
              }}
            >
              <Text style={styles.dayText}>{day}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomDayPickerModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#2e1a03",
    width: "85%",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.mealTimePrimary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 20,
  },
  dayButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.mealTimePrimary,
    marginVertical: 5,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  dayText: {
    color: Colors.bodybgColor,
    fontWeight: "bold",
    fontSize: 16,
  },
  cancelBtn: {
    marginTop: 20,
  },
  cancelText: {
    color: "#fff",
    textDecorationLine: "underline",
  },
});

import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import PageLayout from "../../components/PageLayout";

export default function ManageUsers({ navigation }) {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [status, setStatus] = useState("");
  const [userIds, setUserIds] = useState("");

  const events = ["Tech Fest", "Cultural Night", "Workshop 2026"];
  const statuses = ["Approved", "Rejected", "Pending"];

  const handleReset = () => setUserIds("");
  const handleSubmit = () => alert("User Status Updated Successfully!");

  return (
    <PageLayout
      title="Handle User Status"
      subtitle="Update user participation status"
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        {/* Event Dropdown */}
        <Text style={styles.label}>Event</Text>
        <View style={styles.inputWrapper}>
          <Ionicons name="calendar-outline" size={20} color="#4F46E5" />
          <Picker
            style={{ flex: 1 }}
            selectedValue={selectedEvent}
            onValueChange={setSelectedEvent}
          >
            <Picker.Item label="-- Select Event --" value="" />
            {events.map((e, i) => (
              <Picker.Item key={i} label={e} value={e} />
            ))}
          </Picker>
        </View>

        {/* Status Dropdown */}
        <Text style={styles.label}>Status</Text>
        <View style={styles.inputWrapper}>
          <Ionicons name="checkmark-circle-outline" size={20} color="#4F46E5" />
          <Picker
            style={{ flex: 1 }}
            selectedValue={status}
            onValueChange={setStatus}
          >
            <Picker.Item label="-- Select Status --" value="" />
            {statuses.map((s, i) => (
              <Picker.Item key={i} label={s} value={s} />
            ))}
          </Picker>
        </View>

        {/* User IDs */}
        <Text style={styles.label}>User IDs</Text>
        <View
          style={[
            styles.inputWrapper,
            { height: 120, alignItems: "flex-start" },
          ]}
        >
          <Ionicons
            name="people-outline"
            size={20}
            color="#4F46E5"
            style={{ marginTop: 14 }}
          />
          <TextInput
            style={{ flex: 1, height: 110 }}
            multiline
            placeholder="Enter multiple User IDs"
            value={userIds}
            onChangeText={setUserIds}
          />
        </View>

        {/* ===== BUTTONS ===== */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#6B7280" }]}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={18} color="#fff" />
            <Text style={styles.btnText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#F59E0B" }]}
            onPress={handleReset}
          >
            <Ionicons name="refresh" size={18} color="#fff" />
            <Text style={styles.btnText}>Reset</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#2563EB" }]}
            onPress={handleSubmit}
          >
            <Ionicons name="checkmark" size={18} color="#fff" />
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  label: { marginTop: 15, fontWeight: "600", color: "#374151" },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C7D2FE",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginTop: 6,
    backgroundColor: "#F8FAFF",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginRight: 10,
  },
  btnText: { color: "#fff", fontWeight: "600", marginLeft: 5 },
});

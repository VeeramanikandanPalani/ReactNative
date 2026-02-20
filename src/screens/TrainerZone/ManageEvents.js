import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import PageLayout from "../../components/PageLayout";

export default function ManageEvents({ navigation }) {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [status, setStatus] = useState("view");

  const [eventData, setEventData] = useState({
    startDate: "",
    endDate: "",
    roleFrom: "",
    roleTo: "",
    location: "",
    facilitator: "",
    topic: "",
    brief: "",
    weightage: "",
  });

  const events = {
    "Tech Fest": {
      startDate: "12 March 2026",
      endDate: "14 March 2026",
      roleFrom: "Trainer",
      roleTo: "Participant",
      location: "Auditorium",
      facilitator: "John Doe",
      topic: "Technology Innovations",
      brief: "Annual technical festival",
      weightage: "5",
    },
    "Cultural Night": {
      startDate: "20 April 2026",
      endDate: "21 April 2026",
      roleFrom: "Organizer",
      roleTo: "Guest",
      location: "Open Ground",
      facilitator: "Jane Smith",
      topic: "Music & Dance",
      brief: "Music and dance performances",
      weightage: "3",
    },
  };

  const handleEventChange = (value) => {
    setSelectedEvent(value);
    if (events[value]) setEventData(events[value]);
  };

  const handleChange = (field, value) => {
    setEventData({ ...eventData, [field]: value });
  };

  const handleReset = () => {
    if (events[selectedEvent]) setEventData(events[selectedEvent]);
  };

  const handleSubmit = () => {
    alert("Event Updated Successfully!");
  };

  return (
    <PageLayout title="Manage Events" subtitle="View or edit event details">
      <ScrollView keyboardShouldPersistTaps="handled">
        {/* Event Dropdown */}
        <Text style={styles.label}>Select Event</Text>
        <View style={styles.inputWrapper}>
          <Ionicons name="calendar-outline" size={20} color="#4F46E5" />
          <Picker
            style={{ flex: 1 }}
            selectedValue={selectedEvent}
            onValueChange={handleEventChange}
          >
            <Picker.Item label="-- Select Event --" value="" />
            {Object.keys(events).map((e) => (
              <Picker.Item key={e} label={e} value={e} />
            ))}
          </Picker>
        </View>

        {/* Status Dropdown */}
        <Text style={styles.label}>Status</Text>
        <View style={styles.inputWrapper}>
          <MaterialIcons
            name={status === "edit" ? "edit" : "visibility"}
            size={20}
            color={status === "edit" ? "#10B981" : "#6B7280"}
          />
          <Picker
            style={{ flex: 1 }}
            selectedValue={status}
            onValueChange={(val) => setStatus(val)}
          >
            <Picker.Item label="View" value="view" />
            <Picker.Item label="Edit" value="edit" />
          </Picker>
        </View>

        {selectedEvent !== "" && (
          <>
            <Text style={styles.label}>Start Date</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="time-outline" size={20} color="#4F46E5" />
              <TextInput
                style={styles.input}
                value={eventData.startDate}
                editable={status === "edit"}
                onChangeText={(text) => handleChange("startDate", text)}
              />
            </View>

            <Text style={styles.label}>End Date</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="time-outline" size={20} color="#4F46E5" />
              <TextInput
                style={styles.input}
                value={eventData.endDate}
                editable={status === "edit"}
                onChangeText={(text) => handleChange("endDate", text)}
              />
            </View>

            <Text style={styles.label}>Role From</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="person-outline" size={20} color="#4F46E5" />
              <TextInput
                style={styles.input}
                value={eventData.roleFrom}
                editable={status === "edit"}
                onChangeText={(text) => handleChange("roleFrom", text)}
              />
            </View>

            <Text style={styles.label}>Role To</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="person-outline" size={20} color="#4F46E5" />
              <TextInput
                style={styles.input}
                value={eventData.roleTo}
                editable={status === "edit"}
                onChangeText={(text) => handleChange("roleTo", text)}
              />
            </View>

            <Text style={styles.label}>Location</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="location-outline" size={20} color="#4F46E5" />
              <TextInput
                style={styles.input}
                value={eventData.location}
                editable={status === "edit"}
                onChangeText={(text) => handleChange("location", text)}
              />
            </View>

            <Text style={styles.label}>Facilitator</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="people-outline" size={20} color="#4F46E5" />
              <TextInput
                style={styles.input}
                value={eventData.facilitator}
                editable={status === "edit"}
                onChangeText={(text) => handleChange("facilitator", text)}
              />
            </View>

            <Text style={styles.label}>Topic</Text>
            <View style={styles.inputWrapper}>
              <FontAwesome5 name="book" size={18} color="#4F46E5" />
              <TextInput
                style={styles.input}
                value={eventData.topic}
                editable={status === "edit"}
                onChangeText={(text) => handleChange("topic", text)}
              />
            </View>

            <Text style={styles.label}>Brief</Text>
            <View
              style={[
                styles.inputWrapper,
                { height: 80, alignItems: "flex-start" },
              ]}
            >
              <FontAwesome5
                name="align-left"
                size={18}
                color="#4F46E5"
                style={{ marginTop: 12 }}
              />
              <TextInput
                style={{ flex: 1, height: 70 }}
                value={eventData.brief}
                editable={status === "edit"}
                multiline
                onChangeText={(text) => handleChange("brief", text)}
              />
            </View>

            <Text style={styles.label}>Weightage</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="assessment" size={20} color="#4F46E5" />
              <TextInput
                style={styles.input}
                value={eventData.weightage}
                editable={status === "edit"}
                onChangeText={(text) => handleChange("weightage", text)}
              />
            </View>
          </>
        )}

        {/* Buttons */}
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
  input: { flex: 1, paddingVertical: 10 },
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

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
import ContentCard from "../../components/ContentCard";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EEF2FF" }}>
      <View style={{ flex: 1, backgroundColor: "#EEF2FF" }}>
        {/* Header */}
        <PageLayout
          title="Manage Events"
          subtitle="View or edit event details"
          image={{
            uri: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
          }}
        />

        {/* Main scrollable content */}
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: 20, paddingBottom: 50 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Event Dropdown */}
          <ContentCard>
            <Text style={styles.label}>Select Event</Text>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="calendar-outline"
                size={20}
                color="#4F46E5"
                style={{ marginRight: 8 }}
              />
              <Picker
                style={{ flex: 1 }}
                selectedValue={selectedEvent}
                onValueChange={handleEventChange}
              >
                <Picker.Item label="Select Event" value="" />
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
                style={{ marginRight: 8 }}
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
          </ContentCard>
          {/* Event fields */}
          {selectedEvent !== "" && (
            <>
              {[
                {
                  label: "Start Date",
                  field: "startDate",
                  icon: (
                    <Ionicons name="time-outline" size={20} color="#4F46E5" />
                  ),
                },
                {
                  label: "End Date",
                  field: "endDate",
                  icon: (
                    <Ionicons name="time-outline" size={20} color="#4F46E5" />
                  ),
                },
                {
                  label: "Role From",
                  field: "roleFrom",
                  icon: (
                    <Ionicons name="person-outline" size={20} color="#4F46E5" />
                  ),
                },
                {
                  label: "Role To",
                  field: "roleTo",
                  icon: (
                    <Ionicons name="person-outline" size={20} color="#4F46E5" />
                  ),
                },
                {
                  label: "Location",
                  field: "location",
                  icon: (
                    <Ionicons
                      name="location-outline"
                      size={20}
                      color="#4F46E5"
                    />
                  ),
                },
                {
                  label: "Facilitator",
                  field: "facilitator",
                  icon: (
                    <Ionicons name="people-outline" size={20} color="#4F46E5" />
                  ),
                },
                {
                  label: "Topic",
                  field: "topic",
                  icon: <FontAwesome5 name="book" size={18} color="#4F46E5" />,
                },
                {
                  label: "Weightage",
                  field: "weightage",
                  icon: (
                    <MaterialIcons
                      name="assessment"
                      size={20}
                      color="#4F46E5"
                    />
                  ),
                },
              ].map((item) => (
                <View key={item.field}>
                  <Text style={styles.label}>{item.label}</Text>
                  <View style={styles.inputWrapper}>
                    {React.cloneElement(item.icon, {
                      style: { marginRight: 8 },
                    })}
                    <TextInput
                      style={styles.input}
                      value={eventData[item.field]}
                      editable={status === "edit"}
                      onChangeText={(text) => handleChange(item.field, text)}
                    />
                  </View>
                </View>
              ))}

              {/* Brief (multiline) */}
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
                  style={{ marginTop: 12, marginRight: 8 }}
                />
                <TextInput
                  style={{ flex: 1, height: 70, textAlignVertical: "top" }}
                  value={eventData.brief}
                  editable={status === "edit"}
                  multiline
                  onChangeText={(text) => handleChange("brief", text)}
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  label: {
    marginTop: 15,
    fontWeight: "600",
    color: "#374151",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C7D2FE",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginTop: 6,
    backgroundColor: "#F8FAFF",
    height: 40,
  },
  input: {
    flex: 1,
    paddingVertical: 0,
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
    flexWrap: "wrap",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginLeft: 4,
    marginTop: 5,
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 4,
    fontSize: 13,
  },
});

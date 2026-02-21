import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import PageLayout from "../../components/PageLayout";
import ContentCard from "../../components/ContentCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Nomination({ navigation }) {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [empIds, setEmpIds] = useState("");

  const events = ["Tech Fest", "Cultural Night", "Workshop 2026"];

  const handleReset = () => setEmpIds("");
  const handleSubmit = () => alert("Nomination Submitted Successfully!");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EEF2FF" }}>
      <View style={{ flex: 1, backgroundColor: "#EEF2FF" }}>
        {/* Header */}
        <PageLayout
          title="Nomination"
          subtitle="Trainer nominates employees"
          image={{
            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          }}
        />

        {/* Scrollable content */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{ padding: 20, paddingBottom: 50 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <ContentCard>
              {/* Event Dropdown */}
              <Text style={styles.label}>Select Event</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="calendar-outline" size={20} color="#4F46E5" />
                <Picker
                  style={{ flex: 1 }}
                  selectedValue={selectedEvent}
                  onValueChange={setSelectedEvent}
                >
                  <Picker.Item label="Select Event" value="" />
                  {events.map((event, i) => (
                    <Picker.Item key={i} label={event} value={event} />
                  ))}
                </Picker>
              </View>

              {/* Employee IDs */}
              <Text style={styles.label}>Employee IDs</Text>
              <View
                style={[
                  styles.inputWrapper,
                  { height: 120, alignItems: "flex-start" },
                ]}
              >
                <TextInput
                  style={{
                    flex: 1,
                    height: 110,
                    fontSize: 14,
                    textAlignVertical: "top",
                  }}
                  multiline
                  placeholder="Enter multiple employee IDs"
                  value={empIds}
                  onChangeText={setEmpIds}
                />
              </View>

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
            </ContentCard>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  label: {
    marginTop: 12,
    fontWeight: "600",
    color: "#374151",
    fontSize: 14,
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
    marginLeft: 6,
    marginTop: 5,
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 4,
    fontSize: 13,
  },
});

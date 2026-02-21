import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import PageLayout from "../../components/PageLayout";
import ContentCard from "../../components/ContentCard";

export default function Attendance({ navigation }) {
  const events = ["Tech Fest", "Cultural Night", "Workshop 2026"];
  const statuses = ["Approved", "Pending", "Rejected"];

  const enrolledUsers = [
    { id: "1", name: "John Doe", topic: "React Native" },
    { id: "2", name: "Jane Smith", topic: "Node.js" },
    { id: "3", name: "Alice Johnson", topic: "Python" },
    { id: "4", name: "Bob Williams", topic: "DevOps" },
    { id: "5", name: "Mary Brown", topic: "AI/ML" },
  ];

  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [checkedUsers, setCheckedUsers] = useState([]);
  const [comment, setComment] = useState("");

  // Checkbox toggle
  const toggleCheck = (id) => {
    setCheckedUsers((prev) =>
      prev.includes(id) ? prev.filter((u) => u !== id) : [...prev, id],
    );
  };

  const checkAll = () => setCheckedUsers(enrolledUsers.map((u) => u.id));
  const uncheckAll = () => setCheckedUsers([]);
  const handleReset = () => {
    uncheckAll();
    setSelectedEvent("");
    setSelectedStatus("");
    setComment("");
  };

  const handleSubmit = () => {
    alert(
      `Attendance marked for ${checkedUsers.length} users.\nStatus: ${selectedStatus}${
        selectedStatus === "Rejected" ? "\nComment: " + comment : ""
      }`,
    );
  };

  const renderItem = ({ item }) => {
    const isChecked = checkedUsers.includes(item.id);
    return (
      <View style={styles.userRow}>
        <TouchableOpacity onPress={() => toggleCheck(item.id)}>
          <Ionicons
            name={isChecked ? "checkbox" : "square-outline"}
            size={24}
            color="#4F46E5"
          />
        </TouchableOpacity>
        <Text style={styles.userText}>{item.name}</Text>
        <Text style={styles.topicText}>{item.topic}</Text>
      </View>
    );
  };

  const showList = selectedEvent !== "" && selectedStatus !== "";

  return (
    <View style={{ flex: 1, backgroundColor: "#EEF2FF" }}>
      {/* Header */}
      <PageLayout
        title="Attendance"
        subtitle="Mark attendance for enrolled users"
        image={{ uri: "https://cdn-icons-png.flaticon.com/512/190/190411.png" }}
      />

      {/* Scrollable Form */}
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
            <Text style={styles.label}>Event</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="calendar-outline" size={20} color="#4F46E5" />
              <Picker
                style={{ flex: 1 }}
                selectedValue={selectedEvent}
                onValueChange={setSelectedEvent}
              >
                <Picker.Item label="Select Event" value="" />
                {events.map((e, i) => (
                  <Picker.Item key={i} label={e} value={e} />
                ))}
              </Picker>
            </View>

            {/* Status Dropdown */}
            <Text style={styles.label}>Status</Text>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="checkmark-circle-outline"
                size={20}
                color="#4F46E5"
              />
              <Picker
                style={{ flex: 1 }}
                selectedValue={selectedStatus}
                onValueChange={setSelectedStatus}
              >
                <Picker.Item label="Select Status" value="" />
                {statuses.map((s, i) => (
                  <Picker.Item key={i} label={s} value={s} />
                ))}
              </Picker>
            </View>

            {/* Comment box for Rejected */}
            {showList && selectedStatus === "Rejected" && (
              <>
                <Text style={styles.label}>Rejection Comment</Text>
                <View
                  style={[
                    styles.inputWrapper,
                    { height: 100, alignItems: "flex-start" },
                  ]}
                >
                  <TextInput
                    style={{ flex: 1, height: 90, paddingTop: 10 }}
                    multiline
                    placeholder="Enter reason for rejection"
                    value={comment}
                    onChangeText={setComment}
                  />
                </View>
              </>
            )}

            {/* Check All / User List */}
            {showList && (
              <>
                <View style={styles.checkAllContainer}>
                  <TouchableOpacity
                    style={styles.checkAllBtn}
                    onPress={checkAll}
                  >
                    <Text style={styles.checkAllText}>Check All</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.checkAllBtn}
                    onPress={uncheckAll}
                  >
                    <Text style={styles.checkAllText}>Uncheck All</Text>
                  </TouchableOpacity>
                </View>

                <FlatList
                  data={enrolledUsers}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  scrollEnabled={false}
                  style={{ marginTop: 10 }}
                />

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
              </>
            )}
          </ContentCard>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
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
    height: 45,
  },
  checkAllContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  checkAllBtn: {
    backgroundColor: "#4F46E5",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  checkAllText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C7D2FE",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 40,
    marginTop: 6,
    backgroundColor: "#F8FAFF",
  },
  userText: {
    flex: 1,
    marginLeft: 10,
    fontWeight: "500",
    fontSize: 14,
  },
  topicText: {
    flex: 1,
    textAlign: "right",
    color: "#374151",
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

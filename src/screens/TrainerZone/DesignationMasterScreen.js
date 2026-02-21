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
import { Ionicons } from "@expo/vector-icons";
import PageLayout from "../../components/PageLayout";
import ContentCard from "../../components/ContentCard";

export default function DesignationMaster({ navigation }) {
  const [designationCode, setDesignationCode] = useState("");
  const [designationName, setDesignationName] = useState("");

  const handleSubmit = () => {
    if (!designationCode.trim() || !designationName.trim()) {
      alert("Please fill all fields");
      return;
    }
    alert("Designation Saved Successfully!");
  };

  const handleReset = () => {
    setDesignationCode("");
    setDesignationName("");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#EEF2FF" }}>
      {/* Header */}
      <PageLayout
        title="Designation Master"
        subtitle="Create and manage designations"
        image={{
          uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        }}
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
            {/* Designation Code */}
            <Text style={styles.label}>Designation Code</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Enter Designation Code"
                value={designationCode}
                onChangeText={setDesignationCode}
              />
            </View>

            {/* Designation Name */}
            <Text style={styles.label}>Designation Name</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Enter Designation Name"
                value={designationName}
                onChangeText={setDesignationName}
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

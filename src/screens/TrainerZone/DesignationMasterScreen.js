import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* ===== TOP IMAGE SECTION ===== */}
        <View style={styles.headerSection}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            }}
            style={styles.headerImage}
          />
          <Text style={styles.headerTitle}>Designation Master</Text>
          <Text style={styles.headerSubtitle}>
            Create and manage designations
          </Text>
        </View>

        {/* ===== FORM CARD ===== */}
        <View style={styles.card}>
          <Text style={styles.label}>Designation Code</Text>
          <View style={styles.inputWrapper}>
            <Ionicons
              name="code-outline"
              size={20}
              color="#4F46E5"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Designation Code"
              value={designationCode}
              onChangeText={setDesignationCode}
            />
          </View>

          <Text style={styles.label}>Designation Name</Text>
          <View style={styles.inputWrapper}>
            <MaterialIcons
              name="badge"
              size={20}
              color="#4F46E5"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Designation Name"
              value={designationName}
              onChangeText={setDesignationName}
            />
          </View>
        </View>
      </ScrollView>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF2FF",
  },

  /* ===== HEADER SECTION ===== */
  headerSection: {
    backgroundColor: "#4F46E5",
    paddingTop: 60,
    paddingBottom: 80,
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  headerImage: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },

  headerSubtitle: {
    fontSize: 14,
    color: "#E0E7FF",
    marginTop: 5,
  },

  /* ===== CARD ===== */
  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: -50,
    padding: 25,
    borderRadius: 25,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 15,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 15,
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
  },

  icon: {
    marginRight: 8,
  },

  input: {
    flex: 1,
    paddingVertical: 10,
  },

  /* ===== BUTTONS ===== */
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    flexDirection: "row",
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginLeft: 10,
  },

  btnText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 5,
  },
});

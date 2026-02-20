import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import PageLayout from "../../components/PageLayout";

export default function MakePostScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [attachment, setAttachment] = useState(null);

  // Reset form
  const handleReset = () => {
    setTitle("");
    setContent("");
    setAttachment(null);
  };

  // Submit form
  const handleSubmit = () => {
    if (!title || !content) {
      Alert.alert("Validation", "Title and Content are required!");
      return;
    }
    Alert.alert("Success", "Post submitted successfully!");
    handleReset();
  };

  // Placeholder for attachment picker
  const handleAttachment = () => {
    // You can integrate expo-document-picker or image picker here
    Alert.alert("Attachment", "Pick a file functionality goes here");
    setAttachment("SampleFile.pdf");
  };

  return (
    <PageLayout title="Create Post" subtitle="Trainer can create new post">
      <ScrollView keyboardShouldPersistTaps="handled">
        {/* Title */}
        <Text style={styles.label}>Title</Text>
        <View style={styles.inputWrapper}>
          <Ionicons name="pencil-outline" size={20} color="#4F46E5" />
          <TextInput
            style={styles.input}
            placeholder="Enter post title"
            value={title}
            onChangeText={setTitle}
          />
        </View>

        {/* Content */}
        <Text style={styles.label}>Content</Text>
        <View
          style={[
            styles.inputWrapper,
            { height: 120, alignItems: "flex-start" },
          ]}
        >
          <MaterialIcons
            name="description"
            size={20}
            color="#4F46E5"
            style={{ marginTop: 10 }}
          />
          <TextInput
            style={[styles.input, { height: 110 }]}
            placeholder="Write your post content here"
            multiline
            value={content}
            onChangeText={setContent}
          />
        </View>

        {/* Attachment */}
        <Text style={styles.label}>Attachment</Text>
        <TouchableOpacity
          style={styles.attachmentBtn}
          onPress={handleAttachment}
        >
          <Ionicons name="attach-outline" size={20} color="#fff" />
          <Text style={styles.attachmentText}>
            {attachment ? attachment : "Add Attachment"}
          </Text>
        </TouchableOpacity>

        {/* Action Buttons */}
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
  input: { flex: 1, padding: 10 },
  attachmentBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4F46E5",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginTop: 6,
  },
  attachmentText: { color: "#fff", fontWeight: "600", marginLeft: 8 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 40,
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

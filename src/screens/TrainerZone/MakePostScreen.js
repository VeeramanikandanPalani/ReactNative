import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PageLayout from "../../components/PageLayout";

export default function MakePostScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [attachment, setAttachment] = useState(null);

  const handleReset = () => {
    setTitle("");
    setContent("");
    setAttachment(null);
  };

  const handleSubmit = () => {
    if (!title || !content) {
      Alert.alert("Validation", "Title and Content are required!");
      return;
    }
    Alert.alert("Success", "Post submitted successfully!");
    handleReset();
  };

  const handleAttachment = () => {
    Alert.alert("Attachment", "Pick a file functionality goes here");
    setAttachment("SampleFile.pdf");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#EEF2FF" }}>
      {/* Header */}
      <PageLayout
        title="Create Post"
        subtitle="Trainer can create new post"
        image={{
          uri: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
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
          {/* Title */}
          <Text style={styles.label}>Title</Text>
          <View style={styles.inputWrapper}>
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
              <Ionicons name="arrow-back" size={16} color="#fff" />
              <Text style={styles.btnText}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#F59E0B" }]}
              onPress={handleReset}
            >
              <Ionicons name="refresh" size={16} color="#fff" />
              <Text style={styles.btnText}>Reset</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#2563EB" }]}
              onPress={handleSubmit}
            >
              <Ionicons name="checkmark" size={16} color="#fff" />
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
          </View>
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
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 14,
  },
  attachmentBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3555e2",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginTop: 6,
  },
  attachmentText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 8,
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
    marginBottom: 30,
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

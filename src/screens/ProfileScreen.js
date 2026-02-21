import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileLayout from "../components/ProfileLayout";

const USER_PROFILE = {
  name: "Dr. John Doe",
  designation: "Infection Control Specialist",
  completedTrainings: 12,
  avatar:
    "https://images.unsplash.com/photo-1603415526960-f77fbeac03c1?crop=entropy&cs=tinysrgb&fit=max&w=200&q=60",
};

const USER_POSTS = [
  {
    id: "1",
    title: "Completed Infection Control Course",
    message: "🎉 I just completed the Infection Control course!",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    likes: 5,
    comments: ["Congrats!", "Well done!"],
  },
  {
    id: "2",
    title: "New Mindfulness Routine",
    message: "🧘 Started practicing mindfulness for 10 minutes daily.",
    image: null,
    likes: 2,
    comments: ["Awesome!", "Keep it up!"],
  },
];

export default function ProfileScreen() {
  const [posts, setPosts] = useState(USER_POSTS);
  const [commentText, setCommentText] = useState({});
  const [showComments, setShowComments] = useState({});

  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item,
      ),
    );
  };

  const handleAddComment = (id) => {
    if (!commentText[id]) return;
    setPosts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, comments: [...item.comments, commentText[id]] }
          : item,
      ),
    );
    setCommentText({ ...commentText, [id]: "" });
    setShowComments({ ...showComments, [id]: true });
  };

  const toggleComments = (id) => {
    setShowComments((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderItem = ({ item }) => {
    const commentsVisible = showComments[item.id] || false;

    return (
      <View style={styles.card}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postMessage}>{item.message}</Text>
        {item.image && (
          <Image source={{ uri: item.image }} style={styles.postImage} />
        )}

        <View style={styles.actionRow}>
          <TouchableOpacity
            onPress={() => handleLike(item.id)}
            style={styles.actionBtn}
          >
            <Text style={styles.likeText}>❤️ {item.likes} Likes</Text>
          </TouchableOpacity>
          {item.comments.length > 0 && (
            <TouchableOpacity
              onPress={() => toggleComments(item.id)}
              style={styles.actionBtn}
            >
              <Text style={styles.commentText}>
                💬 {item.comments.length} Comments
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {commentsVisible &&
          item.comments.map((comment, idx) => (
            <Text key={idx} style={styles.comment}>
              💬 {comment}
            </Text>
          ))}

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Add comment..."
            value={commentText[item.id] || ""}
            onChangeText={(text) =>
              setCommentText({ ...commentText, [item.id]: text })
            }
          />
          <TouchableOpacity onPress={() => handleAddComment(item.id)}>
            <Text style={styles.postBtn}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EEF2FF" }}>
      {/* Page Header */}
      <ProfileLayout
        title="Profile"
        subtitle=""
        image={{
          uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        }}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          {/* Profile Info */}
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: USER_PROFILE.avatar }}
              style={styles.avatar}
            />
            <View style={styles.profileDetails}>
              <Text style={styles.profileName}>{USER_PROFILE.name}</Text>
              <Text style={styles.profileDesignation}>
                {USER_PROFILE.designation}
              </Text>
              <Text style={styles.profileTrainings}>
                🏆 Completed Trainings: {USER_PROFILE.completedTrainings}
              </Text>
            </View>
          </View>

          {/* User Posts */}
          <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            scrollEnabled={false}
            contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 10 }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 14,
    padding: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#2A9D8F",
  },
  profileDetails: {
    marginLeft: 12,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1D3557",
    marginBottom: 2,
  },
  profileDesignation: {
    fontSize: 14,
    color: "#6c757d",
    marginBottom: 2,
  },
  profileTrainings: {
    fontSize: 13,
    color: "#2A9D8F",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 14,
    elevation: 2,
  },
  postTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#1D3557",
  },
  postMessage: {
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 20,
    color: "#264653",
  },
  postImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 8,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  likeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#E63946",
  },
  commentText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#2A9D8F",
  },
  comment: {
    fontSize: 13,
    marginBottom: 3,
    color: "#444",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#C7D2FE",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 13,
    backgroundColor: "#F8FAFF",
  },
  postBtn: {
    marginLeft: 10,
    fontWeight: "600",
    color: "#2563EB",
    fontSize: 13,
  },
});

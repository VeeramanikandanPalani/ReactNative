import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const USER_PROFILE = {
  name: "Dr. John Doe",
  email: "john.doe@example.com",
  avatar:
    "https://images.unsplash.com/photo-1603415526960-f77fbeac03c1?crop=entropy&cs=tinysrgb&fit=max&w=200&q=60",
};

const USER_POSTS = [
  {
    id: "1",
    title: "Completed Infection Control Course",
    message: "🎉 I just completed the Infection Control course!",
    image:
      "https://images.unsplash.com/photo-1588776814546-7e4db1bbd5ff?crop=entropy&cs=tinysrgb&fit=max&w=800&q=60",
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

const ProfileScreen = () => {
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
    setShowComments({ ...showComments, [id]: true }); // show comments after adding
  };

  const toggleComments = (id) => {
    setShowComments((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderItem = ({ item }) => {
    const commentsVisible = showComments[item.id] || false;

    return (
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
        {item.image && (
          <Image source={{ uri: item.image }} style={styles.image} />
        )}

        {/* Inline Like & Comment */}
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => handleLike(item.id)}
          >
            <Text style={styles.likeText}>❤️ {item.likes} Like</Text>
          </TouchableOpacity>

          {item.comments.length > 0 && (
            <TouchableOpacity
              style={styles.actionBtn}
              onPress={() => toggleComments(item.id)}
            >
              <Text style={styles.commentToggle}>
                💬 {item.comments.length} Comments
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Comments Section */}
        {commentsVisible &&
          item.comments.map((comment, index) => (
            <Text key={index} style={styles.comment}>
              💬 {comment}
            </Text>
          ))}

        {/* Add Comment */}
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Add comment..."
            style={styles.input}
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
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#EAF6F9" />

      {/* Profile Info */}
      <View style={styles.profileHeader}>
        <Image source={{ uri: USER_PROFILE.avatar }} style={styles.avatar} />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.profileName}>{USER_PROFILE.name}</Text>
          <Text style={styles.profileEmail}>{USER_PROFILE.email}</Text>
        </View>
      </View>

      {/* User Posts */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#EAF6F9",
  },

  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#cfd8dc",
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2A9D8F",
  },

  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1D3557",
  },

  profileEmail: {
    fontSize: 14,
    color: "#6c757d",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 15,
    marginHorizontal: 16,
    marginBottom: 14,
    elevation: 3,
  },

  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 4,
  },

  message: {
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 20,
  },

  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 8,
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  actionBtn: {
    marginRight: 20,
  },

  likeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#E63946",
  },

  commentToggle: {
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
    borderColor: "#cfd8dc",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 13,
    backgroundColor: "#F8FBFC",
  },

  postBtn: {
    marginLeft: 10,
    fontWeight: "bold",
    color: "#2A9D8F",
  },
});

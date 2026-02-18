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

const DATA = [
  {
    id: "1",
    postedBy: "Admin",
    time: "1 hr ago",
    title: "Course Completed",
    message:
      "🎉 Congratulations to Dr. John for completing Infection Control Course!",
    image:
      "https://images.unsplash.com/photo-1588776814546-7e4db1bbd5ff?crop=entropy&cs=tinysrgb&fit=max&w=800&q=60",
    likes: 4,
    comments: ["Well done!", "Congrats!"],
  },
  {
    id: "2",
    postedBy: "Healthcare Team",
    time: "3 hrs ago",
    title: "New Healthcare Course",
    message:
      "🩺 New Patient Safety & Clinical Excellence course now available.",
    image: null, // No image
    likes: 2,
    comments: ["Looking forward to this course."],
  },
  {
    id: "3",
    postedBy: "Dr. Smith",
    time: "8 hrs ago",
    title: "Mindfulness Reminder",
    message:
      "🧘 Take a 5-minute break and do a mindfulness exercise. Your mental health matters.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c44334c?crop=entropy&cs=tinysrgb&fit=max&w=800&q=60",
    likes: 1,
    comments: ["Great reminder!"],
  },
];

const FeedsScreen = () => {
  const [feeds, setFeeds] = useState(DATA);
  const [commentText, setCommentText] = useState({});
  const [showComments, setShowComments] = useState({}); // Track toggle per post

  const handleLike = (id) => {
    setFeeds((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item,
      ),
    );
  };

  const handleAddComment = (id) => {
    if (!commentText[id]) return;
    setFeeds((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, comments: [...item.comments, commentText[id]] }
          : item,
      ),
    );
    setCommentText({ ...commentText, [id]: "" });
    setShowComments({ ...showComments, [id]: true }); // Show comments after adding
  };

  const toggleComments = (id) => {
    setShowComments((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderItem = ({ item }) => {
    const firstLetter = item.postedBy?.[0]?.toUpperCase() || "U";
    const commentsVisible = showComments[item.id] || false;

    return (
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{firstLetter}</Text>
          </View>
          <View>
            <Text style={styles.postedBy}>{item.postedBy}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>

        {/* Content */}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
        {item.image && (
          <Image source={{ uri: item.image }} style={styles.image} />
        )}

        {/* Like & Comment Row */}
        <View style={styles.actionRow}>
          {/* Like Button */}
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => handleLike(item.id)}
          >
            <Text style={styles.likeText}>❤️ {item.likes} Like</Text>
          </TouchableOpacity>

          {/* Toggle Comments */}
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

        {/* Add Comment Input */}
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
      <View style={styles.titleContainer}>
        <Text style={styles.pageTitle}>Gurucool Feeds</Text>
      </View>

      <FlatList
        data={feeds}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default FeedsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#EAF6F9",
  },

  titleContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  pageTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1D3557",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 15,
    marginHorizontal: 16,
    marginBottom: 14,
    elevation: 3,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#2A9D8F",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  avatarText: {
    color: "#fff",
    fontWeight: "bold",
  },

  postedBy: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#264653",
  },

  time: {
    fontSize: 12,
    color: "#6c757d",
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

  likeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#E63946",
    marginBottom: 6,
  },

  commentToggle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#2A9D8F",
    marginBottom: 6,
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
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },

  actionBtn: {
    marginRight: 20,
  },
});

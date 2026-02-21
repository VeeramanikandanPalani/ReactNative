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
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Modal from "react-native-modal";
import ImageViewer from "react-native-image-zoom-viewer";
import VideoPlayer from "react-native-video-controls";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

// Logged-in user
const USER = { name: "Veera" };

// Sample feed data
const DATA = [
  {
    id: "1",
    postedBy: "Veeramanikandan Pazhani",
    time: "1 hr ago",
    title: "Course Completed",
    message:
      "🎉 Congratulations to Dr. John for completing Infection Control Course!",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    video: null,
    likes: 4,
    views: 120,
    comments: ["Well done!", "Congrats!"],
  },
  {
    id: "2",
    postedBy: "Healthcare Team",
    time: "3 hrs ago",
    title: "New Healthcare Course",
    message:
      "🩺 New Patient Safety & Clinical Excellence course now available.",
    image: null,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 2,
    views: 80,
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
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    video: null,
    likes: 1,
    views: 60,
    comments: ["Great reminder!"],
  },
];

const FeedsScreen = () => {
  const [feeds, setFeeds] = useState(DATA);
  const [searchText, setSearchText] = useState("");
  const [commentText, setCommentText] = useState({});
  const [showComments, setShowComments] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [activeMedia, setActiveMedia] = useState(null);

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
    setShowComments({ ...showComments, [id]: true });
  };

  const toggleComments = (id) => {
    setShowComments((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFeeds = feeds.filter(
    (item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.postedBy.toLowerCase().includes(searchText.toLowerCase()),
  );

  const renderItem = ({ item }) => {
    const firstLetter = item.postedBy?.[0]?.toUpperCase() || "U";
    const commentsVisible = showComments[item.id] || false;

    return (
      <View style={styles.cardWrapper}>
        <View style={styles.card}>
          {/* Header */}
          <View style={styles.cardHeader}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{firstLetter}</Text>
            </View>
            <View style={styles.postedByContainer}>
              <Text style={styles.postedBy}>{item.postedBy}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>

          {/* Title & Message */}
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.message}>{item.message}</Text>

          {/* Image or Video */}
          {item.image && (
            <TouchableOpacity
              onPress={() => {
                setActiveMedia({ type: "image", uri: item.image });
                setModalVisible(true);
              }}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
            </TouchableOpacity>
          )}

          {item.video && (
            <TouchableOpacity
              onPress={() => {
                setActiveMedia({ type: "video", uri: item.video });
                setModalVisible(true);
              }}
            >
              <View style={styles.videoPlaceholder}>
                <Icon name="play-circle-outline" size={50} color="#fff" />
                <Text style={{ color: "#fff", marginTop: 5 }}>Video</Text>
              </View>
            </TouchableOpacity>
          )}

          {/* Stats row */}
          <View style={styles.statsRow}>
            <Text style={styles.statText}>❤️ {item.likes} Likes</Text>
            <Text style={styles.statText}>👁️ {item.views} Views</Text>
            <Text style={styles.statText}>
              💬 {item.comments.length} Comments
            </Text>
          </View>

          {/* Comments */}
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
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <StatusBar barStyle="light-content" backgroundColor="#2A9D8F" />

      {/* Header */}
      {/* Header */}
      <LinearGradient
        colors={["#0F4C75", "#3282B8", "#BBE1FA"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.topHeader}
      >
        <View style={styles.headerRow}>
          <View style={styles.GHeader}>
            <View style={styles.iconCircle}>
              <Icon name="medical-bag" size={26} color="#fff" />
            </View>

            <Text style={styles.pageTitle}>Gurucool Feeds</Text>
          </View>

          <View style={styles.userBadge}>
            <Text style={styles.usernameText}>{USER.name}</Text>
          </View>
        </View>

        {/* Highlighted Search Bar */}
        <View style={styles.searchWrapper}>
          <Icon name="magnify" size={20} color="#0F4C75" />
          <TextInput
            placeholder="Search by title or author..."
            placeholderTextColor="#5f6f7a"
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </LinearGradient>

      {/* Feed List */}
      <FlatList
        data={filteredFeeds}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Modal for zoomable image/video */}
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={{ margin: 0 }}
      >
        {activeMedia?.type === "image" && (
          <ImageViewer
            imageUrls={[{ url: activeMedia.uri }]}
            enableSwipeDown
            onSwipeDown={() => setModalVisible(false)}
            backgroundColor="#000"
          />
        )}
        {activeMedia?.type === "video" && (
          <VideoPlayer
            source={{ uri: activeMedia.uri }}
            onBack={() => setModalVisible(false)}
            fullscreen
            style={{ width: width, height: width * (9 / 16) }}
          />
        )}
      </Modal>
    </SafeAreaView>
  );
};

export default FeedsScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#EAF6F9" },

  topHeader: {
    paddingTop: 20,
    paddingBottom: 25,
    paddingHorizontal: 18,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 10,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  GHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconCircle: {
    backgroundColor: "#1B262C",
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
    elevation: 6,
  },

  pageTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "900",
    letterSpacing: 1,
  },

  userBadge: {
    backgroundColor: "#ffffff30",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  usernameText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },

  /* Highlighted Search */
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    fontWeight: "600",
    color: "#0F4C75",
  },

  cardWrapper: {
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 14,
    backgroundColor: "#fff",
  },
  card: { borderRadius: 14, padding: 12, backgroundColor: "#fff" },
  cardHeader: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F4A261",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  avatarText: { color: "#fff", fontWeight: "bold" },
  postedByContainer: { justifyContent: "center" },
  postedBy: { fontWeight: "bold", color: "#264653", fontSize: 14 },
  time: { fontSize: 12, color: "#6c757d" },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#1D3557",
  },
  message: { fontSize: 14, color: "#264653", marginBottom: 8, lineHeight: 20 },
  image: { width: "100%", height: 180, borderRadius: 10, marginBottom: 8 },
  videoPlaceholder: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderTopWidth: 0.5,
    borderTopColor: "#ccc",
    marginBottom: 6,
  },
  statText: { fontSize: 13, color: "#2A9D8F", fontWeight: "600" },
  comment: { fontSize: 13, marginBottom: 3, color: "#444" },
  inputRow: { flexDirection: "row", alignItems: "center", marginTop: 6 },
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
  postBtn: { marginLeft: 10, fontWeight: "bold", color: "#2A9D8F" },
});

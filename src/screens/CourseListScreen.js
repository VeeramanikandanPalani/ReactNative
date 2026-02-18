import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../../styles/courseStyles";

const coursesData = [
  {
    id: "1",
    title: "React Native Basics",
    dateTime: "2026-02-20 10:00 AM",
    participants: 25,
    location: "Online",
    description:
      "Learn the fundamentals of React Native including components, state, and props.",
  },
  {
    id: "2",
    title: "Advanced JavaScript",
    dateTime: "2026-02-22 2:00 PM",
    participants: 30,
    location: "Online",
    description:
      "Deep dive into ES6+, closures, async programming, and advanced concepts.",
  },
  {
    id: "3",
    title: "UI/UX Design Fundamentals",
    dateTime: "2026-02-25 11:00 AM",
    participants: 20,
    location: "Online",
    description:
      "Understand the basics of UI/UX design, wireframing, and prototyping.",
  },
  {
    id: "4",
    title: "Python for Data Science",
    dateTime: "2026-02-28 1:00 PM",
    participants: 40,
    location: "Online",
    description:
      "Learn Python for data analysis, visualization, and machine learning basics.",
  },
];

export default function CourseListScreen({ navigation }) {
  const [enrolled, setEnrolled] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(coursesData);

  // Track which course IDs are expanded
  const [expandedCourses, setExpandedCourses] = useState([]);

  const handleEnroll = (id) => {
    if (!enrolled.includes(id)) {
      setEnrolled([...enrolled, id]);
      Alert.alert("Success", "You have successfully enrolled!");
    } else {
      Alert.alert("Info", "You are already enrolled.");
    }
  };

  const handleSearch = () => {
    const filtered = coursesData.filter((course) =>
      course.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredCourses(filtered);
  };

  const toggleDescription = (id) => {
    if (expandedCourses.includes(id)) {
      setExpandedCourses(expandedCourses.filter((cid) => cid !== id));
    } else {
      setExpandedCourses([...expandedCourses, id]);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* Title + Enroll inline */}
      <View style={styles.titleRow}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity
          style={styles.enrollButton}
          onPress={() => handleEnroll(item.id)}
        >
          <Text style={styles.enrollText}>
            {enrolled.includes(item.id) ? "Enrolled" : "Enroll"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Other course details */}
      <Text style={styles.detail}>📅 {item.dateTime}</Text>
      <Text style={styles.detail}>👥 {item.participants} Participants</Text>
      <Text style={styles.detail}>📍 {item.location}</Text>

      {/* View button */}
      <TouchableOpacity
        style={styles.viewButton}
        onPress={() => toggleDescription(item.id)}
      >
        <Text style={styles.viewButtonText}>
          {expandedCourses.includes(item.id) ? "Hide" : "View"}
        </Text>
      </TouchableOpacity>

      {/* Description shown only if expanded */}
      {expandedCourses.includes(item.id) && (
        <Text style={styles.description}>{item.description}</Text>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search courses..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity
          style={styles.searchIconButton}
          onPress={handleSearch}
        >
          <MaterialIcons name="search" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

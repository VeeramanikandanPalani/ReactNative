import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  Animated,
  ScrollView,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import PageLayout from "../components/PageLayout";

const coursesData = [
  {
    id: "1",
    title: "React Native Basics",
    facilitator: "John Doe",
    dateTime: "2026-02-20 10:00 AM",
    participants: 25,
    location: "Online",
    description:
      "Learn the fundamentals of React Native including components, state, and props.",
  },
  {
    id: "2",
    title: "Advanced JavaScript",
    facilitator: "Jane Smith",
    dateTime: "2026-02-22 2:00 PM",
    participants: 30,
    location: "Online",
    description:
      "Deep dive into ES6+, closures, async programming, and advanced concepts.",
  },
  {
    id: "3",
    title: "UI/UX Design Fundamentals",
    facilitator: "Alice Johnson",
    dateTime: "2026-02-25 11:00 AM",
    participants: 20,
    location: "Online",
    description:
      "Understand the basics of UI/UX design, wireframing, and prototyping.",
  },
  {
    id: "4",
    title: "Python for Data Science",
    facilitator: "Bob Williams",
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
  const [expandedCourses, setExpandedCourses] = useState([]);

  // Animation values for each course
  const animValues = useRef(
    coursesData.map(() => new Animated.Value(0)),
  ).current;

  useEffect(() => {
    animValues.forEach((anim, index) => {
      Animated.timing(anim, {
        toValue: 1,
        duration: 500 + index * 100,
        useNativeDriver: true,
      }).start();
    });
  }, []);

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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EEF2FF" }}>
      <PageLayout
        title="Gurucool Courses"
        subtitle="Available courses for trainers"
        image={{
          uri: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
        }}
      />
      <View style={styles.MainCard}>
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
        {/* Course Cards */}
        <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
          {filteredCourses.map((item, index) => {
            const animStyle = {
              opacity: animValues[index],
              transform: [
                {
                  translateY: animValues[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  }),
                },
              ],
            };

            return (
              <Animated.View key={item.id} style={[styles.card, animStyle]}>
                {/* Title + Enroll */}
                <View style={styles.titleRow}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.title} numberOfLines={2}>
                      {item.title}
                    </Text>
                    <Text style={styles.facilitator}>
                      Facilitator: {item.facilitator || "TBA"}
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={styles.enrollButton}
                    onPress={() => handleEnroll(item.id)}
                  >
                    <Ionicons name="school-outline" size={16} color="#fff" />
                    <Text style={styles.enrollText}>
                      {enrolled.includes(item.id) ? "Enrolled" : "Enroll"}
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Course Details */}
                <Text style={styles.detail}>📅 {item.dateTime}</Text>
                <Text style={styles.detail}>
                  👥 {item.participants} Participants
                </Text>
                <Text style={styles.detail}>📍 {item.location}</Text>

                {/* Description Toggle */}
                <TouchableOpacity
                  style={styles.viewButton}
                  onPress={() => toggleDescription(item.id)}
                >
                  <Ionicons
                    name={expandedCourses.includes(item.id) ? "eye-off" : "eye"}
                    size={16}
                    color="#2563EB"
                  />
                  <Text style={styles.viewButtonText}>
                    {expandedCourses.includes(item.id) ? "Hide" : "View"}
                  </Text>
                </TouchableOpacity>

                {expandedCourses.includes(item.id) && (
                  <Text style={styles.description}>{item.description}</Text>
                )}
              </Animated.View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  MainCard: {
    padding: 20,
    borderRadius: 25,
    backgroundColor: "#fff",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: "95%", // full width minus margin
    alignSelf: "center",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start", // enroll button aligns to top
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  facilitator: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 2,
  },
  enrollButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563EB",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  enrollText: { color: "#fff", fontWeight: "600", marginLeft: 4 },
  detail: { fontSize: 13, color: "#374151", marginBottom: 3 },
  viewButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  viewButtonText: { color: "#2563EB", fontWeight: "600", marginLeft: 4 },
  description: { fontSize: 14, color: "#4B5563", marginTop: 6 },
  searchContainer: {
    flexDirection: "row",
    margin: 12,
    borderRadius: 12,
    overflow: "hidden",
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#E0F2FE",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    color: "#111827",
  },
  searchIconButton: {
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
};

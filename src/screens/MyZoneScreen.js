import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import ProfileLayout from "../components/ProfileLayout";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const TILE_WIDTH = (width - 20 * 3) / 2;

const MENU_ITEMS = [
  {
    id: "1",
    title: "Manage Events",
    icon: <Ionicons name="calendar-outline" size={28} color="#fff" />,
    bgColor: "#2A9D8F",
    screen: "ManageEventsScreen",
  },
  {
    id: "2",
    title: "Manage Users",
    icon: <MaterialIcons name="people-outline" size={28} color="#fff" />,
    bgColor: "#E76F51",
    screen: "ManageUsersScreen",
  },
  {
    id: "3",
    title: "Nomination",
    icon: <FontAwesome5 name="user-check" size={26} color="#fff" />,
    bgColor: "#264653",
    screen: "NominationScreen",
  },
  {
    id: "4",
    title: "Designation Master",
    icon: <Ionicons name="business-outline" size={28} color="#fff" />,
    bgColor: "#F4A261",
    screen: "DesignationMasterScreen",
  },
  {
    id: "5",
    title: "Attendance",
    icon: <Ionicons name="checkbox-outline" size={28} color="#fff" />,
    bgColor: "#8AB17D",
    screen: "AttendanceScreen",
  },
  {
    id: "6",
    title: "Make Post",
    icon: <Ionicons name="create-outline" size={28} color="#fff" />,
    bgColor: "#FF6B6B",
    screen: "MakePostScreen",
  },
];

export default function MyZoneScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EEF2FF" }}>
      <View style={styles.container}>
        {/* Header */}
        <ProfileLayout
          title="Trainer Zone"
          subtitle="Manage your admin activities"
          image={{
            uri: "https://img.icons8.com/color/48/000000/worker-male.png",
          }}
        />

        {/* Content Below Header */}
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.grid}>
            {MENU_ITEMS.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[styles.tile, { backgroundColor: item.bgColor }]}
                activeOpacity={0.85}
                onPress={() => navigation.navigate(item.screen)}
              >
                {item.icon}
                <Text style={styles.tileText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF6F9",
  },

  contentContainer: {
    padding: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  tile: {
    width: TILE_WIDTH,
    height: 120,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
  },

  tileText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
});

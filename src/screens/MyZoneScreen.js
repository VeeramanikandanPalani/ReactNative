import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const TILE_WIDTH = (width - 16 * 3) / 2; // 2 tiles per row with 16px padding

// Menu items with corresponding screen names
const MENU_ITEMS = [
  {
    id: "1",
    title: "Manage Events",
    icon: <Ionicons name="calendar-outline" size={32} color="#fff" />,
    bgColor: "#2A9D8F",
    screen: "ManageEventsScreen",
  },
  {
    id: "2",
    title: "Manage Users",
    icon: <MaterialIcons name="people-outline" size={32} color="#fff" />,
    bgColor: "#E76F51",
    screen: "ManageUsersScreen",
  },
  {
    id: "3",
    title: "Nomination",
    icon: <FontAwesome5 name="user-check" size={32} color="#fff" />,
    bgColor: "#264653",
    screen: "NominationScreen",
  },
  {
    id: "4",
    title: "Designation Master",
    icon: <Ionicons name="business-outline" size={32} color="#fff" />,
    bgColor: "#F4A261",
    screen: "DesignationMasterScreen",
  },
  {
    id: "5",
    title: "Attendance",
    icon: <Ionicons name="checkbox-outline" size={32} color="#fff" />,
    bgColor: "#8AB17D",
    screen: "AttendanceScreen",
  },
  {
    id: "6",
    title: "Make Post",
    icon: <Ionicons name="create-outline" size={32} color="#fff" />,
    bgColor: "#FF6B6B",
    screen: "MakePostScreen",
  },
];

const MyZoneScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.tile, { backgroundColor: item.bgColor }]}
      onPress={() => navigation.navigate(item.screen)}
      activeOpacity={0.8}
    >
      {item.icon}
      <Text style={styles.tileText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2A9D8F" />
      <Text style={styles.pageTitle}>My Zone</Text>

      <FlatList
        data={MENU_ITEMS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={{ justifyContent: "center", marginBottom: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default MyZoneScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#EAF6F9",
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1D3557",
    paddingHorizontal: 16,
    paddingTop: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  listContainer: {
    paddingHorizontal: 16,
    alignItems: "center",
    paddingBottom: 20,
  },
  tile: {
    width: TILE_WIDTH,
    height: 120,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  tileText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
});

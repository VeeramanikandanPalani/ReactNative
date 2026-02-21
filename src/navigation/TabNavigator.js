import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import CourseListScreen from "../screens/CourseListScreen";
import Feeds from "../screens/Feeds";
import ProfileScreen from "../screens/ProfileScreen";
import MyZoneScreen from "../screens/MyZoneScreen";
import MyZoneStack from "./MyZoneStack";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // hide header
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Courses") {
            iconName = "book-outline";
          } else if (route.name === "TrainerZone") {
            iconName = "grid-outline";
          } else if (route.name === "Profile") {
            iconName = "person-outline";
          } else if (route.name === "Feeds") {
            iconName = "newspaper-outline";
          }

          // Return the icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Feeds" component={Feeds} />
      <Tab.Screen name="TrainerZone" component={MyZoneStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Courses" component={CourseListScreen} />
    </Tab.Navigator>
  );
}

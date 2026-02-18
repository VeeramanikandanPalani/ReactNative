import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import CourseListScreen from "../screens/CourseListScreen";

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
          } else if (route.name === "MyZone") {
            iconName = "rocket-outline";
          } else if (route.name === "Profile") {
            iconName = "person-outline";
          }

          // Return the icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Courses" component={CourseListScreen} />
      <Tab.Screen name="MyZone" component={CourseListScreen} />
      <Tab.Screen name="Profile" component={CourseListScreen} />
    </Tab.Navigator>
  );
}

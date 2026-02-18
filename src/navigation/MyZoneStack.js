// navigation/MyZoneStack.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyZoneScreen from "../screens/MyZoneScreen";
import Nomination from "../screens/TrainerZone/Nomination";
import Attendance from "../screens/TrainerZone/Attendance";
import MakePostScreen from "../screens/TrainerZone/MakePostScreen";
import DesignationMasterScreen from "../screens/TrainerZone/DesignationMasterScreen";
import ManageEvents from "../screens/TrainerZone/ManageEvents";
import ManageUsers from "../screens/TrainerZone/ManageUsers";

const Stack = createNativeStackNavigator();

export default function MyZoneStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="MyZoneHome"
        component={MyZoneScreen}
        options={{ title: "My Zone" }}
      />
      <Stack.Screen
        name="ManageEventsScreen"
        component={ManageEvents}
        options={{ title: "Manage Events" }}
      />
      <Stack.Screen
        name="ManageUsersScreen"
        component={ManageUsers}
        options={{ title: "Manage Users" }}
      />
      <Stack.Screen
        name="NominationScreen"
        component={Nomination}
        options={{ title: "Nomination" }}
      />
      <Stack.Screen
        name="DesignationMasterScreen"
        component={DesignationMasterScreen}
        options={{ title: "Designation Master" }}
      />
      <Stack.Screen
        name="AttendanceScreen"
        component={Attendance}
        options={{ title: "Attendance" }}
      />
      <Stack.Screen
        name="MakePostScreen"
        component={MakePostScreen}
        options={{ title: "Make Post" }}
      />
    </Stack.Navigator>
  );
}

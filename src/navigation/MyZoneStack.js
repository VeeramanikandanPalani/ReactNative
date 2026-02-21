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
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyZoneHome" component={MyZoneScreen} />
      <Stack.Screen
        name="ManageEventsScreen"
        component={ManageEvents}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="ManageUsersScreen"
        component={ManageUsers}
        options={{ title: "" }}
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

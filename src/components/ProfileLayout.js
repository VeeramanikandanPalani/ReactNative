import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RotatingSettingsIcon from "./RotatingSettingsIcon ";

export default function ProfileLayout({ title, subtitle, children, image }) {
  return (
    <View style={styles.container}>
      {/* ===== HEADER ===== */}
      <LinearGradient
        colors={["#0F4C75", "#1B6CA8", "#4F46E5"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerSection}
      >
        <RotatingSettingsIcon image={image} />
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.headerSubtitle}>{subtitle}</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    paddingTop: 20,
    paddingBottom: 30,
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#E0E7FF",
    marginTop: 5,
  },
});

import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function PageLayout({ title, subtitle, children }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* ===== HEADER SECTION ===== */}
        <View style={styles.headerSection}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            }}
            style={styles.headerImage}
          />
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.headerSubtitle}>{subtitle}</Text>
        </View>

        {/* ===== FLOATING CARD ===== */}
        <View style={styles.card}>{children}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF2FF",
  },

  headerSection: {
    backgroundColor: "#4F46E5",
    paddingTop: 60,
    paddingBottom: 80,
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  headerImage: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },

  headerSubtitle: {
    fontSize: 14,
    color: "#E0E7FF",
    marginTop: 5,
  },

  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: -50,
    padding: 25,
    borderRadius: 25,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 15,
  },
});

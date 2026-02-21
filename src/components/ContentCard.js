import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

// get screen width
const screenWidth = Dimensions.get("window").width;

export default function ContentCard({ title, subtitle, children }) {
  const cardWidth = screenWidth - 40; // safe inside component

  return (
    <View style={[styles.card, { width: cardWidth }]}>
      {title && <Text style={styles.title}>{title}</Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 20,
    marginVertical: 10,

    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    // Android Shadow
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#1D3557",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
  },
});

import React from "react";
import { Image, StyleSheet } from "react-native";

export default function RotatingSettingsIcon({ image }) {
  return (
    <Image
      source={{
        uri: image
          ? image.uri
          : "https://cdn-icons-png.flaticon.com/512/2099/2099058.png",
      }}
      style={styles.icon}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 80,
    height: 80,
  },
});

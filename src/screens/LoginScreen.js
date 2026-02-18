import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../../styles/styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errorObj = {};
    let valid = true;

    if (!email) {
      errorObj.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorObj.email = "Invalid email format";
      valid = false;
    }

    if (!password) {
      errorObj.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      errorObj.password = "Minimum 6 characters required";
      valid = false;
    }

    setErrors(errorObj);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      navigation.navigate("MainTabs");
    }
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
        }}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.centerContainer}>
            <View style={styles.card}>
              {/* Header inside card */}
              <Text style={styles.headerTitle}>GURUCOOL</Text>

              {/* Email */}
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#666"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
                <MaterialIcons name="email" size={22} color="#1565C0" />
              </View>
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              {/* Password */}
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#666"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
                <MaterialIcons name="lock" size={22} color="#1565C0" />
              </View>
              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              {/* Buttons */}
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.resetButton}
                  onPress={handleReset}
                >
                  <Text style={styles.resetText}>Reset</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={handleSubmit}
                >
                  <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

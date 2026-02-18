import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    elevation: 8,
    minHeight: 300, // prevents blinking layout shift
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
    color: "#1565C0",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 8,
    paddingHorizontal: 10,
    height: 45,
  },

  input: {
    flex: 1,
  },

  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 8,
  },

  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  resetButton: {
    flex: 1,
    backgroundColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginRight: 5,
    alignItems: "center",
  },

  submitButton: {
    flex: 1,
    backgroundColor: "#1565C0",
    padding: 12,
    borderRadius: 8,
    marginLeft: 5,
    alignItems: "center",
  },

  resetText: {
    fontWeight: "bold",
  },

  submitText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

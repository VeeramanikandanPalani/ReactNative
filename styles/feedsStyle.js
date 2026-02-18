import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  message: {
    fontSize: 15,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    marginBottom: 10,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  like: {
    fontSize: 16,
    color: "red",
  },
  commentSection: {
    marginTop: 5,
  },
  commentText: {
    fontSize: 14,
    marginBottom: 4,
  },
  commentInputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginRight: 5,
  },
  postButton: {
    color: "blue",
    fontWeight: "bold",
  },
});

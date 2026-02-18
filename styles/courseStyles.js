import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5", // light gray background
  },

  /* Search Bar */
  searchContainer: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },

  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 45,
    backgroundColor: "#fff",
  },

  searchIconButton: {
    marginLeft: 10,
    backgroundColor: "#1565C0",
    height: 45,
    width: 45,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  /* Course Card */
  card: {
    backgroundColor: "#fff", // card color
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 15,
    borderRadius: 12,
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  /* Title + Enroll inline */
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    flexShrink: 1, // wrap long title
  },

  enrollButton: {
    backgroundColor: "green",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  enrollText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },

  detail: {
    fontSize: 14,
    marginBottom: 3,
    color: "#555",
  },

  listContent: {
    paddingBottom: 20,
  },
  viewButton: {
    marginTop: 8,
    alignSelf: "flex-start",
    backgroundColor: "#1565C0", // blue
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  viewButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },

  description: {
    marginTop: 8,
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  /* Modal styles */
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  modalDescription: {
    fontSize: 14,
    marginBottom: 20,
  },

  modalCloseButton: {
    backgroundColor: "#1565C0",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  modalCloseText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

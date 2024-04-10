import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  productItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 15,
    flexDirection: "row",
    marginHorizontal: 5,
    padding: 10,
    elevation: 4,
    overflow: "hidden",
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 5,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: "#666",
  },
  cartContainer: {
    flexDirection: "row",
    fontSize: 20,
    paddingHorizontal: 10,
    backgroundColor: "#c80000",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#fff",
  },
  addToCart: {
    fontSize: 20,
    color: "#fff",
  },
  itemCount: {
    fontSize: 16,
    marginHorizontal: 5,
    color: "#fff",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  checkoutButton: {
    backgroundColor: "#c80000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

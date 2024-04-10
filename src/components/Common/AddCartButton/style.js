import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: "row",
    fontSize: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#c80000",
    flex: 1
  },
  addToCart: {
    fontSize: 20,
    color: "#c80000",
  },
  itemCount: {
    fontSize: 16,
    marginHorizontal: 5,
    color: "#c80000",
  },
});

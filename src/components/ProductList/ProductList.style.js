import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  productItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 15,
    width: (windowWidth - 40) / 2,
    marginHorizontal: 5,
    padding: 10,
    elevation: 4,
    overflow: "hidden",
  },
  productImageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontSize: 8,
    fontWeight: "bold",
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: "column",
  },
  productPrice: {
    fontSize: 14,
    color: "#666",
    marginVertical: 5,
  },
  cartContainer: {
    flexDirection: "row",
    fontSize: 20,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "grey",
    marginBottom: 10
  },
  searchBar: {
    backgroundColor: "#f3f4f9",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f3f4f9",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  addToCartButton: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#FFF2E7",
    justifyContent: "center",
    alignItems: "center",
  },
  cartButtonText: {
    color: "#FFA451",
    fontSize: 20,
  },
  paginationContainer: {
    flexDirection: "row",
  },
});

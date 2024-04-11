import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from "react-native";
import { styles } from "./ProductList.style";
import { productsArray } from "../../lib/helper";
import AddCartButton from "../Common/AddCartButton/AddCartButton";

const ProductList = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    try {
      const requestBody = {
        page: currentPage.toString(),
        pageSize: "10",
        sort: {
          creationDateSortOption: "DESC",
        },
      };

      const response = await fetch(
        "https://catalog-management-system-dev-ak3ogf6zea-uc.a.run.app/cms/filter/product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();
      const productsWithIds = data.products.map((product, index) => ({
        ...product,
        id: index + 1,
        imageUrl:
          productsArray.find((item) => item.id === index + 1)?.imageUrl || null,
      }));
      setProducts(productsWithIds);
      setTotalPages(parseInt(data.totalPages));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  let sortedProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleProductPress = (item) => {
    navigation.navigate("ProductDetails", { item });
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleProductPress(item)}>
        <View style={styles.productItem}>
          <View style={styles.productImageContainer}>
            <Image source={item.imageUrl} style={styles.productImage} />
          </View>
          <View style={styles.productContent}>
            <Text style={{ fontSize: 10, color: "grey" }}>
              {item.category_level_1}
            </Text>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.productName}
            >
              {item.name}
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>₹{item.mrp.mrp}</Text>
              <View style={styles.cartContainer}>
                <Text style={{ color: "grey" }}>1 Kg</Text>
                <Text style={{ color: "grey" }}>⌄</Text>
              </View>
              <AddCartButton item={item} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          clearButtonMode="while-editing"
        />
        <View style={styles.paginationContainer}>
          <Button
            title="<"
            onPress={handlePreviousPage}
            disabled={currentPage === 1}
          />
          <Button
            title=">"
            onPress={handleNextPage}
            disabled={currentPage === totalPages}
          />
        </View>
      </View>
      <FlatList
        data={sortedProducts}
        renderItem={renderItem}
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        numColumns={2}
      />
    </View>
  );
};

export default ProductList;

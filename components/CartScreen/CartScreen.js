// CartScreen.js

import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { CartContext } from "../../src/context/CartContext";
import { styles } from "./CartScreen.style";

const CartScreen = () => {
  const { addToCart, cartItems } = useContext(CartContext);

  const handleAddToCart = (item, quantity) => {
    addToCart(item, quantity);
  };

  const getProductCount = (itemId) => {
    const cartItem = cartItems.find((item) => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.mrp.mrp * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const renderItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={item.imageUrl} style={styles.productImage} />
      <View>
        <View style={{ width: 150 }}>
          <Text style={styles.productName} numberOfLines={2}>
            {item.name}
          </Text>
          <View>
            <Text style={styles.productPrice}>₹{item.mrp.mrp}</Text>
          </View>
        </View>
        <View style={styles.cartContainer}>
          <TouchableOpacity onPress={() => handleAddToCart(item, -1)}>
            <Text style={styles.addToCart}>-</Text>
          </TouchableOpacity>
          <Text style={styles.itemCount}>{getProductCount(item.id)}</Text>
          <TouchableOpacity onPress={() => handleAddToCart(item, 1)}>
            <Text style={styles.addToCart}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.bottomContainer}>
        <View style={{ flexDirection: "column" }}>
          <Text>Total</Text>
          <Text style={styles.totalText}>₹{getTotalPrice()}</Text>
        </View>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => handleCheckout()}
        >
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

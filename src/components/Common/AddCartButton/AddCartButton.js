import react, { useContext } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./style";
import { CartContext } from "../../../src/context/CartContext";

export default AddCartButton = ({item}) => {
  const { addToCart, cartItems } = useContext(CartContext);

  const getProductCount = (item) => {
    const cartItem = cartItems.find((cartItem) => cartItem.name === item.name);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleAddToCart = (item, quantity) => 
  {
    addToCart(item, quantity);
  };
  return (
    <View style={styles.cartContainer}>
      <TouchableOpacity onPress={() => handleAddToCart(item, -1)}>
        <Text style={styles.addToCart}>-</Text>
      </TouchableOpacity>
      <Text style={styles.itemCount}>
        {getProductCount(item) === 0 ? (
          <Text style={{ fontSize: 10 }}>Add to Cart</Text>
        ) : (
          getProductCount(item)
        )}
      </Text>
      <TouchableOpacity onPress={() => handleAddToCart(item, 1)}>
        <Text style={styles.addToCart}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

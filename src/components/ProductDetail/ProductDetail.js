import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./ProductDetails.style";
import AddCartButton from "../Common/AddCartButton/AddCartButton";
import {productsArray} from '../../lib/helper'

const ProductDetails = ({ route, navigation }) => {
  const { item, result } = route.params;

  const handleCartPress = () => {
    navigation.navigate("Basket");
  };


  const productCategory = result?.substring(0, 5);
  const quantity = result?.substring(6, 8);
  const price = result?.substring(9);

  const imageUrl = result ? productsArray[0].imageUrl : item.imageUrl;

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image source={imageUrl} style={styles.image} />
      </View>
      {result ? (
        <View>
          <Text style={styles.name}>Product Category : {productCategory}</Text>
          <Text style={styles.price}>{quantity}</Text>
          <Text style={styles.price}>₹{price}</Text>
        </View>
      ) : (
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>₹{item.mrp.mrp}</Text>
          <View style={styles.cartContainer}><Text style={{color: 'grey'}}>1 Kg</Text><Text style={{ color: 'grey'}}>⌄</Text></View>
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <AddCartButton item={item} />
        <TouchableOpacity
          onPress={handleCartPress}
          style={{
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            marginHorizontal: 5,
          }}
        >
          <Text>Move to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;

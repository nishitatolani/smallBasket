// CustomHeader.js

import React, { useContext } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { CartContext } from "../../../context/CartContext";

const Header = ({ route }) => {
  const { cartItemCount } = useContext(CartContext);
  const navigation = useNavigation();

  const handleCartPress = () => {
    navigation.navigate("Basket");
  };

  const handleScanBarcode = () => {
    navigation.navigate("BarcodeScanner");
  };

  const shouldRenderCartIcon = route.name === "ProductList";

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
      }}
    >
      {shouldRenderCartIcon && (
        <TouchableOpacity
          onPress={handleScanBarcode}
          style={{ marginHorizontal: 10 }}
        >
          <Icon name="barcode" size={25} />
        </TouchableOpacity>
      )}
      {shouldRenderCartIcon && (
        <TouchableOpacity onPress={handleCartPress}>
          <Image
            source={require("../../../assets/cart.png")}
            style={{ width: 25, height: 25, resizeMode: "contain" }}
          />
        </TouchableOpacity>
      )}
      {cartItemCount > 0 && (
        <View
          style={{
            backgroundColor: "#c80000",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: 50,
            bottom: 20,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 10,
              fontWeight: "bold",
              paddingHorizontal: 5,
            }}
          >
            {cartItemCount}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Header;

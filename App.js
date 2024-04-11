// App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from './src/components/CartScreen/CartScreen'
import ProductList from "./src/components/ProductList/ProductList";
import ProductDetails from "./src/components/ProductDetail/ProductDetail";
import BarcodeScanner from "./src/components/BarcodeScanner/BarcodeScanner";
import Header from "./src/components/Common/Header/Header";
import LoginScreen from "./src/components/LoginScreen/Login";
import { CartProvider } from "./src/context/CartContext";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <CartProvider>
        <Stack.Navigator
          screenOptions={({ route }) => ({
            headerTitleAlign: "center",
            headerRight: () => <Header route={route} />,
            headerTintColor: route.name === "Basket" ? "white" : "black",
            headerStyle: {
              backgroundColor: route.name === "Basket" ? "#c80000" : "white",
            },
          })}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="Basket" component={CartScreen} />
          <Stack.Screen name="BarcodeScanner" component={BarcodeScanner} />
        </Stack.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
};

export default App;

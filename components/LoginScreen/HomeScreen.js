import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Login";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Small Basket</Text>
      <LoginScreen navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
});

export default HomeScreen;

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Camera } from "expo-camera";

const BarcodeScanner = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera
        onBarCodeScanned={(data) => {
          navigation.navigate("ProductDetails", { result: data.data });
        }}
        barCodeScannerSettings={{
          barCodeTypes: ["qr"],
        }}
        style={styles.camera}
        type={Camera.Constants.Type.back}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});

export default BarcodeScanner;

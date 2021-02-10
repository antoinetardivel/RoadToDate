import * as React from "react";
import { View, StyleSheet, Image } from "react-native";

const BackgroundImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../img/background.jpg")}
        style={styles.image}
        blurRadius={4}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "center",
  },
  image: {
    position: "absolute",
    resizeMode: "contain",
    justifyContent: "center",
  },
});

export default BackgroundImage;

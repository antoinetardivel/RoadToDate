import * as React from "react";
import { View, StyleSheet, Image } from "react-native";

import imageBG from "../img/backgroundOpti.jpg";
// const imageBG = require('../img/backgroundOpti.jpg')

const BackgroundImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={imageBG}
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

import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

const MainMenuButton = () => {
  return <View style={styles.menubox}>
    <Text style={styles.menutext}>MENU PRINCIPAL</Text>
  </View>;
};

const styles = StyleSheet.create({
  menubox: {
    position: "absolute",
    left: 20,
    top: 20,
    height: 55,
    width: 55,
    borderRadius: 14,
    borderStyle: "solid",
    borderColor: "#682B16",
    borderWidth: 2,
    backgroundColor: "#8F2F30",
  },
  menutext: {
    position: "absolute",
    left: 20,
    top: 20,
    height: 44,
    width: 163,
    borderRadius: 14,
    borderStyle: "solid",
    borderColor: "#682B16",
    borderWidth: 2,
    backgroundColor: "#8F2F30",
  },
});

export default MainMenuButton;

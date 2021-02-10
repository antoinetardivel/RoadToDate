import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

const MainMenuButton = () => {
  return <View style={styles.menubox}>
    <Text style={styles.menutext}>MENU PRINCIPAL</Text>
  </View>;
};

const styles = StyleSheet.create({
  menubox: {
    alignItems: "center",
    justifyContent: "center",
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
  menutext: {
    color: "#FEE6C0",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default MainMenuButton;

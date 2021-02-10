import * as React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

export interface Props {
  navigation: any;
}

const MainMenuButton = ({ navigation }: Props) => {
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate("Home")}
      style={styles.menubox}
    >
      <Text style={styles.menutext}>MENU PRINCIPAL</Text>
    </TouchableHighlight>
  );
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

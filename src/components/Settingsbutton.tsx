import * as React from "react";
import { View, StyleSheet } from "react-native";

const SettingsButton = () => {
  return <View style={styles.settingsbox}></View>;
};

const styles = StyleSheet.create({
  settingsbox: {
    position: "absolute",
    right: 20,
    top: 20,
    height: 55,
    width: 55,
    borderRadius: 14,
    borderStyle: "solid",
    borderColor: "#682B16",
    borderWidth: 2,
    backgroundColor: "#8F2F30",
  },
});

export default SettingsButton;

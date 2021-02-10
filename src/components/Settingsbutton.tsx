import * as React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";

export interface Props {
  navigation: any;
}

const SettingsButton = ({ navigation }: Props) => {
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate("Settings")}
      style={styles.settingsbox}
    ></TouchableHighlight>
  );
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

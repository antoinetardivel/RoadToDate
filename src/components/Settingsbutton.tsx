import { FadeFromBottomAndroid } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets";
import * as React from "react";
import { StyleSheet, TouchableHighlight, Image } from "react-native";

export interface Props {
  navigation: any;
}

const SettingsButton = ({ navigation }: Props) => {
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate("Settings")}
      style={styles.settingsbox}
    >
      <Image
        source={require("../img/settings.png")}
        style={styles.settingsimage}
      ></Image>
    </TouchableHighlight>
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
  settingsimage: {
    width: 34.23,
    height: 34.23,
    top: 9,
    left: 8.5,
  },
});

export default SettingsButton;

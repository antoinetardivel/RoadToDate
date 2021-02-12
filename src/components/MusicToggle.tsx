import React, { useContext } from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";
import AppContext from "./AppContext";

interface Props {}

const MusicToggle = ({}: Props) => {
  const { PlayMusic, setPlayMusic } = React.useContext(AppContext) as any;
  const handleClick = () => {
    setPlayMusic(!PlayMusic);
  };
  return (
    <TouchableHighlight
      onPress={() => handleClick()}
      style={styles.ToggleMusic}
    >
      <Text style={styles.menutext}>ON / OFF</Text>
    </TouchableHighlight>
  );
};

export default MusicToggle;

const styles = StyleSheet.create({
  ToggleMusic: {
    top: 20,
    height: 55,
    width: 110,
    borderRadius: 14,
    borderStyle: "solid",
    borderColor: "#682B16",
    borderWidth: 2,
    backgroundColor: "#8F2F30",
  },
  menutext: {
    textAlign: "center",
    top: 15,
    color: "#FEE6C0",
    fontWeight: "bold",
    fontSize: 15,
  },
});

import * as React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

export interface Props {
  navigation: any;
  texte: string;
}

const Button = ({ navigation, texte }: Props) => {
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate("Game")}
      style={styles.playbox}
    >
      <Text style={styles.playtext}>{texte}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  playbox: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 14,
    borderStyle: "solid",
    borderColor: "#682B16",
    borderWidth: 2,
    backgroundColor: "#8F2F30",
  },
  playtext: {
    color: "#FEE6C0",
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default Button;

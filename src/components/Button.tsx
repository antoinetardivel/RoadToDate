import * as React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

import AppContext from '../components/AppContext';

export interface Props {
  navigation: any;
  texte: string;
}

const Button = ({ navigation, texte }: Props) => {
  const { setPlayerScore, setPlayerLife, setStart, setVagueNum } = React.useContext(AppContext) as any;
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate("Game")
        setPlayerScore(0)
        setPlayerLife(3)
        setStart(true)
        setVagueNum(0)
    }}
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
    width: 260,
    backgroundColor: "#8F2F30",
    borderWidth: 4,
    borderColor: "#692C17",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  playtext: {
    textAlign: "center",
    color: "#FEE6C0",
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default Button;

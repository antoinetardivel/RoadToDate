import * as React from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import Settingsbutton from "../components/Settingsbutton";

export interface Props {
  navigation: any;
}

const ScoresScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Settingsbutton />
      <Button
        title="MENU PRINCIPAL"
        onPress={() => navigation.navigate("Scores")}
      />
      <Button title="OPTIONS" onPress={() => navigation.navigate("Settings")} />
      <View style={styles.scorebox}>
        <Text style={styles.score}>350 pts</Text>
        <Text style={styles.bestscore}>Meilleur score :</Text>
        <Text style={styles.bestscore}>354 pts</Text>
      </View>

      <Button title="REJOUER" onPress={() => navigation.navigate("Game")} />
    </View>
  );
};

const styles = StyleSheet.create({
  scorebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 107,
    width: 251,
    borderRadius: 14,
    borderStyle: "solid",
    borderColor: "#8F2F30",
    borderWidth: 2,
    backgroundColor: "#F2D7AA",
  },
  score: {
    color: "#8F2F30",
    fontWeight: "bold",
    fontSize: 44,
  },
  bestscore: {
    color: "#8F2F30",
    fontSize: 14,
  },
});

export default ScoresScreen;

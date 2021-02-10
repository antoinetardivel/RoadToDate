import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import BackgroundImage from "../components/BackgroundImage";
import MainMenuButton from "../components/MainMenuButton";
import PlayButton from "../components/PlayButton";
import SettingsButton from "../components/SettingsButton";

export interface Props {
  navigation: any;
}

const ScoresScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <MainMenuButton navigation={navigation} />
      <SettingsButton navigation={navigation} />
      <View style={[styles.container, { width: "80%" }]}>
        <Image style={styles.title} source={require("../img/results.png")} />
        <View>
          <View style={styles.scorebox}>
            <Text style={styles.score}>350 pts</Text>
            <Text style={styles.bestscore}>Meilleur score : 354 pts</Text>
          </View>
          <PlayButton navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scorebox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 14,
    borderStyle: "solid",
    borderColor: "#8F2F30",
    borderWidth: 2,
    backgroundColor: "#F2D7AA",
    marginBottom: 20
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "30%",
    resizeMode: "contain",
    marginBottom: 20,
  },
  score: {
    color: "#8F2F30",
    fontWeight: "bold",
    fontSize: 24,
  },
  bestscore: {
    color: "#8F2F30",
    fontSize: 18,
  },
});

export default ScoresScreen;

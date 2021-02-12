import * as React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import MainMenuButton from "../components/MainMenuButton";
import PlayButton from "../components/Button";
import SettingsButton from "../components/SettingsButton";
const imageBG = require("../../assets/images/backgroundOpti.jpg");

import AppContext from '../components/AppContext';

export interface Props {
  navigation: any;
}

const ScoresScreen = ({ navigation }: Props) => {
  const { PlayerScore, setPlayerScore } = React.useContext(AppContext) as any;
  return (
    <ImageBackground source={imageBG} blurRadius={2} style={styles.BackgroundImage}>
      <View style={styles.container}>
        <SettingsButton navigation={navigation} />
        <View style={[styles.container, { width: "80%" }]}>
          <Image style={styles.title} source={require("../../assets/images/results.png")} />
          <View>
            <View style={styles.scorebox}>
              <Text style={styles.score}>Score:</Text>
                <Text style={styles.score}>{PlayerScore} pts</Text>
                {/* <Text style={styles.bestscore}>Meilleur score : {PlayerScore} pts</Text> */}
              </View>
            {/* setPlayerScore */}
              <PlayButton navigation={navigation}  texte={"Rejouer"} />
          </View>
        </View>
        <MainMenuButton navigation={navigation} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width:'100%'
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
    marginBottom: 20,
    minWidth:300,
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
  BackgroundImage:{
    resizeMode: "cover",
    alignItems: "center",
    position: "absolute",
    width:"100%",
    height:"100%",
  }
});

export default ScoresScreen;

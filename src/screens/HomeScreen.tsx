import * as React from "react";
import { useContext } from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image, ImageBackground } from "react-native";
// import BackgroundImage from "../components/BackgroundImage";
const imageBG = require("../../assets/images/backgroundOpti.jpg");
import SettingsButton from "../components/SettingsButton";
import MusicToggle from '../components/MusicToggle';
import Button from "../components/Button";
import PlayButton from "../components/Button"

export interface Props {
  navigation: any;
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <ImageBackground source={imageBG} blurRadius={2} style={styles.BackgroundImage}>
    <View style={styles.container}>
      <SettingsButton navigation={navigation} />
      <Image style={styles.title} source={require("../../assets/images/titre.png")} />
      <View style={styles.contentCenter}>
        <PlayButton navigation={navigation}  texte={"Jouer"} />
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    height: "100%",
    position: "absolute"
  },
  title: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  },
  contentCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    padding: 10,
  },
  button: {
    width: 260,
    alignItems: "center",
    backgroundColor: "#8F2F30",
    borderWidth: 4,
    borderColor: "#692C17",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#FEE6C0",
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  BackgroundImage:{
    resizeMode: "cover",
    alignItems: "center",
    position: "absolute",
    width:"100%",
    height:"100%",
  }
});

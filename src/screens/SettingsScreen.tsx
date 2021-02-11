import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
  TouchableHighlight,
} from "react-native";
import MainMenuButton from "../components/MainMenuButton";
const imageBG = require("../../assets/images/backgroundOpti.jpg");

export interface Props {
  navigation: any;
}

const SettingsScreen = ({ navigation }: Props) => {
  return (
    <ImageBackground
      source={imageBG}
      blurRadius={2}
      style={styles.BackgroundImage}
    >
      <View style={styles.container}>
        <MainMenuButton navigation={navigation} />
        <TouchableHighlight
          onPress={() => navigation.goBack()}
          style={styles.closesettingsbox}
        >
          <Image
            source={require("../../assets/images/cross.png")}
            style={styles.closesettingsimage}
          ></Image>
        </TouchableHighlight>
        <View style={[styles.box]}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Text style={styles.titres}>Son :</Text>
            </View>
            <View>
              <Text style={styles.titres}>Commandes :</Text>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Image source={require("../../assets/images/commandes.png")} />
                <Text style={styles.textes}>
                  Inclinez le téléphone pour vous déplacer.
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.titres}>Crédits :</Text>
            <Text style={styles.textes}>
              Application réalisée par Antoine TARDIVEL, Olivier TECHER et Hugo
              BLANCHARD. Merci à JP pour son aide.
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  closesettingsbox: {
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
  closesettingsimage: {
    width: 29.23,
    height: 29.23,
    top: 11.5,
    left: 11,
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 14,
    width: 690,
    height: 280,
    top: 30,
    borderStyle: "solid",
    borderColor: "#8F2F30",
    borderWidth: 2,
    backgroundColor: "#F2D7AA",
    marginBottom: 20,
  },
  BackgroundImage: {
    resizeMode: "cover",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  titres: {
    color: "#8F2F30",
    fontWeight: "bold",
    fontSize: 24,
  },
  textes: {
    color: "#8F2F30",
    fontSize: 18,
  },
});

export default SettingsScreen;

import * as React from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image } from "react-native";
import BackgroundImage from "../components/BackgroundImage";

export interface Props {
  navigation: any;
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <BackgroundImage />
      <Image style={styles.title} source={require('../img/titre.png')}/>
      <View style={styles.contentCenter}>
        <TouchableHighlight onPress={() => navigation.navigate("Game")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Jouer</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate("Scores")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Scores</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
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
    alignItems: 'center',
    backgroundColor: '#8F2F30',
    borderWidth: 4,
    borderColor: '#692C17',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FEE6C0',
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

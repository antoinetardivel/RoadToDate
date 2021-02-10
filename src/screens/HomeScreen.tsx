import * as React from "react";
import { View, Button, Text, StyleSheet, SafeAreaView } from "react-native";
import BackgroundImage from "../components/backgroundImage";

export interface Props {
  navigation: any;
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <BackgroundImage />
      <Text style={styles.title}>Road To Date</Text>
      <View style={styles.contentCenter}>
        <Button title="Game" onPress={() => navigation.navigate("Game")} />
        <Button title="Scores" onPress={() => navigation.navigate("Scores")} />
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
    fontSize: 25,
    padding: 15,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  contentCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    padding: 10,
  },
});

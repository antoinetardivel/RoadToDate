import * as React from 'react'
import { Button, View, StyleSheet, ImageBackground } from 'react-native'
const imageBG = require("../img/backgroundOpti.jpg");

export interface Props {
    navigation: any;
}

const SettingsScreen = ({navigation}: Props)  => {
  return (
    <ImageBackground source={imageBG} style={styles.BackgroundImage}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  BackgroundImage:{
    resizeMode: "cover",
    alignItems: "center",
    position: "absolute",
    width:"100%",
    height:"100%"
  }
})

export default SettingsScreen
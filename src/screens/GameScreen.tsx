import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions  } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function GameScreen() {

  const [data, setData] = useState({
      x: 0,
      y: 0,
      z: 0,
      });

  Accelerometer.setUpdateInterval(100);
  Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
    })
  const { x, y, z } = data;

  let windowWidth = Dimensions.get('window').width
  let windowHeight = Dimensions.get('window').height

  console.log(Math.round(y))
  const PosPerso = React.useMemo(() => {
    return Math.round(y);
  }, [y])

  

  return (
  <View style={styles.Container}>
      <View style={styles.Perso}></View>
      <Text>{Math.round(y)} </Text>
      <Text>-- {windowWidth} </Text>
      <Text>-- {windowHeight} </Text>
  </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'green',
    flex: 1,
    height:'100%',
  },
  Perso: {
      position: 'absolute',
      width: 50,
      height: 50,
      backgroundColor: 'red',
      bottom: 30,
  }
})
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions  } from 'react-native';
import { Accelerometer } from 'expo-sensors';

const GameScreen = () => {
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
  const [PosPlayerY, setPosPlayerY] = useState((windowWidth/2)-25)
  console.log(Math.round(y))


  let PosTemp = 0
  useEffect(()=>{
    PosTemp = (windowWidth/2) + ((windowWidth*( parseFloat(y).toFixed( 2 )) )-25)
    if (PosTemp < 0){
      PosTemp = 0
    }else if (PosTemp > (windowWidth - 50)){
      PosTemp = (windowWidth-50)
    }else{
      PosTemp = (windowWidth/2) + ((windowWidth*( parseFloat(y).toFixed( 2 )) )-25)
    }
    setPosPlayerY(PosTemp)
  },[y])

  return (
  <View style={styles.Container}>
    <View style={[styles.Perso, {left: PosPlayerY}]}></View>
    <Text>{ parseFloat(y).toFixed( 2 )} </Text>
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

export default GameScreen
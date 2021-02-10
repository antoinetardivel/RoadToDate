import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions  } from 'react-native';
import { Accelerometer } from 'expo-sensors';

import Waste from '../components/Waste'

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


  const [GameStart, setGameStart] = useState(false)
  const [VagueNum, setVagueNum] = useState(1)
  const [VagueStart, setVagueStart] = useState(false)
  const [VagueEnd, setVagueEnd] = useState(true)
  useEffect(()=>{
    if(!GameStart){
      setTimeout(() => {
        console.log("start")
        setGameStart(true)
      }, 2000)
    }
  },[])
  // @ts-ignore
  const Wastes = [10,50,100,150,200,250,300];

  const spawn = () =>{
    let max = windowWidth - 15
    let min = 0
    let WastePos = Math.floor(Math.random() * (max - min + 1) + min);
    return(
      <Waste PositionX={WastePos} />
    )
  }
  // let max = windowWidth - 15
  //   let min = 0
  //   let WastePos = Math.floor(Math.random() * (max - min + 1) + min);

  

  return (
  <View style={styles.Container}>
    <View style={[styles.Perso, {left: PosPlayerY}]}></View>
    <Text>{ parseFloat(y).toFixed( 2 )} </Text>
    {Wastes.map((WastePos, index) => {
        return <Waste key={index} PositionX={WastePos} />
    })}
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
  },
})

export default GameScreen

import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableHighlight  } from 'react-native';
import { Accelerometer } from 'expo-sensors';

const imageBG = require("../img/backgroundOpti.jpg");

import Waste from '../components/Waste'
import AppContext from '../components/AppContext';

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
    // @ts-ignore
    PosTemp = (windowWidth/2) + ((windowWidth*( parseFloat(y).toFixed( 2 )) )-25)
    if (PosTemp < 0){
      PosTemp = 0
    }else if (PosTemp > (windowWidth - 50)){
      PosTemp = (windowWidth-50)
    }else{
      // @ts-ignore
      PosTemp = (windowWidth/2) + ((windowWidth*( parseFloat(y).toFixed( 2 )) )-25)
    }
    setPosPlayerY(PosTemp)
  },[y])


  const [GameStart, setGameStart] = useState(false)
  const [VagueNum, setVagueNum] = useState(1)
  const [VagueStart, setVagueStart] = useState(false)
  const [VagueEnd, setVagueEnd] = useState(true)
  const [Wastes, setWastes] = useState([])
  
  let max = windowWidth - 15
  let min = 0

  const RemoveWaste = () => {
    Wastes.pop()
    console.log(Wastes)
  }

  const AddWaste = useCallback(
    () => {
      let PosX = Math.floor(Math.random() * (max - min + 1) + min)
      let mxBtom = windowHeight-(30 + 15)
      let newWaste = { key:Date.now(), PositionX:PosX, MaxBottom:mxBtom}
      // @ts-ignore
      // setWastes([...Wastes, newWaste])
      setWastes((wastes) => {
        return [...wastes, newWaste]
      })
      console.log(Wastes)
      console.log("new waste: " + PosX + " -- " + mxBtom)
    },
    [],
  );

  useEffect(()=>{
    if(!GameStart){
      setTimeout(() => {
          for(let i = 0; i < 4; i++){
            console.log("add")
            setTimeout(() => {
              AddWaste()
            }, 1000 * i)
          }
        setGameStart(true)
      }, 2000)
    }
  },[AddWaste])

  const { PlayerPosition, setPlayerPosition } = React.useContext(AppContext) as any;

  useEffect(()=>{
    setPlayerPosition(y)
  },[y])

  return (
    <ImageBackground source={imageBG} style={styles.BackgroundImage}>
      <View style={styles.Container}>
        <View style={[styles.Perso, {left: PosPlayerY}]}></View>
        {/*@ts-ignore*/}
        <Text>{ parseFloat(y).toFixed( 2 )} </Text>
        <TouchableHighlight
          onPress={() => AddWaste()}
        >
          <Text>Spawn</Text>
        </TouchableHighlight>
        {

          Wastes.map((WasteItem, index) => {
            // @ts-ignore
            return <Waste key={index} PositionX={WasteItem.PositionX} MaxBottom={WasteItem.MaxBottom} />
          })
        }
        <Text>-- {windowWidth} </Text>
        <Text>-- {windowHeight} </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    height:'100%',
    width:"100%",
  },
  Perso: {
      position: 'absolute',
      width: 50,
      height: 50,
      backgroundColor: 'red',
      bottom: 30,
  },
  BackgroundImage:{
    resizeMode: "cover",
    alignItems: "center",
    position: "absolute",
    width:"100%",
    height:"100%",
  }
})

export default GameScreen
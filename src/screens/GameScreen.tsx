import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, TouchableHighlight  } from 'react-native';
import { Accelerometer } from 'expo-sensors';

const imageBG = require("../../assets/images/backgroundOpti.jpg");
const HeartVoid = require("../../assets/images/HeartVoid.png");
const HeartFill = require("../../assets/images/HeartFill.png");
const Perso = require("../../assets/images/Perso.png");

import Waste from '../components/Waste'
import AppContext from '../components/AppContext';

export interface Props {
  navigation: any;
}

const GameScreen = ({navigation}: Props) => {

  const { PlayerPosition, setPlayerPosition, PlayerLife, PlayerScore, Start, setStart } = React.useContext(AppContext) as any;

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
    }else if (PosTemp > (windowWidth - 40)){
      PosTemp = (windowWidth-40)
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
  
  let max = windowWidth - 30
  let min = 0

  const RemoveWaste = () => {
    Wastes.pop()
    console.log(Wastes)
  }

  const AddWaste = useCallback(
    () => {
      let PosX = Math.floor(Math.random() * (max - min + 1) + min)
      let mxBtom = windowHeight-(30 + 30)
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
    if(Start){
      for(let i = 0; i < 10; i++){
        console.log("add")
        setTimeout(() => {
          AddWaste()
        }, 1000 * i)
      }
    }
  },[AddWaste, Start])

  useEffect(()=>{
    setPlayerPosition(PosTemp)
  },[y])

  useEffect(()=>{
    if(PlayerLife <= 0){
      navigation.navigate("Scores")
      setStart(false)
      setWastes(() => {
        return []
      })
    }
  },[PlayerLife])

  const PlayerScorePrint = React.useMemo(() => {
    return PlayerScore
  }, [PlayerScore])

  return (
    <ImageBackground source={imageBG} style={styles.BackgroundImage}>
      <View style={styles.Container}>
        <Image style={[styles.Perso, {left: PosPlayerY}]} source={Perso} />
        {/*@ts-ignore*/}
        {/* <Text>{ parseFloat(y).toFixed( 2 )} </Text>
        <TouchableHighlight
          onPress={() => AddWaste()}
        >
          <Text>Spawn</Text>
        </TouchableHighlight> */}
        {

          Wastes.map((WasteItem, index) => {
            // @ts-ignore
            return <Waste key={index} PositionX={WasteItem.PositionX} MaxBottom={WasteItem.MaxBottom} windowHeight={windowHeight} />
          })
        }
        {/* <Text>-- {windowWidth} </Text>
        <Text>-- {windowHeight} </Text> */}
      </View>
      <Text style={styles.Score}>{PlayerScorePrint}pts</Text>
      <View style={styles.heartRow}>
        { (PlayerLife > 0) ?
          <Image style={styles.heart} source={HeartFill} />
          :
          <Image style={styles.heart} source={HeartVoid} />
        }
        { (PlayerLife > 1) ?
          <Image style={styles.heart} source={HeartFill} />
          :
          <Image style={styles.heart} source={HeartVoid} />
        }
        { (PlayerLife > 2) ?
          <Image style={styles.heart} source={HeartFill} />
          :
          <Image style={styles.heart} source={HeartVoid} />
        }
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
  Score: {
    position: 'absolute',
    top:20,
    fontSize:18,
    fontWeight:'bold',
    color:'#8F2F30',

  },
  heartRow: {
    display: "flex",
    flexDirection:'row',
    position:'absolute',
    top:20,
    left:20,
  },
  heart: {
    width:30,
    height:26,
    marginLeft:10,
  },
  Perso: {
      position: 'absolute',
      width: 40,
      height: 122,
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
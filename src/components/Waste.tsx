import React, {useState, useEffect} from 'react';
import { Button, View, StyleSheet, Image } from 'react-native';
import AppContext from './AppContext';
const PigeonShit = require("../../assets/images/PigeonShit.png");

export interface Props {
    PositionX: number,
    MaxBottom: number,
    windowHeight: number
}

const Waste = ({PositionX, MaxBottom, windowHeight}: Props) => {
    const [PosWaste, setPosWaste] = useState(10)
    const [GoDown, setGoDown] = useState(true)
    const { PlayerPosition, setPlayerPosition, PlayerLife, setPlayerLife, PlayerScore, setPlayerScore} = React.useContext(AppContext) as any;

    useEffect(() =>{
        if((PosWaste + 30) >= (windowHeight - 152)){
            
            if((PositionX + 30)>= PlayerPosition){
                if(PositionX <= (PlayerPosition + 40)){
                    if(GoDown){
                        console.log("touche")
                        setGoDown(false)
                        setPlayerLife(PlayerLife - 1)
                    }
                }
            }
        }
    },[PlayerPosition, PosWaste])

    useEffect(()=>{
        if(GoDown){
            // console.log(PosWaste)
            if(PosWaste >= MaxBottom){
                setGoDown(false)
                if(PlayerLife > 0){
                    setPlayerScore(PlayerScore + 10)
                }
            }
            setTimeout(() => {
            setPosWaste(PosWaste + 10)
            }, 30)
        }
        
      },[PosWaste])

    return(
        <>
            { GoDown &&
                <View style={[styles.Body, {top: PosWaste, left:PositionX}]}>
                    <Image style={styles.Shit} source={PigeonShit} />
                </View>
                
            }
        </>
    )
}

const styles = StyleSheet.create({
    Body: {
        position: 'absolute',
        width: 30,
        height: 30,
    },
    shit: {
        width:'100%',
        height: '100%'
    }
})

export default Waste
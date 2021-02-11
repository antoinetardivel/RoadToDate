import React, {useState, useEffect} from 'react';
import { Button, View, StyleSheet } from 'react-native';
import AppContext from './AppContext';

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
        if((PosWaste + 15) >= (windowHeight - 80)){
            
            if((PositionX + 15)>= PlayerPosition){
                if(PositionX <= (PlayerPosition + 50)){
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
                setPlayerScore(PlayerScore + 50)
            }
            setTimeout(() => {
            setPosWaste(PosWaste + 1)
            }, 30)
        }
        
      },[PosWaste])

    return(
        <>
            { GoDown &&
                <View style={[styles.Body, {top: PosWaste, left:PositionX}]}></View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    Body: {
        position: 'absolute',
        backgroundColor: 'blue',
        width: 15,
        height: 15,
      }
})

export default Waste
import React, {useState, useEffect} from 'react';
import { Button, View, StyleSheet } from 'react-native';

export interface Props {
    PositionX: number;
    MaxBottom: number;
}

const Waste = ({PositionX, MaxBottom}: Props) => {

    const [PosWaste, setPosWaste] = useState(10)
    const [GoDown, setGoDown] = useState(true)
    

    useEffect(()=>{
        if(GoDown){
            // console.log(PosWaste)
            if(PosWaste >= MaxBottom){
                setGoDown(false)
            }
            setTimeout(() => {
            setPosWaste(PosWaste + 1)
            }, 30)
        }
        
      },[PosWaste])

    return(
        <>
            <View style={[styles.Body, {top: PosWaste, left:PositionX}]}></View>
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
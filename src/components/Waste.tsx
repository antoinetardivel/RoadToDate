import React, {useState, useEffect} from 'react';
import { Button, View, StyleSheet } from 'react-native';

export interface Props {
    PositionX: number;
}

const Waste = ({PositionX}: Props) => {

    const [PosWaste, setPosWaste] = useState((10))
    

    useEffect(()=>{
        console.log(PosWaste)
        setTimeout(() => {
        setPosWaste(PosWaste + 1)
        }, 30)
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
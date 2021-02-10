import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

    console.log(Math.round(y))

    return (
    <View>
        <Text>{y} </Text>
    </View>
    );
}
import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const Waste = ({

    }) => {

    return (
        <>
            <View style={styles.partone }></View>
            <View style={styles.parttwo}></View>
        </>
    )
}

const styles = StyleSheet.create({
    parttwo: {
        position: 'absolute',
    },
    partone: {
    position: 'absolute',
    height: 500,
    }
})

export default Waste
import React, { useContext } from "react";
import { StyleSheet, TouchableHighlight, View,Text } from "react-native";
import AppContext from './AppContext';

interface Props {

}

const MusicToggle = ({}: Props) => {
    const { PlayMusic, setPlayMusic } = React.useContext(AppContext) as any;
    const handleClick = ( ) => {
        setPlayMusic(!PlayMusic)
    }
    return (
        <TouchableHighlight
        onPress={() => handleClick()}
        style={styles.ToggleMusic}
        >
            <Text>coucou</Text>
        </TouchableHighlight>
    );
}

export default MusicToggle;

const styles = StyleSheet.create({
    ToggleMusic: {
        width: 50,
        height: 50,
        backgroundColor: "yellow",
    }
})
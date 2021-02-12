import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Audio } from 'expo-av';
// import { useFonts } from 'expo-font';

import HomeScreen from './src/screens/HomeScreen';
import ScoresScreen from './src/screens/ScoresScreen';
import GameScreen from './src/screens/GameScreen';
import SettingsScreen from './src/screens/SettingsScreen';

import AppContext from  './src/components/AppContext'



const Stack = createStackNavigator();

  function MyStack() {

    // const [loaded, error] = useFonts({
    //   GothamMedium: require('./src/fonts/Gotham-Medium.ttf'),
    //   GothamBold: require('./src/fonts/Gotham-Bold.ttf'),
    // });
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Scores" component={ScoresScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    );
  }

export default function App() {
  const [PlayMusic, setPlayMusic] = useState(false)
  const [PlayerPosition, setPlayerPosition] = useState(0)
  const [PlayerLife, setPlayerLife] = useState(3)
  const [PlayerScore, setPlayerScore] = useState(0)
  const [Start, setStart] = useState(false)
  const [VagueNum, setVagueNum] = useState(1)
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('./src/music/RoadToDate.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  useEffect(() => {
    if(PlayMusic){
      // Si state PlayMusic = true
        
    }else{
      // Si state PlayMusic = false
    }

  },[PlayMusic])

  return (
    <AppContext.Provider value={{
      PlayMusic: PlayMusic,
      setPlayMusic: setPlayMusic,
      PlayerPosition: PlayerPosition,
      setPlayerPosition: setPlayerPosition,
      PlayerLife: PlayerLife,
      setPlayerLife: setPlayerLife,
      PlayerScore: PlayerScore,
      setPlayerScore: setPlayerScore,
      Start: Start,
      setStart: setStart,
      VagueNum: VagueNum,
      setVagueNum: setVagueNum,
    }}>
      <NavigationContainer >
          <MyStack />
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({

});
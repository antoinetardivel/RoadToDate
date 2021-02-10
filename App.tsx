import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, StyleSheet } from 'react-native'
import { useFonts,  } from 'expo-font';

import HomeScreen from './src/screens/HomeScreen';
import ScoresScreen from './src/screens/ScoresScreen';
import GameScreen from './src/screens/GameScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createStackNavigator();

// interface Props {
//     children?: string | undefined,
//     onPress?: () => void,
//     color?: string,
//     autre?: any,
// }

function MyStack() {
  const [loaded, error] = useFonts({
    GothamMedium: require('./src/fonts/Gotham-Medium.ttf'),
    GothamBold: require('./src/fonts/Gotham-Bold.ttf'),
   });
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
  return (
    <NavigationContainer >
        <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
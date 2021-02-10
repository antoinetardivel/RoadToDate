import * as React from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView, ImageBackground  } from 'react-native';

const image = require('../img/background.jpg');

export interface Props {
  navigation: any;
}  

export default function HomeScreen({navigation}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={{flex: 1}} source={image} blurRadius={8}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Road To Date
          </Text>
          <View style={styles.contentCenter}>
            <Button
            title="Game"
            onPress={() => navigation.navigate('Game')}
            />
            <Button
            title="Scores"
            onPress={() => navigation.navigate('Scores')}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1, 
  },
  title: {
    fontSize: 25,
    padding: 15,
    color: 'white',
    fontWeight: 'bold',    
    textAlign: 'center',    
  },
  contentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    padding: 10,
  }
});
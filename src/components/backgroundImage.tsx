import React from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

export default class BackgroundImage extends React.Component {
    render() {
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
    }
}
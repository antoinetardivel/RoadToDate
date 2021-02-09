import * as React from 'react';
import { Button, View } from 'react-native';

export interface Props {
  navigation: any;
}

export default function ScoresScreen({navigation}: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Scores')}
      />
      <Button
        title="Game"
        onPress={() => navigation.navigate('Game')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
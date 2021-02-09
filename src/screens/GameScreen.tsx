import * as React from 'react';
import { Button, View } from 'react-native';

export interface Props {
  navigation: any;
}

export default function GameScreen({navigation}: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Scores"
        onPress={() => navigation.navigate('Scores')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
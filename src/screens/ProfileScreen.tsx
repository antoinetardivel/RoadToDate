import * as React from 'react';
import { Button, View } from 'react-native';

export interface Props {
  navigation: any;
}

export default function ProfileScreen({navigation}: Props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Notifications"
          onPress={() => navigation.navigate('Notifications')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
}
import * as React from 'react';
import { Button, View } from 'react-native';

export interface Props {
  navigation: any;
}

export default function HomeScreen({navigation}: Props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    );
}
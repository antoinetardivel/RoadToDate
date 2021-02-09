import * as React from 'react'
import { Button, View, StyleSheet } from 'react-native'

export interface Props {
    navigation: any;
}

const SettingsScreen = ({navigation}: Props)  => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}


const styles = StyleSheet.create({
  
})

export default SettingsScreen
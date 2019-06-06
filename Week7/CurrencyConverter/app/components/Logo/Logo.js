import React from 'react'
import { View, Image, Text } from 'react-native'

const Logo = () => {
  <View>
    <Image source={require('./images/background.png')}>
      <Image source={require('./images/logo.png')}/>
    </Image>
    <Text>Currency Converter</Text>
  </View>
}

export default Logo
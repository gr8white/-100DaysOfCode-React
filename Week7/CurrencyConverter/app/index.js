import React from 'react';
import Home from './screens/Home'
import EStyleSheet from 'react-native-extended-stylesheet'
// import { StyleSheet, Text, View } from 'react-native';
EStyleSheet.build({
  $primaryBlue: '#4f6d7a'
})

export default () => <Home />
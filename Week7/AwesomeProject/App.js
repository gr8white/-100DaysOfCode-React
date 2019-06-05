import React from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   {/* <Text>Young D White and Young Syd!</Text> */}
      //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      //   <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
      //   <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      // </View>
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Press Me"
        />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

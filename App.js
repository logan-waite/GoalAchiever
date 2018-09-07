import React from 'react';
import { StyleSheet, Text, View, 
        SafeAreaView, Alert } from 'react-native';
import { Button, DefaultTheme, Provider as PaperProvider } from "react-native-paper";

export default class App extends React.Component {

  buttonPress() {
    Alert.alert("string");
  }

  render() {
    return (
      <PaperProvider theme={DefaultTheme}>
        <SafeAreaView>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Button onPress={ this.buttonPress } raised>button</Button>
        </SafeAreaView>
      </PaperProvider>
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

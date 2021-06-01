import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { StyleSheet, View } from 'react-native';
import {Provider} from 'react-redux'
import NavBar from './navigation/NavBar'
import Store from './Store/configureStore'

export default function App() {
  return (
    <Provider store={Store} >
      <NavBar />
      <StatusBar style="auto" />
    </Provider>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});*/

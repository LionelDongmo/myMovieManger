import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { StyleSheet, View } from 'react-native';
import {Provider} from 'react-redux'
import NavBar from './navigation/NavBar'
import Store from './Store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
//import { PersistGate } from 'redux-persist/es/integration/react'

export default function App() {
  let persistor = persistStore(Store)
  return (
    <Provider store={Store} >
      <PersistGate loading={null} persistor={persistor}>
        <NavBar />
        <StatusBar style="auto" />
      </PersistGate>
    </Provider>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});*/

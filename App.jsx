import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Route from './src/screens/Route';
// import {migrate} from './dataStore/migrate';

const App = () => {
  // useEffect(() => {
  //   migrate();   // a utilider une seule fois
  // }, []);
  return <Route />;
};

export default App;

const styles = StyleSheet.create({});

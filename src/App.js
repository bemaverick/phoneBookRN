/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './stores'
import RootNavigator from "./navigation";

const store = configureStore();

const App = () => {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>

  );
};

export default App;

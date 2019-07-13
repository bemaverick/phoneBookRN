/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React  from 'react';
import {
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './stores'
import RootNavigator from "./navigation";

import { COLORS } from "./constants/colors";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={COLORS.primaryLight} barStyle="dark-content" />
      <RootNavigator />
    </Provider>
  );
};

export default App;

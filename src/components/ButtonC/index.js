/**
 * @format
 * @flow
 */

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';


type _t_props = {
  title: string,
  onPress: () => void,
  customStyle?: {
    marginBottom?: number
  },
  textStyle?: {
    color?: string
  },
};
const ButtonC = (props: _t_props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacite={0.8}
      style={[
        styles.container,
        props.customStyle,
      ]}
    >
      <Text
        style={[styles.text, props.textStyle]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  )
};
export default ButtonC;

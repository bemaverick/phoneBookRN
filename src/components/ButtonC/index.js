/**
 * @format
 * @flow
 */

import React from 'react';
import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { COLORS } from "../../constants/colors";

import styles from './styles';

type _t_props = {
  title: string,
  onPress: () => void,
  isLoading: boolean,
  customStyle?: {
    marginBottom?: number
  },
  textStyle?: {
    color?: string
  },
};
const ButtonC = (props: _t_props) => {
  const Wrap = props.isLoading ? View : TouchableOpacity;
  return (
    <Wrap
      onPress={props.onPress}
      activeOpacite={0.8}
      style={[
        styles.container,
        props.customStyle,
      ]}
    >
      {
        props.isLoading ? (
          <ActivityIndicator color={COLORS.white} />
        ) : (
          <Text
            style={[styles.text, props.textStyle]}
          >
            {props.title}
          </Text>
        )
      }

    </Wrap>
  )
};
export default ButtonC;

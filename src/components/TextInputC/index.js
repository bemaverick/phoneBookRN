/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import FeatherIcon from "react-native-vector-icons/Feather"

import styles from "./styles";
import {COLORS} from "../../constants/colors";

const getIcon = (iconName: string) => {
  let icon = null;
  switch (iconName) {
    case "phone":
    icon = (<FeatherIcon size={22} color={COLORS.primaryDark} name={iconName} />);
    break;
    default:
      break;
  }
  return icon;
};

type _t_props = {
  value: string,
  containerStyle?: {
    margin?: number,
  },
  iconName?: string
}

const TextInputC = (props: _t_props) => {
  const { iconName } = props;
  return (
    <View style={[styles.container, props.containerStyle]}>
      {
        !!iconName && (
          <View style={styles.iconBlock}>
            {getIcon(iconName)}
          </View>
        )
      }
      <TextInput
        autoCompleteType="off"
        autoCorrect={false}
        style={styles.textInput}
        {...props}
      />
    </View>
  )
};

export default TextInputC;




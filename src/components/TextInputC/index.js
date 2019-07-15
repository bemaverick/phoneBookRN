/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  View,
  Text,
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
  iconName?: string,
  errorText?: string
}

const TextInputC = (props: _t_props) => {
  const { iconName } = props;
  return (
    <View style={[props.containerStyle]}>
      <View style={styles.container}>
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
      {
        !!props.errorText && (
          <Text numberOfLines={1} style={styles.error}>
            {props.errorText || "asdasd dadasdas"}
          </Text>
        )
      }
    </View>

  )
};

export default TextInputC;




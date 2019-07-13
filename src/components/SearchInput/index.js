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
  TouchableOpacity
} from 'react-native';
import IonIcon from "react-native-vector-icons/Ionicons"

import styles from "./styles";
import { COLORS } from "../../constants/colors";



const SearchInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCompleteType="off"
        autoCorrect={false}
        style={styles.textInput}
        {...props}
      />
      <View style={styles.iconBlock}>
        <IonIcon name="ios-search" color={COLORS.black06} size={14} />
      </View>
      <TouchableOpacity
        onPress={props.onPressClose}
        activeOpacite={0.8}
        hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
        style={[ styles.iconBlock, styles.iconBlockClear]}
      >
        <IonIcon name="ios-close" color={COLORS.black06} size={18} />
      </TouchableOpacity>
    </View>
  )
};

export default SearchInput;




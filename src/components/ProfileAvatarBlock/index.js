/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React  from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from "./styles";


type _t_props = {
  text: string,
  leftText: string,
  rightText: string
}

const ProfileAvatarBlock = (props: _t_props) => {
  return (
    <>
      <View
        style={styles.container}
      >
        <View style={styles.avatar}>
          <Text
            style={styles.initials}
          >
            {props.text}
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.textBlock}>
          <Text
            numberOfLines={1}
            style={styles.text}
          >
            {props.leftText}
          </Text>
        </View>
        <View style={[styles.textBlock, styles.rightBlock]}>
          <Text
            numberOfLines={1}
            style={styles.text}
          >
            {props.rightText}
          </Text>
        </View>
      </View>
    </>
  )
};

export default ProfileAvatarBlock;

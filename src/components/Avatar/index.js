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
  text?: string,
}

const Avatar = (props: _t_props) => {
  return (
    <View style={styles.container}>
      {
        !!props.text && (
          <Text style={styles.text}>
            {props.text}
          </Text>
        )
      }
    </View>
  )
};

export default Avatar;

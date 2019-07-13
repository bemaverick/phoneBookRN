/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  StatusBar,
} from 'react-native';

import styles from "./styles";
import {COLORS} from "../../constants/colors";


class ContactCreate extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{
          flex: 1,
          flexDirection: "row",
        }}>
          <View style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            marginRight: 16,
            backgroundColor: COLORS.primaryDark
          }} />

          <View style={{ flex: 1 }}>
            <TextInput
              style={{
                height: 32,
                marginBottom: 8,
                paddingVertical: 0,
                paddingHorizontal: 0,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.black06
              }}
            />

            <TextInput
              style={{
                height: 32,
                marginBottom: 8,
                paddingVertical: 0,
                paddingHorizontal: 0,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.black06
              }}
            />

          </View>

        </View>

      </ScrollView>
    )
  }
};

export default ContactCreate;

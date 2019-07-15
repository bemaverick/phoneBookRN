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
  TouchableOpacity
} from 'react-native';
import { connect } from "react-redux";

import { getUserInitials } from "../../helpers";

import type {_t_contactItem} from "../../flow.types";

import styles from "./styles";

type _t_props = {
  item: _t_contactItem,
  contactId: string
}

const ItemList = (props: _t_props) => {
  const fio = `${props.item.firstName || ""} ${props.item.lastName || ""}`;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={styles.container}
    >
      <View style={styles.avatarBlock}>
        <Text style={styles.fioInitials}>
          {getUserInitials(fio)}
        </Text>
      </View>
      <View style={styles.textBlock}>
        <Text
          style={styles.text}
          numberOfLines={1}
        >
        {fio}
      </Text>
      </View>
    </TouchableOpacity>
  )
};

const mapStateToProps = (state, ownProps) => ({
  item: state.contacts[ownProps.contactId]
});

export default connect(mapStateToProps)(ItemList);

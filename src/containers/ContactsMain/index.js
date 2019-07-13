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
  Text,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux'

import { fetchContacts } from '../../actions';
import styles from "./styles";

const mapStateToProps = (state) => {
  console.log()
  return {
    app: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: () => dispatch(fetchContacts()),
  };
};

class ContactsMain extends Component {

  componentDidMount(): void {
    console.log(this.props)
    this.props.fetchContacts();
  }

  render() {
    console.log(this.props.app)
    return (
      <View style={styles.container}>

      </View>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsMain)

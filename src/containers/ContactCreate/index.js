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
  Platform,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from  "react-redux";

import TextInputC from "../../components/TextInputC";
import ButtonC from "../../components/ButtonC";
import Avatar from "../../components/Avatar";

import { sendContact } from "../../actions";
import { getUserInitials } from "../../helpers";


import styles from "./styles";

const mapStateToProps = (state) => {
  return {
    isCreating: state.isCreating
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendContact: (contact, callBack) => dispatch(sendContact(contact, callBack)),
    setCurrentContact: (itemId: string) => dispatch(setCurrentContact(itemId))
  };
};
class ContactCreate extends Component {

  state = {
    firstName: "",
    lastName: "",
    number: ""
  };

  onChange = (text: string, field: string) => {
    this.setState(() => ({
      [field]: text
    }))
  };

  cancel = () => {
    Keyboard.dismiss();
    this.setState(() => ({
      firstName: "",
      lastName: "",
      number: ""
    }));
    this.props.navigation.navigate("ContactsMain");
  };

  create = () => {
    const {
      firstName, lastName, number
    } = this.state;
    this.props.sendContact({
      number,
      firstName,
      lastName,
    }, this.cancel)
  };

  render() {
    const {
      firstName, lastName, number
    } = this.state;
    const fio = `${firstName} ${lastName}`;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={64}>
        <View style={styles.row}>
          <Avatar text={getUserInitials(fio)} />
          <View style={styles.fioBlock}>
            <TextInputC
              onChangeText={(text) => this.onChange(text, "firstName")}
              value={firstName}
              placeholder="First Name"
              containerStyle={styles.input}
            />
            <TextInputC
              onChangeText={(text) => this.onChange(text, "lastName")}
              value={lastName}
              placeholder="Last Name"

            />
          </View>
        </View>
        <View style={styles.bottomBlock}>
          <View style={styles.phoneBlock}>
            <TextInputC
              onChangeText={(text) => this.onChange(text, "number")}
              value={number}
              keyboardType="phone-pad"
              placeholder="Phone"
              iconName="phone"
              maxLength={16}
            />
          </View>
          <ButtonC
            onPress={this.create}
            title={"Create"}
            isLoading={this.props.isCreating}
            customStyle={styles.createButton}

          />
          <ButtonC
            onPress={this.cancel}
            title={"Cancel"}
            customStyle={styles.backButton}
            textStyle={styles.backButtonText}
          />
          </View>
      </KeyboardAvoidingView>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactCreate)
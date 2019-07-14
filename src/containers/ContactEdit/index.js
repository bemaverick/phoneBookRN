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
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from "react-redux";

import TextInputC from "../../components/TextInputC";
import ButtonC from "../../components/ButtonC";
import Avatar from "../../components/Avatar";

import { TEXT_INPUT, BUTTON } from "../../constants/dictionary";
import styles from "./styles";
import {getUserInitials} from "../../helpers";

const mapStateToProps = (state) => {
  return {
    currentContact: state.currentContact,
  };
};
class ContactEdit extends Component {

  state = {
    firstName: this.props.currentContact.firstName || "",
    lastName: this.props.currentContact.lastName || "",
    number:  this.props.currentContact.number || "",
  };

  onChange = (text: string, field: string) => {
    this.setState(() => ({
      [field]: text
    }))
  };

  cancel = () => {
    this.props.navigation.popToTop();
  };

  render() {
    const { currentContact } = this.props;
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
              placeholder={TEXT_INPUT.FIRST_NAME}
              containerStyle={styles.input}
            />
            <TextInputC
              onChangeText={(text) => this.onChange(text, "lastName")}
              value={lastName}
              placeholder={TEXT_INPUT.LAST_NAME}
            />
          </View>
        </View>
        <View style={styles.bottomBlock}>
          <View style={styles.phoneBlock}>
            <TextInputC
              onChangeText={(text) => this.onChange(text, "number")}
              value={number}
              placeholder={TEXT_INPUT.PHONE}
              keyboardType="phone-pad"
              iconName="phone"
              maxLength={16}
            />
          </View>
          <ButtonC
            onPress={() => null}
            title={BUTTON.SAVE}
            customStyle={styles.createButton}

          />
          <ButtonC
            onPress={this.cancel}
            title={BUTTON.CANCEL}
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
)(ContactEdit)

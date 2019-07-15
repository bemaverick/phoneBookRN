/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from "react-redux";

import ContactForm from "../../components/ContactForm";
import ButtonC from "../../components/ButtonC";

import { editContact } from "../../actions";

import { TEXT_INPUT, BUTTON } from "../../constants/dictionary";
import type {_t_action} from "../ContactCreate/flow";
import styles from "./styles";


const mapStateToProps = (state) => {
  return {
    currentContact: state.currentContact,
    isUpdating: state.isUpdating
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    editContact: (contact, callBack) => dispatch((editContact(contact, callBack))),
  };
};
class ContactEdit extends Component {

  cancel = () => {
    this.props.navigation.popToTop();
  };

  save = (values, actions: _t_action) => {
    this.props.editContact({
      ...values,
      id: this.props.currentContact.id
    }, () => this.cancel(actions))
  };

  render() {
    const { currentContact, isUpdating } = this.props;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={64}>
        <ContactForm
          initialValues={{
            firstName: currentContact.firstName || "",
            lastName: currentContact.lastName || "",
            number: currentContact.number || ""
          }}
          onSubmit={(values, actions) => this.save(values, actions)}
          isLoading={isUpdating}
          submitText={BUTTON.SAVE}
        />
        <ButtonC
          onPress={this.cancel}
          title={BUTTON.CANCEL}
          customStyle={styles.backButton}
          textStyle={styles.backButtonText}
        />
      </KeyboardAvoidingView>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactEdit)

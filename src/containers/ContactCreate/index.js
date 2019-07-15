/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from  "react-redux";

import ContactForm from "../../components/ContactForm";
import ButtonC from "../../components/ButtonC";

import { sendContact } from "../../actions";

import type {_t_contactItem} from "../../flow.types";
import type { _t_action, _t_props } from "./flow";

import { BUTTON } from "../../constants/dictionary";
import styles from "./styles";

const mapStateToProps = (state) => {
  return {
    isCreating: state.isCreating
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendContact: (contact, callBack) => dispatch(sendContact(contact, callBack)),
  };
};
class ContactCreate extends Component<_t_props> {

  initialValues: _t_contactItem = {
    firstName: "",
    lastName: "",
    number: ""
  };

  cancel = (actions: _t_action) => {
    Keyboard.dismiss();

    if (actions) {
      setTimeout(() => {
        actions.resetForm();
        actions.setFieldTouched("number", false, false);
        actions.setSubmitting(false);
      }, 100);
      // because keyboard is async
    }
    this.props.navigation.navigate("ContactsMain");
  };

  create = (values, actions: _t_action) => {
    this.props.sendContact({ ...values }, () => this.cancel(actions))
  };

  render() {
    const { isCreating } = this.props;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={64}>
        <ContactForm
          initialValues={this.initialValues}
          isLoading={isCreating}
          onSubmit={(values, actions) => this.create(values, actions)}
          submitText={BUTTON.CREATE}
        />
        <ButtonC
          onPress={() => this.cancel()}
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
)(ContactCreate)

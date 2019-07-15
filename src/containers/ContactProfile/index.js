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
} from 'react-native';
import { connect } from "react-redux";

import ButtonC from "../../components/ButtonC";
import TextInputC from "../../components/TextInputC";
import ProfileAvatarBlock from "../../components/ProfileAvatarBlock";

import { getUserInitials } from "../../helpers";

import { _t_props } from "./flow";

import { BUTTON } from "../../constants/dictionary";
import styles from "./styles";

const mapStateToProps = (state) => {
  return {
    currentContact: state.currentContact,
  };
};

class ContactProfile extends Component<_t_props> {

  goBack = () => {
    this.props.navigation.goBack();
  };

  edit = () => {
    this.props.navigation.navigate("ContactEdit")
  };

  render() {
    const { currentContact } = this.props;
    const initials = `${currentContact.firstName} ${currentContact.lastName}`;
    return (
      <View style={styles.container}>
        <ProfileAvatarBlock
          text={getUserInitials(initials)}
          leftText={currentContact.firstName && currentContact.firstName.toUpperCase()}
          rightText={currentContact.lastName && currentContact.lastName.toUpperCase()}
        />
        <View style={styles.bottomBlock}>
          <View style={styles.phoneBlock}>
            <TextInputC
              iconName="phone"
              value={currentContact.number}
              editable={false}
            />
          </View>
          <ButtonC
            onPress={this.edit}
            title={BUTTON.EDIT}
            customStyle={styles.editButton}
          />
          <ButtonC
            onPress={this.goBack}
            title={BUTTON.BACK}
            customStyle={styles.backButton}
            textStyle={styles.backButtonText}
          />
        </View>

      </View>
    )
  }
}

export default connect(
  mapStateToProps,
)(ContactProfile)


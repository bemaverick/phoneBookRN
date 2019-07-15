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
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux'

import ContactItem from "../../components/ContactItem";
import SearchInput from "../../components/SearchInput";
import EmptyBlock from "../../components/EmptyBlock";

import { fetchContacts, setCurrentContact } from '../../actions';
import { filterContactsByFio } from "../../helpers";

import type { _t_props, _t_state } from "./flow";
import { TEXT_INPUT, COMMON } from "../../constants/dictionary";
import { COLORS } from "../../constants/colors";
import styles from "./styles";

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    contactsIds: state.contactsIds,
    isFetchingContacts: state.isFetchingContacts,
    errorFetching: state.errorFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: () => dispatch(fetchContacts()),
    setCurrentContact: (itemId: string) => dispatch(setCurrentContact(itemId))
  };
};

class ContactsMain extends Component<_t_props, _t_state> {

  state = {
    searchText: "",
  };

  componentDidMount(): void {
    this.props.fetchContacts();
  }

  onChaneText = (text: string) => {
    this.setState(() => ({
      searchText: text
    }));
  };

  goToProfile = (itemId: string) => {
    this.props.setCurrentContact(itemId);
    this.props.navigation.navigate("ContactProfile");
  };

  keyExtractor = (item: string) => {
    return item;
  };

  renderItem = ({ item }) => {
    return (
      <ContactItem
        onPress={() => this.goToProfile(item)}
        contactId={item}
      />
    )
  };

  renderListEmptyComponent = () => {
    const { isFetchingContacts, errorFetching } = this.props;
    if (isFetchingContacts) {
      return <ActivityIndicator size="large" color={COLORS.primaryDark} />
    }
    return (
      <EmptyBlock text={errorFetching || COMMON.NO_RESULTS} />
    )
  };

  render() {
    const { searchText } = this.state;
    const { contacts, contactsIds } = this.props;
    const data = filterContactsByFio(contacts, contactsIds, searchText);
    return (
      <View style={styles.container}>
        <SearchInput
          onChangeText={this.onChaneText}
          onPressClose={() => this.onChaneText("")}
          value={searchText}
          placeholder={TEXT_INPUT.SEARCH}
          maxLength={20}
        />
        <FlatList
          keyboardShouldPersistTaps="always"
          contentContainerStyle={styles.flatList}
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          ListEmptyComponent={this.renderListEmptyComponent}
          initialNumToRender={15}
        />
      </View>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsMain)

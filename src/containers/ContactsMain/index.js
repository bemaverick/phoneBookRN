/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux'

import ContactItem from "../../components/ContactItem";
import SearchInput from "../../components/SearchInput";


import { fetchContacts, setCurrentContact } from '../../actions';

import type { _t_props, _t_state } from "./flow";
import { COLORS } from "../../constants/colors";
import styles from "./styles";

const mapStateToProps = (state) => {
  return {
    contact: state,
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

  goToProfile = (itemId: string) => {
    this.props.setCurrentContact(itemId);
    this.props.navigation.navigate("ContactProfile");
  };

  renderListEmptyComponent = () => {
    if (this.props.contact.isFetching) {
      return <ActivityIndicator size="large" color={COLORS.primaryDark} />
    }
    return (
      <Text style={{ textAlign: "center", paddingVertical: 20 }}>No results</Text>
    )
  };

  render() {
    const { contacts, contactsIds } = this.props.contact;
    const { searchText } = this.state;
    const data = contactsIds.filter(
      (itemId: string) => (
        contacts[itemId].firstName.toLowerCase().includes(searchText.toLowerCase())
        || contacts[itemId].lastName.toLowerCase().includes(searchText.toLowerCase())
        || `${contacts[itemId].firstName}${contacts[itemId].lastName}`.toLowerCase().includes(searchText.replace(/\s/g, '').toLowerCase())
    ));
    return (
      <View style={styles.container}>
        <SearchInput
          onChangeText={this.onChaneText}
          onPressClose={() => this.onChaneText("")}
          value={searchText}
          placeholder={"Search"}
          maxLength={20}
        />
        <FlatList
          keyboardShouldPersistTaps="always"
          contentContainerStyle={styles.flatList}
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          ListEmptyComponent={this.renderListEmptyComponent}
          removeClippedSubviews
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

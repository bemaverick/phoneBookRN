import React from "react";
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import AntDesIcon from "react-native-vector-icons/AntDesign"

import ContactsMain from "../containers/ContactsMain";
import Contact from "../containers/Contact";

const ContactStack = createStackNavigator({
  ContactsMain: {
    screen: ContactsMain,
    navigationOptions: {
      title: "sad"
    }
  }
});

const RootNavigator = createBottomTabNavigator({
  ContactsMain: {
    screen: ContactStack,
    navigationOptions: {
      title: "Contacts",
      tabBarIcon: () => (
        <AntDesIcon name="contacts" color="black" size={20} />
      ),
    }
  },
  Contact: {
    screen: ContactsMain,
    navigationOptions: {
      title: "Contacts",
      tabBarIcon: () => (
        <AntDesIcon name="contacts" color="black" size={20} />
      ),
    }
  },

}, {
  initialRouteName: "ContactsMain",
  tabBarOptions: {
    activeTintColor: '#000',
    labelStyle: {
      fontSize: 12,
    },
    style: {
     // backgroundColor: CO,
    },
  }
});




export default createAppContainer(RootNavigator);

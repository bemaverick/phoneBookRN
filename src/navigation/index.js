import React from "react";
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import AntDesIcon from "react-native-vector-icons/AntDesign"

import ContactsMain from "../containers/ContactsMain";
import ContactCreate from "../containers/ContactCreate";
import ContactEdit from "../containers/ContactEdit";
import ContactProfile from "../containers/ContactProfile";


import { COLORS } from "../constants/colors";

const ContactStack = createStackNavigator({
  ContactsMain: {
    screen: ContactsMain,
    navigationOptions: {
      title: "Contact List",
      headerStyle: {
        backgroundColor: COLORS.primaryLight,
      },
      headerTitleStyle: {
        letterSpacing: 1
      }
    }
  },
  ContactProfile: {
    screen: ContactProfile,
    navigationOptions: {
      header: null,
      headerBackTitle: null,
    }
  },
  ContactEdit: {
    screen: ContactEdit,
    navigationOptions: {
      title: "Edit",
      headerStyle: {
        backgroundColor: COLORS.primaryLight,
      },
      headerTintColor: COLORS.black08,
      headerTitleStyle: {
        letterSpacing: 1
      }
    }
  }
});

const ContactCreateStack = createStackNavigator({
  ContactCreate: {
    screen: ContactCreate,
    navigationOptions: {
      title: "Create Contact",
      headerStyle: {
        backgroundColor: COLORS.primaryLight,
      },
      headerTitleStyle: {
        letterSpacing: 1
      }
    }
  },
});

const RootNavigator = createBottomTabNavigator({
  ContactsMain: {
    screen: ContactStack,
    navigationOptions: {
      title: "Contacts",
      tabBarIcon: ({ focused }) => (
        <AntDesIcon
          name="contacts"
          color={ focused ? COLORS.black : COLORS.black06 }
          size={ focused ? 20 : 18 }
        />
      ),
    }
  },
  Contact: {
    screen: ContactCreateStack,
    navigationOptions: {
      title: "Create",
      tabBarIcon: ({ focused }) => (
        <AntDesIcon
          name="adduser"
          color={ focused ? COLORS.black : COLORS.black06}
          size={ focused ? 20 : 18 }
        />
      ),
    }
  },

}, {
  initialRouteName: "ContactsMain",
  tabBarOptions: {
    activeTintColor: COLORS.black,
    inactiveTintColor: COLORS.black06,
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: COLORS.primaryLight,
    },
  }
});

export default createAppContainer(RootNavigator);

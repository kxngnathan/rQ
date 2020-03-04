import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import SettingsScreen from "../screens/Sidemenu/SettingsScreen";
import { headerStyles } from "../constants/navigation";

const SettingsNavigator = createStackNavigator(
  {
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Settings",
        };
      }
    },
  },
  {
    initialRouteName: "SettingsScreen",
    defaultNavigationOptions: {
      ...headerStyles
    },
    navigationOptions: ({ navigation }) => {
      const { index } = navigation.state
      let tabBarVisible = true
      if (index > 0) tabBarVisible = false
      return {
        headerShown: true,
        tabBarVisible
      }
    }
  }
);

export default SettingsNavigator;

import React, { Component } from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// if exported as default, remove braces ({})
import HomeScreen from './components/home_screen.js';
import AddKeyword from './components/add_keyword.js';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  AddKeyword: AddKeyword,
}, { initialRouteName: 'Home' }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component<{}> {
  render() {
    return(
      <ApplicationProvider
        mapping={mapping}
        theme={lightTheme}>
        <AppContainer />
      </ApplicationProvider>
    )
  }
}

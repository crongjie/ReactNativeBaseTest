/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { ReactNativePropRegistry } from 'react-native';
import React, { Component } from 'react';
import { Container, Content, Badge, Header, Title, Footer, FooterTab, Button,Text, Icon } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {Scene, Router} from 'react-native-router-flux';


import reducers from './src/reducers'

const store = createStore(reducers);
import Test from './src/components/test'

export default class ReactNativeBaseTest extends Component {
    render() {
        return (
            <Provider store={store}>
                <Test />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('ReactNativeBaseTest', () => ReactNativeBaseTest);
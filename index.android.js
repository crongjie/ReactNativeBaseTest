/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { ReactNativePropRegistry } from 'react-native';
import React, { Component } from 'react';
import { Container, Content, Badge } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

export default class ReactNativeBaseTest extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Badge>2</Badge>
                    <Badge primary>2</Badge>
                    <Badge success>2</Badge>
                    <Badge info>2</Badge>
                    <Badge warning>2</Badge>
                    <Badge danger>2</Badge>
                    <Badge
                      style={{ backgroundColor: 'black' }}
                      textStyle={{ color: 'white' }}>
                        1866
                    </Badge>
                </Content>
            </Container>
        );
    }
}

AppRegistry.registerComponent('ReactNativeBaseTest', () => ReactNativeBaseTest);
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

let reducers = function(){
    return {}
}

let store = createStore(reducers)


export default class ReactNativeBaseTest extends Component {
    render() {
        return (
            <Provider store={store}>
                <Container>
                    <Header>
                        <Title>Test Header</Title>
                    </Header>
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
                        <Footer>
                            <FooterTab>
                                <Button transparent>
                                    <Icon name='ios-call' />
                                </Button>
                                <Button transparent>
                                    <Icon name='ios-call' />
                                </Button>
                            </FooterTab>
                        </Footer>
                </Container>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('ReactNativeBaseTest', () => ReactNativeBaseTest);
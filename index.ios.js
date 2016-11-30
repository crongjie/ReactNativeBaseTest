/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { ReactNativePropRegistry } from 'react-native';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import { Container, Content, List, ListItem, InputGroup, Input, Text, Picker, Header, Title, Footer, FooterTab, Button, Icon, Badge } from 'native-base';
const Item = Picker.Item;

function hello_world() {
    alert('Hello world!')
}

export default class ReactNativeBaseTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: [],
            },
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value,
        });
    }
    //https://facebook.github.io/react-native/docs/flexbox.html
    //https://facebook.github.io/react-native/docs/view.html
    render() {
        return (
            <Container>
                <Header>
                    <Title>This is my header</Title>
                </Header>

                <Content>
                 <View style={{ alignItems: 'center', flex: 1, flexDirection: 'row', padding: 20}}>
                            <Icon name="ios-person" style={{ color: '#0A69FE', flex: 0.1 }} />
                            <Text tyle={{ flex: 0.1 }}>First Name</Text>
                            <InputGroup borderType='rounded' style={{ flex: 0.6 }} >
                                <Input placeholder='Type your name here'/>
                            </InputGroup>
                            <Picker style={{ backgroundColor: 'red', flex: 0.2 }}
                              iosHeader="Select one"
                              mode="dropdown"
                              selectedValue={this.state.selected1}
                              onValueChange={this.onValueChange.bind(this)} >
                                <Item label="Chan" value="key0" />
                                <Item label="Lee" value="key1" />
                                <Item label="Zhang" value="key2" />
                            </Picker>
                 </View>

                    <List>
                       <ListItem iconLeft>
                            <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                            <Text>First Name</Text>
                            <Input placeholder='Type your name here'/>
                            <Picker
                              iosHeader="Select one"
                              mode="dropdown"
                              selectedValue={this.state.selected1}
                              onValueChange={this.onValueChange.bind(this)} >
                                <Item label="Chan" value="key0" />
                                <Item label="Lee" value="key1" />
                                <Item label="Zhang" value="key2" />
                            </Picker>
                        </ListItem>

                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                                <Input placeholder="EMAIL" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                                <Input placeholder="PASSWORD" secureTextEntry />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-call" style={{ color: '#0A69FE' }} />
                                <Input placeholder="PHONE" keyboardType="numeric" />
                            </InputGroup>
                        </ListItem>

                        <ListItem iconLeft>
                            <Icon name="ios-transgender" style={{ color: '#0A69FE' }} />
                            <Text>GENDER</Text>
                            <Picker
                              iosHeader="Select one"
                              mode="dropdown"
                              selectedValue={this.state.selected1}
                              onValueChange={this.onValueChange.bind(this)} >
                                <Item label="Male" value="key0" />
                                <Item label="Female" value="key1" />
                                <Item label="Other" value="key2" />
                            </Picker>
                        </ListItem>
                    
                        <ListItem>
                            <InputGroup >
                                <Input stackedLabel label="Permanent Address" placeholder="Address" />
                            </InputGroup>
                        </ListItem>
                    </List>
                    <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                        Sign Up
                    </Button>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button onPress = { hello_world }> Click Me! </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
AppRegistry.registerComponent('ReactNativeBaseTest', () => ReactNativeBaseTest);

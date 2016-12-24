import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Container, Content, Badge, Header, Title, Footer, FooterTab, Button,Text, Icon } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { setName, INITIAL_STATE } from '../actions/test'

class Test extends Component {
    render() {
        return (
                <Container>
                    <Header>
                        <Title>Name: { this.props.name }</Title>
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
                                <Button transparent onPress = { this.props.setName }>
                                    <Icon name='ios-call' />
                                </Button>
                                <Button transparent>
                                    <Icon name='ios-call' />
                                </Button>
                            </FooterTab>
                        </Footer>
                </Container>
        );
    }
}
let count = 0;

// Connect to Redux
function mapStateToProps(state) {
   //console.log('Redux state - RGoogleInfo');
    //console.log(state);
  return {
    name: state.test.name
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setName(name) {
        console.log(name);
        ++count;
        dispatch(setName(name + count.toString()));
    },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);

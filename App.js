import React from 'react';
import { AppLoading } from 'expo';
import { StyleProvider, Drawer, Content, Body, Title, Button, Icon, Left, Right, Header, Container } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

export default class App extends React.Component {
  state = { fontsAreLoaded: false };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ fontsAreLoaded: true });

  }

  render() {
    return (
      <StyleProvider  style={getTheme()}>
        <Container style={{ backgroundColor: 'red'}}>
          <Content>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

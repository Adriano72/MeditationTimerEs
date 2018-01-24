import React from 'react';
import { AppLoading } from 'expo';
import { StackNavigator } from 'react-navigation';

import { StyleProvider, Text, Drawer, Content, Body, Title, Button, Icon, Left, Right, Header, Container } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

import DrawerMenu from './src/components/DrawerMenu';

class MeditationTimer extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = { fontsAreLoaded: false };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ fontsAreLoaded: true });
  }

  closeDrawer = () => {
      this.drawer._root.close();
    };
  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    if (this.state.fontsAreLoaded) {
      return (
        <StyleProvider style={getTheme(material)}>
          <Container>
            <Drawer
              ref={(ref) => { this.drawer = ref; }}
              content={<DrawerMenu navigator={this.navigator} />}
              onClose={() => this.closeDrawer()}
            >
              <Header style={styles.headerStyle}>
                <Left>
                  <Button
                    transparent
                    onPress={() => this.openDrawer()}
                  >
                    <Icon name='menu' />
                  </Button>
                </Left>
                <Body>
                  <Title >Dashboard</Title>
                </Body>
              </Header>
            </Drawer>
          </Container>
        </StyleProvider>
      );
    }
    return (
      <AppLoading
        startAsync={this._cacheResourcesAsync}
        onFinish={() => this.setState({ isReady: true })}
        onError={console.warn}
      />
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

const styles = {
  headerStyle: {
    backgroundColor: '#00796B'
  }
};

const AppHome = StackNavigator({
  Home: { screen: MeditationTimer },
  DrawerMenu: { screen: DrawerMenu }
});

export default class App extends React.Component {
  render() {
    return <AppHome />;
  }
}

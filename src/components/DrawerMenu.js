import React from 'react';
import { Image, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { StyleProvider, Button, Text, Content } from 'native-base';


import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

import { DRAWER_COVER } from '../images';

const deviceHeight = Dimensions.get('window').height;

class DrawerMenu extends React.Component {

  executeLogout() {
    console.log('LOGOUT NOW!!!!!!!!!!!!!!');
    this.props.logoutUser();
  }

  render() {
    console.log('**+USER IS: ', this.props.user);

    return (
      <StyleProvider style={getTheme(material)}>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: '#ffff', top: -1 }}
        >
        <Image source={DRAWER_COVER} style={styles.drawerCover} />

        <Button transparent dark>
          <Text>Daily wisdom</Text>
        </Button>
        <Button transparent dark>
          <Text>Today's video</Text>
        </Button>
        <Button
          transparent
          dark
          onPress={() => navigate('Details')}
        >
          <Text>Opening prayer</Text>
        </Button>
        <Button transparent warning>
          <Text>Restart course</Text>
        </Button>
        <Button
          transparent
          danger
          //onPress={this.executeLogout.bind(this)}
        >
          <Text>Logout</Text>
        </Button>
        </Content>

      </StyleProvider>

    );
  }
}

const styles = {
  drawerCover: {
    alignSelf: 'stretch',
    height: deviceHeight / 3.5,
    width: null,
    position: 'relative',
    marginBottom: 10
  }
};

export default DrawerMenu;

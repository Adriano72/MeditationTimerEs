import React from "react";
import { Image, Linking } from "react-native";
import { StyleProvider, Container, Content, Text, Button, Icon } from "native-base";
import { DRAWER_COVER } from '../images';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

export default class SideBar extends React.Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Content>
          
          <Image
            source={DRAWER_COVER}
            style={{
              width: null,
              resizeMode: 'cover',
              height: 120   
            }}
          /> 
          <Button
            iconleft
            transparent
            dark
            onPress={() => this.props.navigation.navigate('Temporizador​')}
          >
            <Icon name='md-stopwatch' />
            <Text>Temporizador​</Text>
          </Button>
          <Button
            iconleft
            transparent
            primary
            onPress={() => this.props.navigation.navigate('Oración Inicial')}
          >
            <Icon name='md-log-in' />
            <Text>Oración Inicial</Text>
          </Button>
          <Button
            iconleft
            transparent
            primary
            onPress={() => this.props.navigation.navigate('Oración de Clausura')}
          >
            <Icon name='md-log-out' />
            <Text>Oración de Clausura</Text>
          </Button>
          <Button 
            iconleft
            transparent 
            warning
            onPress={() => { Linking.openURL('http://wccm.es'); }}
          >
            <Icon name='ios-globe-outline' />
            <Text>WCCM Sitio web</Text>
          </Button>
          
          
          </Content>
        </Container>
      </StyleProvider>
      
    );
  }
}

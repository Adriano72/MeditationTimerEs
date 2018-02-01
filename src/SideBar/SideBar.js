import React from "react";
import { AppRegistry, Image, StatusBar, SafeAreaView } from "react-native";
import { StyleProvider, Container, Content, Text, List, ListItem } from "native-base";
import { DRAWER_COVER } from '../images';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

const routes = ["Temporizador​", "Oración Inicial", "Oración de Clausura"];


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
              
            <List
              dataArray={routes}
              renderRow={data => {
                return (
                  <ListItem
                    button
                    onPress={() => this.props.navigation.navigate(data)}>
                    <Text>{data}</Text>
                  </ListItem>
                );
              }}
            />
          
          </Content>
        </Container>
      </StyleProvider>
      
    );
  }
}

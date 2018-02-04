import React from "react";
import { StyleProvider, Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text, H2 } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

export default class OpeningPrayer extends React.Component {
  
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Content padder>
          <Card>
            <CardItem header style={{ backgroundColor: '#bdbdbd' }}>
              <H2>Oración Inicial</H2>
            </CardItem>
            <CardItem style={{ backgroundColor: '#e0e0e0' }}>
              <Body>
                <Text>
                Padre celestial, abre nuestros corazones a la presencia silenciosa del Espíritu de tu Hijo.{'\n'}
                Guíanos a este misterioso silencio donde tu Amor se revela a todo aquél que clama Maranatá, ven Señor Jesús.
                </Text>
              </Body>
            </CardItem>            
          </Card>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
OpeningPrayer.navigationOptions = ({ navigation }) => ({
  header: (
    <StyleProvider style={getTheme(material)}>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Oración Inicial</Title>
        </Body>
        <Right />
      </Header>
    </StyleProvider>
  )
});

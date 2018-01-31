import React from "react";
import { AppRegistry, Alert } from "react-native";
import { StyleProvider, Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text, H2} from "native-base";
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

export default class ClosingPrayer extends React.Component {
  
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container style={{ backgroundColor: '#fff8e1' }}>
          <Content padder>
          <Card style={{ backgroundColor: '#9E9E9E' }}>
            <CardItem header>
              <H2>Oración de Clausura</H2>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                Que este grupo sea un verdadero hogar espiritual para el buscador, un amigo para el
                solitario y un guía para el desorientado.{'\n'}
                Que el Espíritu Santo fortalezca a los que aquí oramos para servir a todos los que
                vengan y acogerlos como el Cristo.{'\n'}
                Que en el silencio de este cuarto todo sufrimiento, violencia y confusión del mundo
                encuentren la fuerza que consuela, renueva y enaltece el espíritu humano.{'\n'}
                Que este silencio sea capaz de abrir los corazones de hombres y mujeres a la visión de
                Dios y, por lo tanto, entre ellos, en amor y paz, en justicia y dignidad humana.{'\n'}
                Que la belleza de la Vida Divina llene con alegre esperanza a este grupo y a los
                corazones de todos los que aquí oramos.{'\n'}
                Que todos los que hayamos venido cargados con los problemas de la humanidad nos
                vayamos agradecidos de la maravilla de la vida humana.{'\n'}{'\n'}
                Te lo pedimos por Cristo, nuestro Señor. Amén.
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
ClosingPrayer.navigationOptions = ({ navigation }) => ({
  header: (
    <StyleProvider style={getTheme(material)}>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Oración de Clausura</Title>
        </Body>
        <Right />
      </Header>
    </StyleProvider>
  )
});

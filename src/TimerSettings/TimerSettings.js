import React from 'react';
import { View, StatusBar, TextInput } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from 'native-base';
import ModalSelector from 'react-native-modal-selector';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      secondsRemaining: 20,
      textInputValue: '',
      timerStarted: false
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startTimer() {
    console.log('START', this.state.secondsRemaining);
    //{ m : parseInt(this.state.secondsRemaining/60), s: (this.state.secondsRemaining%60) };
    this.setState({ secondsRemaining: this.state.secondsRemaining });
    this.interval = setInterval(this.tick, 1000);
  }

  tick = () => {
    this.setState({ secondsRemaining: this.state.secondsRemaining - 1 });
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  }

  render() {

    let index = 0;
    const data = [
        { key: 0, section: true, label: 'Tiempo' },
        { key: 5, label: '5 min' },
        { key: 10, label: '10 min' },
        { key: 15, label: '15 min' },
        { key: 20, label: '20 min' },
        { key: 25, label: '25 min' },
        { key: 30, label: '30 min' },
        { key: 35, label: '35 min' },
        { key: 40, label: '40 min' },
        { key: 45, label: '45 min' },
        { key: 50, label: '50 min' },
        { key: 55, label: '55 min' },
        { key: 60, label: '60 min' },
        
    ];

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Meditation Timer</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
            <Card>
                <CardItem>
                <Body>
                    <Text>Chat App to talk some awesome people!</Text>
                </Body>
                </CardItem>
            </Card>
           
          <Button full rounded primary
              style={{ marginTop: 10 }}
              onPress={this.startTimer.bind(this)}
          >
            <Text>Comienza a meditar</Text>
          </Button>

          <Text>{this.state.secondsRemaining}</Text>

          <View style={{flex:1, justifyContent:'space-around', padding:50}}>

                
                <ModalSelector
                    data={data}
                    initValue="Tiempo de sesión"
                    onChange={(option) => {
                      //alert(option.key); 
                      this.setState({ secondsRemaining: option.key });
                    }} 
                />

            </View>
        </Content>
      </Container>
    );
  }
}

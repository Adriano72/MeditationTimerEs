import React from 'react';
import { View, StyleSheet, StatusBar, TextInput } from 'react-native';
import { StyleProvider, Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, H1} from 'native-base';
import ModalSelector from 'react-native-modal-selector';
import Expo, { Audio } from 'expo';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

const ding = require('../sounds/LaurenceBowl.mp3');

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      secondsRemaining: 1200,
      timerStarted: false
    };
  }
/*
  async componentDidMount() {
    await Audio.setAudioModeAsync({
        playsInSilentLockedModeIOS: true,
        playsInSilentModeIOS: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        shouldDuckAndroid: false,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });
    this.setState({loaded: true })
  }
  */

  componentWillUpdate(nextProps, nextState) {
    if (this.state.timerStarted !== nextState.timerStarted) {
      console.log('DINGGGGGGGG!!!!!', nextState.timerStarted);
      this.playSound();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  playSound = async () => {
    await Expo.Audio.setIsEnabledAsync(true);
    await Expo.Audio.setAudioModeAsync(
      { playsInSilentModeIOS: true,
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        shouldDuckAndroid: false
      }
    );
    const sound = new Expo.Audio.Sound();
    await sound.loadAsync(require('../sounds/LaurenceBowl.mp3'));
    
    await sound.playAsync();
  };

  startTimer() {
    console.log('START', this.state.secondsRemaining);
    //{ m : parseInt(this.state.secondsRemaining/60), s: (this.state.secondsRemaining%60) };
    this.setState({ secondsRemaining: this.state.secondsRemaining, timerStarted: true });
    this.interval = setInterval(this.tick, 1000);
  }

  fmtMSS(s) {
    return (s-(s%=60))/60+(9<s?':':':0')+s
  }

  tick = () => {
    this.setState({ secondsRemaining: this.state.secondsRemaining - 1 });
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
      this.setState({ secondsRemaining: 1200, timerStarted: false });
    }
  }

  stopTimer = () => {
    clearInterval(this.interval);
    this.setState({ secondsRemaining: 1200, timerStarted: false });
  }

  render() {
    const data = [
        { key: 0, section: true, label: 'Tiempo' },
        { key: 300, label: '5 min' },
        { key: 600, label: '10 min' },
        { key: 450, label: '15 min' },
        { key: 1200, label: '20 min' },
        { key: 1500, label: '25 min' },
        { key: 1800, label: '30 min' },
        { key: 2100, label: '35 min' },
        { key: 2400, label: '40 min' },
        { key: 2700, label: '45 min' },
        { key: 3000, label: '50 min' },
        { key: 3300, label: '55 min' },
        { key: 3600, label: '60 min' },
        
    ];

    return (
      <StyleProvider style={getTheme(material)}>
        <Container style={{ backgroundColor: '#ffecb3' }}>
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
              <Title>Temporizador​</Title>
            </Body>
            <Right />
          </Header>
          {!this.state.timerStarted && 
            <Content padder>
              <ModalSelector
                    data={data}
                    initValue="Duración"
                    onChange={(option) => {
                      //alert(option.key); 
                      this.setState({ secondsRemaining: option.key });
                    }} 
              >  
                <Button
                  bordered
                  iconLeft
                  dark
                  block style={{ margin: 15, marginTop: 50 }}
                >
                  <Icon name='ios-alarm' />
                  <Text style={{ color: '#212121' }}>{this.state.secondsRemaining / 60}{' '}Min</Text>
                </Button>
              </ModalSelector>            
              <Button
                danger
                block style={{ margin: 15, marginTop: 50 }}
                onPress={this.startTimer.bind(this)}
              >
                <Text>Comenzar la Meditación</Text>
              </Button>
                
            </Content>           
          }
          {this.state.timerStarted && 
            
            <Content padder>
            <View style={{ alignSelf: 'center', paddingTop: '40%' }}>
              <H1>
                {this.fmtMSS(this.state.secondsRemaining)}
              </H1>              
              </View>
              <View style={{ alignSelf: 'center', paddingTop: '50%' }}>
              <Button 
                iconLeft
                dark
                onPress={this.stopTimer.bind(this)}
              >
                <Icon name='ios-close-circle-outline' />
                <Text>Stop</Text>
              </Button>
              </View>
            </Content> 
          }
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({

  transpButton: {
    marginTop: 40,
    textAlign: 'center'
  }
});

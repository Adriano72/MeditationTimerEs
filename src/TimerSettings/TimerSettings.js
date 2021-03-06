import React from 'react';
import { View, StyleSheet, Platform, Image } from 'react-native';
import { StyleProvider, Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Toast } from 'native-base';
import Slider from 'react-native-slider';
import ModalSelector from 'react-native-modal-selector';
import Expo, { Audio, KeepAwake } from 'expo';
import { BOWL } from '../images';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.sound = new Expo.Audio.Sound();

    this.state = {
      secondsRemaining: 1200,
      bellVolume: 1,
      timerStarted: false,
      soundState: null
    };
  }
  componentDidMount = async() => {
    await this.loadSound();
  }

  componentWillUnmount = async () => {
    this.unloadSound();
    clearInterval(this.interval);
  }

  unloadSound = async () => {
    console.log('*** UNLOAD SOUND ****');
    await this.sound.unloadAsync();
  }

  loadSound = async () => {
    await Expo.Audio.setIsEnabledAsync(true);
    await Expo.Audio.setAudioModeAsync({ 
        playsInSilentModeIOS: true,
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        shouldDuckAndroid: false
      }
    );
       
    await this.sound.loadAsync(require('../sounds/LaurenceBowl.mp3')); 
  };

  playSound = async () => {
    await this.sound.playAsync();
  }

  stopSound = async () => {
    await this.sound.stopAsync();
  }

  startTimer() {
    KeepAwake.activate();
    this.playSound();
  
    //{ m : parseInt(this.state.secondsRemaining/60), s: (this.state.secondsRemaining%60) };
    this.setState({ secondsRemaining: this.state.secondsRemaining, timerStarted: true });
    this.interval = setInterval(this.tick, 1000);
  }

  stopTimer = () => {
    this.setState({ secondsRemaining: 1200, timerStarted: false });
    this.stopSound();
    KeepAwake.deactivate();
    clearInterval(this.interval);    
  }

  fmtMSS(s) {
    return (s-(s%=60))/60+(9<s?':':':0')+s; // Formatta i secondi in minuti e secondi MM:ss
  }

  tick = () => {
    this.setState({ secondsRemaining: this.state.secondsRemaining - 1 });
    if (this.state.secondsRemaining <= 0) {
      Toast.show({
        text: 'Meditación terminata',
        duration: 4000
      });
      KeepAwake.deactivate();
      this.stopSound();
      this.playSound();
      clearInterval(this.interval);
      
      this.setState({ secondsRemaining: 1200, timerStarted: false });
    }
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
          <Container style={{ marginTop: (Platform.OS === 'android') ? Expo.Constants.statusBarHeight : 0 }}>
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
                    iconLeft
                    bordered
                    dark
                    block style={{ margin: 15, marginTop: 10 }}
                  >
                    <Icon name='md-timer' />
                    <Text style={{ color: '#212121' }}>Duración:{' '}{this.state.secondsRemaining / 60}{' '}Min</Text>
                  </Button>
                </ModalSelector>            
                <Button
                  danger
                  
                  block style={{ margin: 15, marginTop: 30 }}
                  onPress={this.startTimer.bind(this)}
                >
                  <Text>Comenzar la Meditación</Text>
                </Button>
                
                <Image
                  source={BOWL}
                  style={{
                    width: null,
                    resizeMode: 'contain',
                    height: 120,
                    marginVertical: 70   
                  }}
                />
              
              <View style={styles.container}>
              <Text>
                  Volume control
                </Text>
                <Slider
                  minimumTrackTintColor = '#D32F2F'
                  maximumTrackTintColor = '#FFCDD2'
                  thumbTintColor='#D32F2F'
                  value={this.state.bellVolume}
                  onValueChange={value => {
                    this.sound.setVolumeAsync(value);
                    this.setState({ bellVolume: value });
                    }
                  } 
                />
                
              </View>
                  
              </Content>           
            }
            {this.state.timerStarted && 
              
              <Content padder>
              <View style={{ alignSelf: 'center', paddingTop: '30%' }}>
                <Text style={{ fontSize: 60 }}>
                  {this.fmtMSS(this.state.secondsRemaining)}
                </Text>              
                </View>
                <Image
                  source={BOWL}
                  style={{
                    width: null,
                    resizeMode: 'contain',
                    height: 120,
                    marginVertical: 70   
                  }}
                />
                <View style={{ alignSelf: 'center' }}>
                <Button 
                  iconLeft
                  dark
                  onPress={this.stopTimer.bind(this)}
                >
                  <Icon style={{ color: 'white' }} name='ios-close-circle-outline' />
                  <Text style={{ color: 'white' }}>Stop</Text>
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
  },
  centerText: {
    textAlign: 'center'
  }
});

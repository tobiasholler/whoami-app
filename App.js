import * as React from 'react';
import { Text, Image, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainMenu from './gui/MainMenu';
import Settings from './gui/Settings';
import PlayMenu from './gui/PlayMenu';
import CreateGame from './gui/CreateGame';
import JoinGame from './gui/JoinGame';

const stackNavigator = createStackNavigator(
  {
    MainMenu: { screen: MainMenu },
    MainMenu: { screen: MainMenu },
    Settings: { screen: Settings },
    PlayMenu: { screen: PlayMenu },
    CreateGame: { screen: CreateGame },
    JoinGame: { screen: JoinGame },
  },
  {
    initialRouteName: 'MainMenu',
    headerMode: 'none'
  }
);

export default createAppContainer(stackNavigator);

/*import { Card } from 'react-native-paper';

export default class MainMenu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Wer bin ich?</Text>
        <View style={{ height: 48 }} />
        <GradientButton text="Spielen" style={{  }} onPressAction={this.playAction} />
        <GradientButton text="Einstellungen" style={{  }} onPressAction={this.playAction} />
      </View>
    );
  }
  playAction() {
    alert("play")
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 72,
    textAlign: "center",
  }
});*/

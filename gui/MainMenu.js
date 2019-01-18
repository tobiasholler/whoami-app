import * as React from 'react';
import { QuickMenu, QuickButton } from '../quickui/quickui';
import { StackActions, NavigationActions } from 'react-navigation';

export default class MainMenu extends React.Component {
  render() {
    return (
      <QuickMenu title="Wer bin ich?" descriptionText="das Spiel">
        <QuickButton text="Spielen" onPress={this.play.bind(this)} />
        <QuickButton text="Wörterbuch" onPress={this.dict.bind(this)} />
        <QuickButton text="Einstellungen" onPress={this.settings.bind(this)} />
      </QuickMenu>
    );
  }
  play() {
    this.props.navigation.push("PlayMenu");
  }
  dict() {
    alert('dict');
  }
  settings(e) {
    this.props.navigation.push('Settings');
  }
}

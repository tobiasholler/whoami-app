import * as React from 'react';
import { View, Text } from 'react-native';
import { QuickMenu, QuickButton} from "../quickui/quickui"

export default class Settings extends React.Component {
  render() {
    return (
      <QuickMenu title="Einstellungen">
      </QuickMenu>
    );
  }
}

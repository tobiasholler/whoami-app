import * as React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';

let styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 72,
    textAlign: 'center',
  },
  button: {
    marginVertical: 8,
    marginHorizontal: '10%',
    height: 64,
  },
  spacer: {
    height: 48,
  },
  descriptionText: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 5 
  }
});

export class QuickMenu extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.descriptionText}>{this.props.descriptionText}</Text>
        <View style={styles.spacer} />
        <View>{this.props.children}</View>
        <View style={styles.spacer} />
      </View>
    );
  }
}

export class QuickButton extends Component {
  render() {
    return (
      <GradientButton
        text={this.props.text}
        style={styles.button}
        onPressAction={this.props.onPress}
      />
    );
  }
}

export class QuickToggleButton extends Component {
  constructor() {
    this.currentToggleIndex = this.props.toggleIndex | 0
  }
  toggleHandler() {
    this.props.onToggle()
  }
  render() {
    return (
      <View>
        <GradientButton
          text={this.props.text}
          style={styles.button}
          onPressAction={this.toggleHandler.bind(this)}
        />
      </View>
    );
  }
}

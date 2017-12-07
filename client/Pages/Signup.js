import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { launchForm } from '../actions';
import LaunchOptions from '../Components/Signup/launchOptions';
import Submitted from '../Components/Signup/submitted';
import SignupForm from '../Components/Signup/signupForm';
import CreatePin from '../Components/Signup/CreatePin';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      launched: false,
      visible: false,
      visibility: new Animated.Value(1),
    }
  }

  handleSubmit() {
    this.setState({ visible: true });
    Animated.timing(this.state.visibility, {
      toValue: 1,
      duration: 5000,
    }).start(() => {
      this.setState({ visible: false });
    })
  }

  launchSignup() {
    this.setState({ launched: true })
  }

  render() {
    return (
      <View>
        {!this.state.launched ?
          <LaunchOptions launchSignup={this.launchSignup.bind(this)} navigation={this.props.navigation} /> :
          <CreatePin />
        }
        {!this.state.visible ?
          <SignupForm handleSubmit={this.handleSubmit.bind(this)} /> :
          <Animated.View style={{ opacity: this.state.visibility }}><Submitted /></Animated.View>
        }
      </View>
    )
  }
}

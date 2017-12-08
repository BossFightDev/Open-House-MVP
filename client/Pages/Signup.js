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
      confirmed: false,
      visible: false,
      visibility: new Animated.Value(1),
      pin: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.launchSignup = this.launchSignup.bind(this)
    this.confirmPin = this.confirmPin.bind(this)
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
    this.setState({ launched: !this.state.launched })
  }

  confirmPin() {
    this.setState({ confirmed: true })
  }

  render() {
    return (
      <View>
        {!this.state.launched ?
          <View>
            <LaunchOptions launchSignup={this.launchSignup} navigation={this.props.navigation} />
            <SignupForm handleSubmit={() => {}} />
          </View> :
        !this.state.confirmed ?
          <CreatePin confirmPin={this.confirmPin} launchSignup={this.launchSignup}/> :
        !this.state.visible ?
          <SignupForm handleSubmit={this.handleSubmit} /> :
          <Animated.View style={{ opacity: this.state.visibility }}><Submitted /></Animated.View>
        }
      </View>
    )
  }
}

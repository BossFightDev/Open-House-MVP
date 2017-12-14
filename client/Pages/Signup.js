import React, { Component } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import { launchForm } from '../actions';
import LaunchOptions from '../Components/Signup/launchOptions';
import Submitted from '../Components/Signup/submitted';
import SignupForm from '../Components/Signup/signupForm';
import CreatePin from '../Components/Signup/CreatePin';
import { portrait, landscape } from "./Style/Signup-Styles"

const {height, width} = Dimensions.get('window');
const aspectRatio = height/width;
console.log('HEIGHT: ' + height);
console.log('WIDTH: ' + width);
const changeScreenOrientation = () => {
  Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
}
let styles;
if (aspectRatio > 1.6) {
   styles = portrait;
  console.log('IPHONE');

}
else {
   styles = landscape;
  changeScreenOrientation();
  console.log('IPAD');
}

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
      <View style={styles.container}>
        {!this.state.launched ?
          <View>
            <LaunchOptions launchSignup={this.launchSignup} navigation={this.props.navigation} />
            <SignupForm handleSubmit={() => {}} styles={styles} />
          </View> :
        !this.state.confirmed ?
          <CreatePin confirmPin={this.confirmPin} launchSignup={this.launchSignup}/> :
        !this.state.visible ?
          <SignupForm handleSubmit={this.handleSubmit} styles={styles} /> :
          <Animated.View style={{ opacity: this.state.visibility }}><Submitted /></Animated.View>
        }
      </View>
    )
  }
}

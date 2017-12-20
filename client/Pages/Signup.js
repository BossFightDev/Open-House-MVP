import React, { Component } from 'react';
import { View, Animated, Dimensions, Modal } from 'react-native';
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
      confirmed: false,
      launched: false,
      visible: false,
      visibility: new Animated.Value(1),
      pin: '',
      modalVisible: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.confirmPin = this.confirmPin.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.launchSignup = this.launchSignup.bind(this)
  }

  componentDidMount() {
    this.setState({ modalVisible: true })
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

  confirmPin() {
    this.setState({ confirmed: true })
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible })
  }

  launchSignup() {
    this.setState({ launched: !this.state.launched })
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          transparent={true}
          visible={this.state.modalVisible}
          onDismiss={() => this.launchSignup()}
        >
          <LaunchOptions navigation={this.props.navigation} toggleModal={this.toggleModal} styles={styles} />
        </Modal>
        {this.state.launched && !this.state.confirmed ?
          <CreatePin confirmPin={this.confirmPin} toggleModal={this.toggleModal} launchSignup={this.launchSignup} styles={styles} /> :
        !this.state.visible ?
          <SignupForm handleSubmit={this.handleSubmit} styles={styles} /> :
          <Animated.View style={{ opacity: this.state.visibility }}><Submitted styles={styles} /></Animated.View>
        }
      </View>
    )
  }
}

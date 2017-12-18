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
      visible: false,
      visibility: new Animated.Value(1),
      pin: '',
      modalVisible: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.confirmPin = this.confirmPin.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
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

  render() {
    return (
      <View style={styles.container}>
        <Modal
          // animationType={'slide'}
          transparent={true}
          visible={this.state.modalVisible}
          // onRequestClose={this.props.navigation.goBack()}
        >
          <LaunchOptions navigation={this.props.navigation} toggleModal={this.toggleModal} />
        </Modal>
        {!this.state.modalVisible && !this.state.confirmed ?
          <CreatePin confirmPin={this.confirmPin} toggleModal={this.toggleModal}/> :
        !this.state.visible ?
          <SignupForm handleSubmit={this.handleSubmit} styles={styles} /> :
          <Animated.View style={{ opacity: this.state.visibility }}><Submitted /></Animated.View>
        }
      </View>
    )
  }
}

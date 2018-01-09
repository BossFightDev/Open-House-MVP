import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import CustomText from '../CustomText';
import { connect } from 'react-redux'
import { createPin, confirmPin } from '../../actions'

class CreatePin extends Component {
  constructor() {
    super();

    this.state = {
      created: false,
      confirmed: false,
      pin: '',
      confirmedPin: '',
      errorMessage: '',
      pin1Focused: false,
      pin2Focused: false,
      pin3Focused: false,
      pin4Focused: false,
    }
    this.cancelPin = this.cancelPin.bind(this)
    this.clearPins = this.clearPins.bind(this)
    this.setPin = this.setPin.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  componentDidUpdate() {
    const { pin, confirmedPin } = this.state
    if (this.props.exiting && pin.length === 4) {
      if (this.props.confirmPin(pin)) {
        this.props.navigation.navigate('OpenHouses')
      } else {
        this.setState({ errorMessage: 'PIN doesn\'t match! Try again.'})
        setTimeout(() => {
          this.setState({ errorMessage: ''})
        }, 5000)
        this.cancelPin()
        this.clearPins()
      }
    }
    else if (pin.length === 4 && confirmedPin.length === 4) {
      if (pin === confirmedPin) {
        this.props.validatePin()
        this.props.createPin({pin})
      }
      else {
        this.setState({ errorMessage: 'PIN\'s don\'t match! Try again.'})
        setTimeout(() => {
          this.setState({ errorMessage: ''})
        }, 5000)
        this.cancelPin()
        this.clearPins()
      }
    }
  }

  cancelPin() {
    this.setState({ created: false })
    this.setState({ confirmed: false })
    this.setState({ pin: '' })
    this.setState({ confirmedPin: '' })
  }

  clearPins() {
    this.refs.pin1.clear()
    this.refs.pin2.clear()
    this.refs.pin3.clear()
    this.refs.pin4.clear()
    this.refs.pin1.focus()
  }

  setPin(event) {
    if (!this.state.created) {
      const newPin = this.state.pin.concat(event.nativeEvent.text)
      this.setState({ pin: newPin })
    } else {
      const newPin = this.state.confirmedPin.concat(event.nativeEvent.text)
      this.setState({ confirmedPin: newPin })
    }
  }

  onFocus(focused) {
    if (focused === 'pin1') this.setState({ pin1Focused: true })
    else if (focused === 'pin2') this.setState({ pin2Focused: true })
    else if (focused === 'pin3') this.setState({ pin3Focused: true })
    else if (focused === 'pin4') this.setState({ pin4Focused: true })
  }

  onBlur(blurred) {
    if (blurred === 'pin1') this.setState({ pin1Focused: false })
    else if (blurred === 'pin2') this.setState({ pin2Focused: false })
    else if (blurred === 'pin3') this.setState({ pin3Focused: false })
    else if (blurred === 'pin4') this.setState({ pin4Focused: false })
  }

  render() {
    let pin1Border = this.state.pin1Focused ? 'blue' : '#ddd'
    let pin2Border = this.state.pin2Focused ? 'blue' : '#ddd'
    let pin3Border = this.state.pin3Focused ? 'blue' : '#ddd'
    let pin4Border = this.state.pin4Focused ? 'blue' : '#ddd'

    let pinMessage = !this.state.created ? 'Create PIN to launch' : 'Re-enter PIN to confirm'

    return (
      <View style={[this.props.styles.container, {justifyContent: 'center', alignSelf: 'center'}]}>
        <CustomText style={{fontSize: 18}}>{pinMessage}</CustomText>
        <View style={this.props.styles.pinContainer}>
          <TextInput
            ref='pin1'
            keyboardType={'numeric'}
            maxLength={1}
            autoFocus={true}
            onFocus={() => this.onFocus('pin1')}
            onBlur={() => this.onBlur('pin1')}
            style={[this.props.styles.pinInput, { borderColor: pin1Border }]}
            onChange={this.setPin}
            onChangeText={() => this.refs.pin2.focus()}
          />
          <TextInput
            ref='pin2'
            keyboardType={'numeric'}
            maxLength={1}
            onFocus={() => this.onFocus('pin2')}
            onBlur={() => this.onBlur('pin2')}
            style={[this.props.styles.pinInput, { borderColor: pin2Border }]}
            onChange={this.setPin}
            onChangeText={() => this.refs.pin3.focus()}
          />
          <TextInput
            ref='pin3'
            keyboardType={'numeric'}
            maxLength={1}
            onFocus={() => this.onFocus('pin3')}
            onBlur={() => this.onBlur('pin3')}
            style={[this.props.styles.pinInput, { borderColor: pin3Border }]}
            onChange={this.setPin}
            onChangeText={() => this.refs.pin4.focus()}
          />
          <TextInput
            ref='pin4'
            keyboardType={'numeric'}
            maxLength={1}
            onFocus={() => this.onFocus('pin4')}
            onBlur={() => this.onBlur('pin4')}
            style={[this.props.styles.pinInput, { borderColor: pin4Border }]}
            onChange={this.setPin}
            onChangeText={() => {
              if (!this.state.created) {
                this.setState({ created: true })
                this.clearPins()
              }
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            if (this.props.exiting) this.props.exitingPage()
            else {
              this.props.toggleModal()
              this.props.launchSignup()
            }
          }}>
          <CustomText style={{color: 'blue', margin: '1%', fontSize: 16}}>
            Cancel
          </CustomText>
        </TouchableOpacity>
        <CustomText font='bold' style={{color: 'red', marginTop: '5%'}}>
          {this.state.errorMessage}
        </CustomText>
      </View>
    )
  }
}

const mapDispatchToProps = {
  createPin,
  confirmPin
}

export default connect(null, mapDispatchToProps)(CreatePin)

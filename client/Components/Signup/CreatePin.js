import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      created: false,
      confirmed: false,
      pin: '',
      confirmedPin: '',
    }
    this.cancelPin = this.cancelPin.bind(this)
    this.clearPins = this.clearPins.bind(this)
    this.setPin = this.setPin.bind(this)
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

  setPin(field, value) {
    if (field === 'pin') {
      const { pin } = this.state
      const newPin = pin.concat(value)
      this.setState({ pin: newPin })
      console.log('pin: ' + this.state.pin)
    } else {
      const { confirmedPin } = this.state
      const newPin = confirmedPin.concat(value)
      this.setState({ confirmedPin: newPin })
      console.log('confirmedPin: ' + this.state.confirmedPin)
    }
  }

  render() {
    return (
      <View style={{flexDirection: 'column', justifyContent: 'center'}}>
        {!this.state.created ?
          <Text>Create PIN to launch</Text> : <Text>Re-enter PIN to confirm</Text>
        }
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{textAlign: 'center'}}
            ref='pin1'
            keyboardType={'numeric'}
            maxLength={1}
            autoFocus={true}
            style={{borderColor: 'black', borderWidth: 1, width: 25}}
            onChangeText={(num) => {
              if (!this.state.created) this.setPin('pin', num)
              else this.setPin('confirmPin', num)
              this.refs.pin2.focus()
            }}
          />
          <TextInput
            ref='pin2'
            keyboardType={'numeric'}
            maxLength={1}
            style={{borderColor: 'black', borderWidth: 1, width: 25}}
            onChangeText={(num) => {
              if (!this.state.created) this.setPin('pin', num)
              else this.setPin('confirmPin', num)
              this.refs.pin3.focus()
            }}
          />
          <TextInput
            ref='pin3'
            keyboardType={'numeric'}
            maxLength={1}
            style={{borderColor: 'black', borderWidth: 1, width: 25}}
            onChangeText={(num) => {
              if (!this.state.created) this.setPin('pin', num)
              else this.setPin('confirmPin', num)
              this.refs.pin4.focus()
            }}
          />
          <TextInput
            ref='pin4'
            keyboardType={'numeric'}
            maxLength={1}
            style={{borderColor: 'black', borderWidth: 1, width: 25}}
            onChangeText={(num) => {
              if (!this.state.created) {
                this.setPin('pin', num)
                this.setState({ created: true })
                console.log('pin: ' + JSON.stringify(this.state))
                this.clearPins()
              }
              else if (!this.state.confirmed) {
                this.setPin('confirmPin', num)
                console.log('pin: ' + JSON.stringify(this.state))
                if (this.state.pin === this.state.confirmedPin) {
                  this.setState({ confirmed: true })
                  console.log('true')
                  this.props.confirmPin()
                } else {
                  // alert('PIN\'s don\'t match!')
                  this.setState({ created: false })
                  this.setState({ pin: '' })
                  this.setState({ confirmedPin: '' })
                  this.clearPins()
                  console.log('false')
                  this.props.confirmPin() // Not in final product
                }
              }
            }}
          />
          <TouchableOpacity
            onPress={this.cancelPin()}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

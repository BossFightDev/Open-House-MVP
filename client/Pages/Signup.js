import React, { Component } from 'react';
import { TextInput, View, Text, Button, Animated } from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons';
import { Dropdown } from 'react-native-material-dropdown';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phoneNumber: null,
      agent: '',
      realEstateAgent: 'Yes',
      agentName: '',
      openHouse: 'Select One',
      visible: false,
      visibility: new Animated.Value(0),
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   Animated.timing(this._visibility, {
  //     toValue: nextProps.visible ? 1 : 0,
  //     duration: 300
  //   });
  // }

  handleSubmit() {
    Animated.timing(this.state.visibility, {
      toValue: 1,
      duration: 300,
    }).start(() => {
      this.setState({ visible: true });
    })
  }

  render() {
    const options = [
      "Yes",
      "No"
    ];

    const data = [
      {value: 'Option One'},
      {value: 'Option Two'},
    ];

    const containerStyle = {
      opacity: this.state.visibility.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
      transform: [
        {
          scale: this.state.visibility.interpolate({
            inputRange: [0, 1],
            outputRange: [1.1, 1],
          }),
        },
      ],
    };

    if (!this.state.visible) {
      return (
        <View>
          <Text>Name</Text>
          <TextInput
            style={{borderColor: 'black', borderWidth: 1}}
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
          />
          <Text>E-mail Address</Text>
          <TextInput
            style={{borderColor: 'black', borderWidth: 1}}
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          />
          <Text>Phone Number</Text>
          <TextInput
            style={{borderColor: 'black', borderWidth: 1}}
            onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
            value={this.state.phoneNumber}
          />
          <Text>Are you currently working with a Real Estate Agent?</Text>
          <SegmentedControls
            options={ options }
            onSelection={ (selectedOption) => { this.setState({ realEstateAgent: selectedOption }) } }
            selectedOption={ this.state.realEstateAgent }
          />
          <TextInput
            style={{borderColor: 'black', borderWidth: 1}}
            onChangeText={(agentName) => this.setState({ agentName })}
            value={this.state.agentName}
          />
          <Dropdown
            label='Where did you hear about this open house?'
            value='Select One'
            onChangeText={(value) => this.setState({ openHouse: value })}
            data={data}
          />
          <Button
            onPress={ () => this.handleSubmit() }
            title='Submit'
            color='black'
          />
        </View>
      )
    } else {
      return (
        <Animated.View style={containerStyle}>
          <Text>Thank You</Text>
          <Text>Enjoy your visit</Text>
        </Animated.View>
      )
    }
  }
}

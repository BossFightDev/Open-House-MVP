import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
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
    }
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

    let agent = this.state.realEstateAgent === 'Yes' ? true : false;

    return (
      <View style={this.props.styles.container}>
        <Text>Welcome</Text>
        <Text>Please Sign in</Text>
        <View style={this.props.styles.inputContainer}>
          <Text>Name</Text>
          <TextInput
            style={this.props.styles.input}
            onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
            />
            <Text>E-mail Address</Text>
            <TextInput
              style={this.props.styles.input}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />
            <Text>Phone Number</Text>
            <TextInput
              style={this.props.styles.input}
              onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
              value={this.state.phoneNumber}
            />
            <Text>Are you currently working with a Real Estate Agent?</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{width:'33%'}}>
              <SegmentedControls
                options={ options }
                onSelection={ (selectedOption) => { this.setState({ realEstateAgent: selectedOption }) } }
                selectedOption={ this.state.realEstateAgent }
              />
              </View>
              <TextInput
                editable={agent}
                style={{
                  width: '66%',
                  backgroundColor: agent ? 'white' : 'darkgray',
                  borderColor: 'gray',
                  borderWidth: 1,
                  borderRadius: 3,
                }}
                onChangeText={(agentName) => this.setState({ agentName })}
                value={this.state.agentName}
              />
            </View>
            <Dropdown
              label='Where did you hear about this open house?'
              value='Select One'
              onChangeText={(value) => this.setState({ openHouse: value })}
              data={data}
            />
            <TouchableOpacity
              style={this.props.styles.button}
              onPress={this.props.handleSubmit}
            >
              <Text style={{ color: 'white' }}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}

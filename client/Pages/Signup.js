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
      visibility: new Animated.Value(1),
    }
  }

  // componentDidMount() {
  //   Animated.timing(this.state.visibility, {
  //     toValue: 1,
  //     duration: 10000,
  //   }).start()
  // }

  handleSubmit() {
    this.setState({ visible: true });
    Animated.timing(this.state.visibility, {
      toValue: 1,
      duration: 5000,
    }).start(() => {
      this.setState({ visible: false });
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

    let agent = this.state.realEstateAgent === 'Yes' ? true : false;

    return (
      <View>
        {!this.state.visible ?
          <View style={{alignItems: 'center'}}>
            <Text>Name</Text>
            <TextInput
              style={{borderColor: 'black', borderWidth: 1, width: '75%'}}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
            />
            <Text>E-mail Address</Text>
            <TextInput
              style={{borderColor: 'black', borderWidth: 1, width: '75%'}}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />
            <Text>Phone Number</Text>
            <TextInput
              style={{borderColor: 'black', borderWidth: 1, width: '75%'}}
              onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
              value={this.state.phoneNumber}
            />
            <Text>Are you currently working with a Real Estate Agent?</Text>
            <View style={{width: '75%'}}>
              <SegmentedControls
                options={ options }
                onSelection={ (selectedOption) => { this.setState({ realEstateAgent: selectedOption }) } }
                selectedOption={ this.state.realEstateAgent }
              />
            </View>
            <TextInput
              editable={agent}
              style={{
                borderColor: 'black',
                borderWidth: 1,
                backgroundColor: agent ? 'transparent' : 'darkgray',
                width: '75%'
              }}
              onChangeText={(agentName) => this.setState({ agentName })}
              value={this.state.agentName}
            />
            <Dropdown
              containerStyle={{width: '75%'}}
              pickerStyle={{width: '75%'}}
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
          </View> :
          <Animated.View style={{ opacity: this.state.visibility }}>
            <Text>Thank You</Text>
            <Text>Enjoy your visit</Text>
          </Animated.View>
        }
      </View>
    )
  }
}

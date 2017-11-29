import React, { Component } from 'react';
import { TextInput, View, Text, Picker, Button } from 'react-native';
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
      showPicker: false,
    }
  }

  static navigationOptions = {
    title: 'Sign Up'
  }

  pickerMenu() {
    this.setState({ showPicker: !this.state.showPicker })
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

    return(
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
          onChangeText={(value) => this.setState({ openHouse: value})}
          data={data}
        />
        {/* <Button
          onPress={() => {}}
          title='Submit'
          color='black'
        /> */}
        {/* <Button
          onPress={this.pickerMenu.bind(this)}
          title={this.state.openHouse}
          color='black'
        />
        {this.state.showPicker ? <Picker
          selectedValue={this.state.openHouse}
          onValueChange={(item) => this.setState({openHouse: item, showPicker: false})}
          mode="dropdown">
          <Picker.Item label='Select One' value='Select One' />
          <Picker.Item label='Option One' value='Option One' />
          <Picker.Item label='Option Two' value='Option Two' />
        </Picker> : null } */}
      </View>
    )
  }
}

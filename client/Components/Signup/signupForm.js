import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons';
import { Dropdown } from 'react-native-material-dropdown';
import CustomText from '../CustomText';
import axios from 'axios';
import { SERVER_URL } from '../../actions/index';
import { connect } from 'react-redux';
axios.defaults.withCredentials = true;


class SignUpForm extends Component {
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
      userFocused: false,
      emailFocused: false,
      phoneFocused: false,
      agentFocused: false,
      source: ''
    }
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  onSubmit = (openHouseId) => {
    const { name, email, source} = this.state;
    const phone = this.state.phoneNumber;
    const agent = this.state.agentName
    axios.post( openHouseId, name, email, phone, agent, source  )
      .then((data) => console.log(`successfully added a lead: ${data}`))
      .catch(()=> console.log('Failed adding a lead somewhere'))
    this.props.handleSubmit()
  }

  onFocus(focused) {
    if (focused === 'user') this.setState({ userFocused: true })
    else if (focused === 'email') this.setState({ emailFocused: true })
    else if (focused === 'phone') this.setState({ phoneFocused: true })
    else if (focused === 'agent') this.setState({ agentFocused: true })
  }

  onBlur(blurred) {
    if (blurred === 'user') this.setState({ userFocused: false })
    else if (blurred === 'email') this.setState({ emailFocused: false })
    else if (blurred === 'phone') this.setState({ phoneFocused: false })
    else if (blurred === 'agent') this.setState({ agentFocused: false })
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
    let userBorder = this.state.userFocused ? 'blue' : 'gray'
    let emailBorder = this.state.emailFocused ? 'blue' : 'gray'
    let phoneBorder = this.state.phoneFocused ? 'blue' : 'gray'
    let agentBorder = this.state.agentFocused ? 'blue' : 'gray'

    return (
      <ScrollView bounces={false}>
        <View style={this.props.styles.titleContainer}>
          <CustomText
            font='milkshake'
            style={this.props.styles.headerText}
          >
            Welcome
          </CustomText>
          <CustomText
            style={this.props.styles.subHeaderText}
          >
            Please Sign in
          </CustomText>
        </View>
          <View style={this.props.styles.inputContainer}>
            <CustomText>Name</CustomText>
            <TextInput
              style={[this.props.styles.input, { borderColor: userBorder }]}
              onFocus={() => this.onFocus('user')}
              onBlur={() => this.onBlur('user')}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
            />
            <CustomText>E-mail Address</CustomText>
            <TextInput
              style={[this.props.styles.input, { borderColor: emailBorder }]}
              onFocus={() => this.onFocus('email')}
              onBlur={() => this.onBlur('email')}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />
            <CustomText>Phone Number</CustomText>
            <TextInput
              style={[this.props.styles.input, { borderColor: phoneBorder }]}
              onFocus={() => this.onFocus('phone')}
              onBlur={() => this.onBlur('phone')}
              onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
              value={this.state.phoneNumber}
            />
            <CustomText>Are you currently working with a Real Estate Agent?</CustomText>
            <View style={{ flexDirection: 'column', height: '10%', marginBottom: '1.5%' }}>
              <View>
                <SegmentedControls
                  options={options}
                  onSelection={(selectedOption) => this.setState({ realEstateAgent: selectedOption })}
                  selectedOption={this.state.realEstateAgent}
                />
                </View>
                <TextInput
                  editable={agent}
                  style={[this.props.styles.input,
                    { backgroundColor: agent ? 'white' : 'darkgray', borderColor: agentBorder, height: '75%' }
                  ]}
                  onFocus={() => this.onFocus('agent')}
                  onBlur={() => this.onBlur('agent')}
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
              onPress={() => this.onSubmit(this.props.property.openHouse.id)}
            >
              <CustomText style={{ color: 'white' }} font='bold'>SUBMIT</CustomText>
            </TouchableOpacity>
          </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return { 
    property: state.property,
  }
}

export default connect(mapStateToProps)(SignUpForm)
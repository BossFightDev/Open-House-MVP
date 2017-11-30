import React, { Component } from 'react';
import { View, Text, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import Sidebar from '../Containers/COH/Sidebar';

const stages = [{
    number: 1,
    stage: 'Select Questions'
  },
  {
    number: 2,
    stage: 'Display Options'
  },
  {
    number: 3,
    stage: 'Add Hashtags'
  },
  {
    number: 4,
    stage: 'Launch Open House'
  },
]


export default class extends Component {
  constructor() {
    super();
    this.state = {
      currentStage: 1,
      stages: stages,
    }
  }

  render() {
    return (
      <View>
        <Sidebar 
          currentStage= {this.state.currentStage}
          MLS='1234567' 
          Address='123 Main Street, San Marcos'
          stages={this.state.stages}
        />
        <View>
          <View>
            <Text>Past Open House</Text>
            <TouchableOpacity
              onPress={ () => this.props.navigation.navigate('OpenHouses') }
            >
              <Image source={require('../Assets/iconClose.png')} />
            </TouchableOpacity>
          </View> 
          <Button
            onPress={ () => this.props.navigation.navigate('Signup') }
            title='Preview and Launch'
            color='black'
          />
        </View>
      </View>
    )
  }
}

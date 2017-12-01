import React, { Component } from 'react';
import { View, Text, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import Sidebar from '../Containers/COH/Sidebar';
import Stage from '../Containers/COH/Stage'
import TitleClose from '../Components/TitleClose';
import Fields from '../Assets/fields';

const stages = [{
    number: 1,
    stage: 'Select Questions To Display'
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
      sideBarStages: stages,
      fields: Fields
    }
    this.switchStateChange = this.switchStateChange.bind(this);
    this.activeStageChange = this.activeStageChange.bind(this);
  }
  switchStateChange(containerIndex, componentIndex){
    const fields = this.state.fields;
    const value = fields[containerIndex][componentIndex].value;
    fields[containerIndex][componentIndex].value = !value;

    this.setState({
      fields: fields
    })
  }
  activeStageChange(stage){
    this.setState({
      currentStage: stage
    })
  }
  render() {
    return (
      <View>
        <Sidebar 
          currentStage= {this.state.currentStage}
          MLS='1234567' 
          Address='123 Main Street, San Marcos'
          stages={this.state.sideBarStages}
          navigation={this.props.navigation}
        />
        <View>
          <Stage 
            navigation={this.props.navigation} 
            title={this.state.sideBarStages[0].stage}
            fields={this.state.fields[0]}
            active={0}
            switchOnPress={this.switchStateChange}
            activeOnPress={this.activeStageChange}
          />
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

import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import TitleCard from '../../Components/TitleClose';


export default class extends Component {
  constructor(props) {
    super();
  }
  navigateBack() {
    this.props.navigation.navigate('OpenHouses');
  }
  render() {
    return (
        <View>
          <AddressCard 
            MLS={this.props.MLS}
            Address={this.props.Address}
            navigation={this.props.navigation}
          />
          {this.props.stages.map(stage => {
            return <StageCard key={stage.number.toString()} currentStage={this.props.currentStage} number={stage.number} stage={stage.stage}/>
          })}
      </View>
    )
  }
}

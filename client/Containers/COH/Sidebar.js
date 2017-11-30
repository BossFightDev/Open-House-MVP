import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import Stagecard from '../../Components/COH/stagecard';

export default class extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
        <View>
          <Image source={require('../../Assets/logo.png')} />
          <View>
            <Image source={require('../../Assets/iconHouse.png')} />
            <Text>MLS# {this.props.MLS}</Text>
            <Text>{this.props.Address}</Text>
            <Button
              onPress={ () => this.props.navigation.navigate('OpenHouses')}
              title='Change Property'
              color='blue'
            />
          </View>
          {this.props.stages.map(stage => {
            return <Stagecard key={stage.number.toString()} currentStage={this.props.currentStage} number={stage.number} stage={stage.stage}/>
          })}
      </View>
    )
  }
}

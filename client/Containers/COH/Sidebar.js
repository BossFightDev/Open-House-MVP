import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet} from 'react-native';
import StageCard from '../../Components/COH/StageCard';
import AddressCard from '../../Components/COH/AddressCard'

export default class extends Component {
  constructor(props) {
    super();
  }
  navigateBack() {
    this.props.navigation.navigate('OpenHouses');
  }
  render() {
    return (
        <View style={this.props.style}>
          <AddressCard
            MLS={this.props.MLS}
            Address={this.props.Address}
            navigation={this.props.navigation}
          />
          {this.props.stages.map(stage => {
            return <StageCard style={styles.stageCard} key={stage.number.toString()} currentStage={this.props.currentStage} number={stage.number} stage={stage.stage}/>
          })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  stageCard: {
    flex: 1,
    backgroundColor: '#454545',
    alignItems: 'center',
  }

})
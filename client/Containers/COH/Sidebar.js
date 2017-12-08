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
          <Image style={styles.logo} source={require('../../Assets/logo.png')} />
          <AddressCard
            MLS={this.props.MLS}
            Address={this.props.Address}
            navigation={this.props.navigation}
            style={styles.addressCard}
          />
          {this.props.stages.map(stage => {
            return <StageCard style={styles.stageCard} key={stage.number.toString()} currentStage={this.props.currentStage} number={stage.number} stage={stage.stage}/>
          })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 20,
    flex: 1,
    width: undefined,
    height: undefined,
  },
  stageCard: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#454545'
  },
  addressCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(51, 51, 51, .7)'
  },

})
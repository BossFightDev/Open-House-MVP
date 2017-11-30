import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      mlsNumber: null,
    }
  }

  render() {
    return(
      <View>
        <View>
          <Text>Create a New Open House</Text>
          <TextInput
            placeholder='Enter MLS# or Select a Listing'
            style={{borderColor: 'black', borderWidth: 1}}
            onChangeText={(mlsNumber) => this.setState({ mlsNumber })}
            value={this.state.mlsNumber}
          />
          <Button
            onPress={ () => this.props.navigation.navigate('CreateOpenHouse') }
            title='Start'
            color='black'
          />
        </View>
        <View>
          <Text>Past Open Houses</Text>
          <Button
            onPress={ () => this.props.navigation.navigate('PastOpenHouses') }
            title='Oct 24, 2017'
            color='black'
          />
        </View>
      </View>
    )
  }
}

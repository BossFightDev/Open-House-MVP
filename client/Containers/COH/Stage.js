import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import TitleCard from '../../Components/TitleClose';
import FieldSwitch from '../../Components/COH/FieldSwitch';

export default class extends Component {
  constructor(props) {
    super();
  }
  buttonRenderer(){
    switch(this.props.active) {
      case 0:
        return (
          <View>
            <Button
              onPress={ () => this.props.activeOnPress(this.props.active+2) }
              title='Next'
              color='black'
            />
          </View>
        )
        break;
      case this.props.lastStage:
        return (
          <View>
            <Button
              onPress={ () => this.props.navigation.navigate('Signup') }
              title='Preview and Launch'
              color='black'
            />
          </View>
        )
        break;
      default:
        return (
          <View>
            <Button
              onPress={ () => this.props.activeOnPress(this.props.active) }
              title='Back'
              color='black'
            />
            <Button
              onPress={ () => this.props.activeOnPress(this.props.active+2) }
              title='Next'
              color='black'
            />
          </View>
        )
    }
  }

  render() {
    return (
      <View>
        <TitleCard title='PAST OPEN HOUSE' navigation={this.props.navigation} nextLocation='Open Houses'/> 
        <Text>{this.props.title}</Text>
        {this.props.fields.map((field, i) => {
          return <FieldSwitch 
            key={i.toString()}
            question={field.Question} 
            type={field.type} 
            value={field.value} 
            parentIndex={this.props.active}
            switchIndex={i}
            switchChange={this.props.switchOnPress}
            />
        })}
        {this.buttonRenderer()}
      </View>
    )
  }
}

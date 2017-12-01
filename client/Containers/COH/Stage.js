import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import TitleCard from '../../Components/TitleClose';
import FieldSwitch from '../../Components/COH/FieldSwitch';

export default class extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log(JSON.stringify(this.props.fields));
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
      </View>
    )
  }
}

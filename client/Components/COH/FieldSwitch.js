import React from 'react';
import {View, Text, Switch } from 'react-native';

const FieldSwitch = (props) => {
  function onValueChange() {
    return props.switchChange(props.parentIndex, props.switchIndex);
  }
  switch(props.type){
    case 'Required':
      return(
        <View>
          <Text>
            {props.question}
          </Text>
          <Text> Required </Text>
        </View>
      )
      break;
    case 'Image':
      return(
        <Text> Image here </Text>
      )
      break;
    case 'Add Hashtag':
      return(
        <Text> Add Hashtag Here </Text>
      )
      break;
    case 'Boolean':
      return(
        <View>
          <Text>
            {props.question}
          </Text>
          <Switch value={props.value} 
            onValueChange={onValueChange}
          />
        </View>
      )
      break;
    default:
      return(
        <Text> This type has yet to be Implemented</Text>
      )
  }
}

export default FieldSwitch
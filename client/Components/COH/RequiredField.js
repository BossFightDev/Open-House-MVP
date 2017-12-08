import React from 'react';
import { View, Text } from 'react-native';

const RequiredField = (props) => {
  return(
    <View style={props.style}>
      <Text style={{padding:'2%'}}>
        {props.question}
      </Text>
      <Text style={{padding: '2%'}}> Required </Text>
    </View>
  )
}

export default RequiredField;
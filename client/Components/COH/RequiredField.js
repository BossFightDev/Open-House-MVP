import React from 'react';
import { View, Text } from 'react-native';

const RequiredField = (props) => {
  return(
    <View style={props.style}>
      <Text>
        {props.question}
      </Text>
      <Text> Required </Text>
    </View>
  )
}

export default RequiredField;
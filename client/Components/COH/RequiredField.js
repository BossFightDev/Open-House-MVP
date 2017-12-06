import React from 'react';
import { View, Text } from 'react-native';

const RequiredField = (props) => {
  return(
    <View>
      <Text>
        {props.question}
      </Text>
      <Text> Required </Text>
    </View>
  )
}

export default RequiredField;
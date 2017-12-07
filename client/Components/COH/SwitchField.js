import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SwitchField = (props) => {
  return(
    <View style={props.style}>
      <Text>
        {props.question}
      </Text>
      <Switch value={props.value} 
        onValueChange={props.onChange}
      />
    </View>
  )
}


export default SwitchField;
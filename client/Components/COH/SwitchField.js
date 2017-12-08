import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SwitchField = (props) => {
  return(
    <View style={props.style}>
      <Text style={{padding: "2%"}}>
        {props.question}
      </Text>
      <Switch value={props.value} 
        onValueChange={props.onChange}
        style={{padding: "2%"}}
      />
    </View>
  )
}


export default SwitchField;
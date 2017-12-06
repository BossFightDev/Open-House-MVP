import React from 'react';
import { View, Text, Switch } from 'react-native';

const SwitchField = (props) => {
  return(
    <View>
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
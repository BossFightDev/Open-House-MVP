import React from 'react';
import { Text, Image, View } from 'react-native';


const StageCard = (props) => {
  let color = props.currentStage === props.number ? 'red' : 'blue';
  return (
    <View>
      <Text style={{color: color}}>
      {props.number}</Text>
      <Text>{props.stage}</Text>
    </View>
  )
}

export default StageCard
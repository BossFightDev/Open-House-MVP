import React from 'react';
import { Text, Image, View } from 'react-native';
import CustomText from '../CustomText';


const StageCard = (props) => {
  let styles = props.currentStage === props.number ?
  {borderRadius: 30/2, borderWidth: 5, borderColor: '#25AAFB', height: 30, width: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: '#25AAFB'} :
  {borderRadius: 30/2, borderWidth: 1, borderColor: '#999999', height: 30, width: 30, justifyContent: 'center', alignItems: 'center'};

  let text = props.currentStage === props.number ?
  {color: 'white', backgroundColor: 'transparent'} :
  {color: '#999999', backgroundColor: 'transparent'};
  
  return (
    <View style={props.style}>
      <View style={styles}>
        <CustomText style={text}>
          {props.number}
        </CustomText>
      </View>
      <CustomText style={text}>{props.stage}</CustomText>
    </View>
  )
}

export default StageCard

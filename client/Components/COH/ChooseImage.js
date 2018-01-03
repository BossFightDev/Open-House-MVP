import React from 'react';
import {Text, Button, View, Image, Switch, TouchableOpacity} from 'react-native';
import CustomText from '../CustomText';

const ChooseImage = (props) =>{
  return(
    <View style={{borderWidth: 3, borderColor: 'blue', backgroundColor: 'white', width: '95%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
    <View style={{borderWidth: 3, borderColor: 'green', width: '95%', height: '80%'}}>
      <View>
        <CustomText font='bold'>{props.question}</CustomText>
        <Switch value={props.value} onValueChange={props.onChange}/>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
                  style={{width: '25%', backgroundColor: "#DDDDDD", paddingTop: "2.5%",
                  paddingBottom: "2.5%",
                  borderRadius: 2,
                  borderWidth: 1,
                  borderColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",}}
                  onPress={props._pickImage}
                  underlayColor="#fff"
                >
                  <CustomText font='bold' style={{color: '#999999'}}>Choose Image</CustomText>
                </TouchableOpacity>
          <Image source={{ uri: props.image }} style={{ width: 200, height: 200,}} />
      </View>
      </View>
    </View>
  )
}

export default ChooseImage;
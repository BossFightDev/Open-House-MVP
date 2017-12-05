import React from 'react';
import {Text, Button, View, Image, Switch} from 'react-native';

const ChooseImage = (props) =>{
  return(
    <View>
      <View>
        <Text>{props.question}</Text>
        <Switch value={props.value} onValueChange={props.onChange}/>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={props._pickImage}
        />
          <Image source={{ uri: props.image }} style={{ width: 200, height: 200,}} />
      </View>
    </View>
  )
}

export default ChooseImage;
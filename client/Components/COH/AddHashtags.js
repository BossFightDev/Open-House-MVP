import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class AddHashtags extends Component {
  constructor(props) {
    super();
    this.state = {
      hashtags: ['', '']
    }
  }
  onChange=(text, index)=>{
    const hashtags = this.state.hashtags
    hashtags[index] = text;
    this.setState({
      hashtags: hashtags,
    })
  }
  addHashtag(){
    const { hashtags } = this.state;
    return(
      hashtags.map((hashtag, i) => {
      return (
        <View key={i.toString()}>
        <TextInput 
          
          style={{width:'75%', borderWidth: 2}}
          placeholder='Enter hashtag'
          onChangeText={(text) => this.onChange(text, i)} 
          value={this.state.hashtags[i]}
        />
        </View>
      )
    })
    )}
  addInput = () => {
    const { hashtags } = this.state;
    hashtags.push('')
    this.setState({ hashtags })
  }

  render() {
    return(
      <View>
        <View> 
          <Text> Add Custom Hashtags </Text>
          <Text> (Optional) </Text>
        </View>
        <View>
          {this.addHashtag()}
          <Button title="Add Another" onPress={ this.addInput } />
        </View>
      </View>
    )
  }
}

export default AddHashtags;
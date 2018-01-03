import React, { Component } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import CustomText from "../CustomText";

class AddHashtags extends Component {
  constructor(props) {
    super();
    this.state = {
      hashtags: ["", ""]
    };
  }
  onChange = (text, index) => {
    const hashtags = this.state.hashtags;
    hashtags[index] = text;
    this.setState({
      hashtags: hashtags
    });
  };
  addHashtag() {
    const { hashtags } = this.state;
    return hashtags.map((hashtag, i) => {
      return (
        <View key={i.toString()}>
          <TextInput
            style={{
              width: "100%",
              paddingTop: "2.5%",
              paddingBottom: "2.5%",
              borderWidth: 1,
              borderRadius: 2,
              backgroundColor: "#F1F1F1",
              marginBottom: '2.5%'
            }}
            placeholder="Enter hashtag"
            onChangeText={text => this.onChange(text, i)}
            value={this.state.hashtags[i]}
          />
        </View>
      );
    });
  }
  addInput = () => {
    const { hashtags } = this.state;
    hashtags.push("");
    this.setState({ hashtags });
  };

  render() {
    return (
      <View
        style={{
          borderWidth: 3,
          borderColor: "blue",
          width: "95%",
          height: "50%",
          justifyContent: "center",
          backgroundColor: "white",
          alignItems: "center"
        }}
      >
        <View
          style={{
            borderWidth: 3,
            borderColor: "green",
            width: "95%",
            height: "80%",
            justifyContent: "space-between"
          }}
        >
          <View>
            {this.addHashtag()}
            <TouchableOpacity
              style={{
                width: "25%",
                backgroundColor: "#DDDDDD",
                paddingTop: "2.5%",
                paddingBottom: "2.5%",
                borderRadius: 2,
                borderWidth: 1,
                borderColor: "#fff",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={this.addInput}
              underlayColor="#fff"
            >
              <CustomText font="bold" style={{ color: "#999999" }}>
                Choose Image
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default AddHashtags;

import React, { Component } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { ImagePicker } from "expo";
import components from "../../Components/COH";
const { RequiredField, SwitchField, ChooseImage, AddHashtags } = components;

class FieldSwitch extends Component {
  constructor(props) {
    super();
    this.state = {
      image: "../../Assets/iconHouse3x.png",
      imageChange: false,
      Hashtags: null,
      uploading: false
    };
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    this._handleImagePicked(result);
  };

  _handleImagePicked = async pickerResult => {
    let uploadResponse, uploadResult;

    try {
      this.setState({ uploading: true });

      if (!pickerResult.cancelled) {
        uploadResponse = await uploadImageAsync(pickerResult.uri);
        uploadResult = await uploadResponse.json();
        this.setState({ image: uploadResult.url });
      }
    } catch (err) {
      console.log({ uploadResponse });
      console.log({ uploadResult });
      console.log({ err });
      alert("Upload failed, sorry :(");
    } finally {
      this.setState({ uploading: false });
    }
  };

  onValueChange = () => {
    return this.props.switchChange(
      this.props.parentIndex,
      this.props.switchIndex
    );
  };
  renderQuestions = () => {
    switch (this.props.type) {
      case "Required":
        return (
          <RequiredField
            question={this.props.question}
            style={styles.simpleField}
          />
        );
        break;
      case "Image":
        return (
          <ChooseImage
            question={this.props.question}
            value={this.props.value}
            onChange={this.onValueChange}
            image={this.state.image}
            _pickImage={this._pickImage}
          />
        );
        break;
      case "Add Hashtags":
        return <AddHashtags />;
        break;
      case "Boolean":
        return (
          <SwitchField
            question={this.props.question}
            value={this.props.value}
            onChange={this.onValueChange}
            style={styles.simpleField}
          />
        );
        break;
      default:
        return <Text> This type has yet to be Implemented</Text>;
    }
  };
  render() {
    let { image } = this.state;
    return <View style={this.props.style}>{this.renderQuestions()}</View>;
  }
}

const uploadImageAsync = async uri => {
  let apiUrl = "https://openhousebackend.herokuapp.com/api/photo";
  let uriParts = uri.split(".");
  let fileType = uri[uri.lenghth - 1];

  let formData = new FormData();
  formData.append("photo", {
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`
  });

  let options = {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data"
    }
  };

  return fetch(apiUrl, options);
};

const styles = {
  simpleField: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingBottom: 10,
    width: "95%",
    marginTop: "1%",
    marginBottom: "1%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 3
  }
};

export default FieldSwitch;

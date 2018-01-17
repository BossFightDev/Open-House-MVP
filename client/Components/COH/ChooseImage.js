import React, { Component } from "react";
import Modal from "react-native-modal";
import { connect } from "react-redux";
import {
  Text,
  View,
  Image,
  Switch,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import CustomText from "../CustomText";
import { toggleImageModal, setHouseImage } from "../../actions/index";
import Button from "../Button";

class ChooseImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0
    };
  }
  onLeftPress = () => {
    if(this.props.property.images.length <= 1) return;
    if(this.state.position === 0) {
      this.setState({
        position: this.props.property.images.length - 1
      })
    } else {
      let newPosition = this.state.position
      newPosition--
      this.setState({
        position: newPosition
      })
    }
  }
  onRightPress = () => {
    if(this.props.property.images.length <= 1) return;
    if(this.state.position === this.props.property.images.length - 1) {
      this.setState({
        position: 0
      })
    } else {
      let newPosition = this.state.position
      newPosition++
      this.setState({
        position: newPosition
      })
    }
  }
  render() {
    return (
      <View
        style={{flex: 20,
          borderWidth: 3,
          borderColor: "blue",
          backgroundColor: "white",
          width: "95%",
          // height: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Modal
          isVisible={this.props.imageModal}
          supportedOrientations={[
            "portrait",
            "portrait-upside-down",
            "landscape-left",
            "landscape-right"
          ]}
          style={styles.modal}
          onBackdropPress={()=>this.props.toggleImageModal('OFF')}
        >
          <View style={styles.modalContainer}>
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={()=>
                  {
                    this.props.setHouseImage({uri: this.props.property.images[this.state.position]})
                    this.props.toggleImageModal('OFF')
                  }
                }
              >
              <Image
                source={{
                  uri: this.props.property.images[this.state.position]
                }}
                style={{ flex: 1, resizeMode: 'contain', width: '100%'}}
              />
              </TouchableOpacity>
            <View style={styles.buttonWrapper}>
            <View style={styles.buttonContainer}>
              <Button arrow="left" 
                onPress={this.onLeftPress}
              />
              <Button arrow="right" 
                onPress={this.onRightPress}
              />
              {/* <Button
                onPress={this._pickImage}
                title="Choose an image from Device"
                color="#454545"
              /> */}
            </View>
            </View>
          </View>
        </Modal>
        <View
          style={{
            flex: 1,
            borderWidth: 3,
            borderColor: "green",
            width: "95%",
            height: "80%",
          }}
        >
          <View style={{flexDirection: 'row',justifyContent:'space-between', borderWidth: 5}}>
            <CustomText font="bold">{this.props.question}</CustomText>
            <Switch
              value={this.props.value}
              onValueChange={this.props.onChange}
              style={{alignSelf: 'flex-end'}}
            />
          </View>
          <View style={{ alignItems: "center",flex: 1, flexDirection:'row', justifyContent: "center" }}>
          <View style={[styles.displayImageContainer, {borderWidth: 3}]}>
              
              <Image
                source={{
                  uri: this.props.questions.image
                }}
                style={{ flex: 1, alignSelf: 'flex-start', resizeMode: 'contain', width: '100%'}}
              />
              
            </View>
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
              onPress={() => this.props.toggleImageModal("ON")}
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

const styles = StyleSheet.create({
  modal: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 0
  },
  modalContainer: { // need to change for mobile currently too tall and too narrow
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
    width: "55%",
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "#DDDDDD",
    backgroundColor: "#F1F1F1",
    padding: 0
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
    width: '95%'
  },
  displayImageContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 3,
    width: '50%'
  },
  buttonWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0,
    width: '95%'

  },
  buttonContainer: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'flex-end',
  },
});

const mapStateToProps = state => {
  return {
    appState: state.appState,
    property: state.property,
    questions: state.questions,
    houseImage: state.houseImage.uri
  };
};

const mapDispatchToProps = {
    setHouseImage,
    toggleImageModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseImage);

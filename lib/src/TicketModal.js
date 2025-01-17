import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Dimensions } from "react-native";
import Modal from "react-native-modal";
import TearLines from "./components/TearLines";
import FastImage from "react-native-fast-image";
import Ripple from "react-native-material-ripple";
import Icon from "react-native-dynamic-vector-icons";
import styles, {
  container,
  _rippleButtonStyle,
  footerRedeemStyle,
  footerRedeemTextStyle
} from "./TicketModal.style";

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("window");

const MODAL_WIDTH = ScreenWidth * 0.8;
const MODAL_HEIGHT = ScreenHeight * 0.75;

const LINES_NUMBER = 25;

export default class TicketModal extends Component {
  renderLines() {
    var arr = [];
    for (let i = 0; i < LINES_NUMBER; i++) {
      arr.push(
        <View
          key={`line-${i}`}
          style={{
            width: 5,
            height: 1.5,
            paddingRight: 8,
            backgroundColor: "#595959"
          }}
        />
      );
    }
    return arr;
  }

  render() {
    const {
      image,
      width,
      height,
      borderRadius,
      backgroundColor,
      resizeMode,
      imageStyle,
      tearlinesColor,
      tearSize,
      cuttingEdgesColor,
      tearlinesWidth,
      tearlinesStyle,
      primaryTitleStyle,
      primaryTitle,
      secondaryTitleStyle,
      secondaryTitle,
      description,
      descriptionStyle,
      buttonStyle,
      buttonColor,
      buttonShadowColor,
      buttonTextStyle,
      buttonText,
      buttonIconName,
      buttonIconType,
      buttonIconColor,
      buttonIconSize,
      buttonIconComponent,
      footerSmallText,
      footerSmallTextStyle,
      footerHeight,
      footerBackgroundColor,
      footerTextColor,
      footerTextStyle,
      footerText,
      footerIconComponent,
      isVisible,
      backdrop,
      onBackdropPress,
      children
    } = this.props;
    return (
      <Modal
        isVisible={isVisible}
        hasBackdrop={backdrop}
        style={styles.modalContainer}
        onBackdropPress={onBackdropPress}
      >
        <View style={container(width, height, borderRadius, backgroundColor)}>
          <View style={styles.containerGlue}>
            <FastImage
              source={image}
              resizeMode={resizeMode}
              style={imageStyle || styles.imageStyle}
            />
            <TearLines
              color={tearlinesColor}
              tearSize={tearSize}
              cuttingEdgesColor={cuttingEdgesColor}
              width={tearlinesWidth}
              style={tearlinesStyle || styles.tearlinesStyle}
            />
            <View style={styles.innerContainer}>
              <View style={styles.titleStyle}>
                <Text style={primaryTitleStyle || styles.primaryTitleStyle}>
                  {primaryTitle}
                </Text>
                <Text style={secondaryTitleStyle || styles.secondaryTitleStyle}>
                  {secondaryTitle}
                </Text>
              </View>
              {children}
              <View style={styles.footerContainer}>
                <View style={styles.footerTextContainer}>
                  <Text
                    style={footerSmallTextStyle || styles.footerSmallTextStyle}
                  >
                    {footerSmallText}
                  </Text>
                </View>
                <View
                  style={footerRedeemStyle(footerHeight, footerBackgroundColor)}
                >
                  <View style={styles.linesContainer}>
                    {this.renderLines()}
                  </View>
                  <View style={styles.footerContentContainer}>
                    <View style={styles.footerContentContainerGlue}>
                      <Text
                        style={
                          footerTextStyle ||
                          footerRedeemTextStyle(footerTextColor)
                        }
                      >
                        {footerText}
                      </Text>
                      {footerIconComponent || (
                        <Icon
                          size={20}
                          type="Entypo"
                          color="white"
                          name="scissors"
                        />
                      )}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

TicketModal.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  resizeMode: PropTypes.string,
  borderRadius: PropTypes.number,
  backgroundColor: PropTypes.string,
  tearlinesColor: PropTypes.string,
  tearSize: PropTypes.number,
  cuttingEdgesColor: PropTypes.string,
  tearlinesWidth: PropTypes.number,
  primaryTitle: PropTypes.string,
  secondaryTitle: PropTypes.string,
  description: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonShadowColor: PropTypes.string,
  buttonText: PropTypes.string,
  buttonIconName: PropTypes.string,
  buttonIconType: PropTypes.string,
  buttonIconColor: PropTypes.string,
  buttonIconSize: PropTypes.number,
  footerText: PropTypes.string,
  footerSmallText: PropTypes.string,
  backdrop: PropTypes.bool,
  isVisible: PropTypes.bool
};

TicketModal.defaultProps = {
  image: require("../../assets/jakub-dziubak-262303-unsplash.jpg"),
  width: MODAL_WIDTH,
  height: MODAL_HEIGHT,
  borderRadius: 16,
  backgroundColor: "white",
  resizeMode: "cover",
  tearlinesColor: "white",
  tearSize: 15,
  cuttingEdgesColor: "#494b4c",
  tearlinesWidth: MODAL_WIDTH,
  primaryTitle: "BUY 1,  ",
  secondaryTitle: "GET 1 FREE",
  buttonColor: "#EDCE86",
  buttonShadowColor: "#d1950c",
  buttonText: "APPROVE",
  buttonIconName: "check",
  buttonIconType: "Entypo",
  buttonIconColor: "white",
  buttonIconSize: 18,
  footerSmallText: "Valid until 10/12/2019 20:34",
  footerText: "A7103B03FD",
  backdrop: true,
  isVisible: true,
  description:""
};

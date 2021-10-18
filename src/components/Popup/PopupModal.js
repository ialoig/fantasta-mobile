import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet } from "react-native";
import Modal from "react-native-modal"
import I18n from "i18n-js"
import colors from "../../styles/colors"
import { textStyles } from "../../styles"
import Icon from "../Icon/Icon"

function PopupModal(props) {

  const { popupShow, popupTitle, popupMessages } = props;
  const [isModalVisible, setModalVisible] = useState(popupShow);
  const [title, setPopupTitle] = useState(popupTitle);
  const [message, setMessage] = useState(popupMessages);

  // Use props as state. Any change in the props will be reflected in the state
  useEffect(() => {
    console.log(`useEffect called`)
    setModalVisible(popupShow)
    setMessage(popupMessages)
  }, [popupShow, popupMessages])

  // Click outside the popup
  const closePopup = () => {
    console.log(`onBackdropPress called`)
    props.popupClosedCallback()
  }


  console.log(`[PopupModal] popupShow: ${popupShow}`)
  console.log(`[PopupModal] popupTitle: ${popupTitle}`)
  console.log(`[PopupModal] popupMessages: ${popupMessages}`)
  console.log(`[PopupModal] isModalVisible: ${isModalVisible}`)
  console.log(`[PopupModal] message: ${message}`)

  const extractMessage = () => {
    return popupMessages.map(message => I18n.translate(message)).join("\n")
  }

  return (
    <Modal
      isVisible={isModalVisible}
      backdropColor="gray"
      backdropOpacity={0.5}
      onBackButtonPress={closePopup}
      onBackdropPress={closePopup}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
    >
      <View style={styles.titleContainer}>
        <View style={styles.image}>
          <Icon name={"error"} width={40} height={40} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.messageContainer}>
        <Text style={styles.message}>{extractMessage()}</Text>
      </View>

      <View style={styles.footerContainer}>
        <Button onPress={closePopup} title="Close" />
      </View>

    </Modal >
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: colors.errorRed,
    flexDirection: 'row',
    alignContent: 'stretch',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10,
    // borderColor: "black", // TODO: remove me
    // borderWidth: 1        // TODO: remove me
  },
  messageContainer: {
    backgroundColor: colors.primary,
    alignItems: 'center',   // centered vertically
    flexDirection: 'column',
    alignContent: 'center',
    padding: 10,
    // borderColor: "black", // TODO: remove me
    // borderWidth: 1        // TODO: remove me
  },
  footerContainer: {
    backgroundColor: colors.primary,
    padding: 10,
    alignItems: 'center', // centered vertically
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // borderColor: "black", // TODO: remove me
    // borderWidth: 1,        // TODO: remove me
  },

  image: {
    alignItems: "flex-end",
    paddingRight: 5,
    flex: 2
  },
  title: {
    fontSize: 30,
    paddingLeft: 5,
    color: colors.secondary,
    flex: 3
  },
  message: {
    fontSize: 20,
    marginBottom: 12,
    color: colors.secondary
  },
});

export default PopupModal

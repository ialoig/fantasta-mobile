import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet } from "react-native";
import Modal from "react-native-modal"
import I18n from "i18n-js"
import colors from "../../styles/colors"

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
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{extractMessage()}</Text>
        <Button onPress={closePopup} title="Close" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.primary,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
    color: "red"
  },
  message: {
    fontSize: 20,
    marginBottom: 12,
    color: "yellow"
  },
});

export default PopupModal

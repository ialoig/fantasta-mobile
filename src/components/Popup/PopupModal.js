import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import Modal from "react-native-modal"
import colors from "../../styles/colors"
import Icon from "../Icon/Icon"


function PopupModal(props) {

	const { popupShow, popupTitle, popupMessages } = props
	const [isModalVisible, setModalVisible] = useState(popupShow)
	const [title] = useState(popupTitle)
	const [messages, setMessage] = useState(popupMessages)

	// Use props as state. Any change in the props will be reflected in the state
	useEffect(() => {
		setModalVisible(popupShow)
		setMessage(popupMessages)
	}, [popupShow, popupMessages])

	// Click outside the popup
	const closePopup = () => {
		props.popupClosedCallback()
	}

	const extractMessage = () => {
		return messages.map(message => I18n.translate(message)).join("\n")
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
				<Button color={colors.secondary} onPress={closePopup} title={I18n.translate("close")} />
			</View>

		</Modal >
	)
}

PopupModal.propTypes = {
	popupClosedCallback: PropTypes.func,
	popupMessages: PropTypes.string,
	popupShow: PropTypes.bool.isRequired,
	popupTitle: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
	footerContainer: {
		alignItems: "center", // centered vertically
		backgroundColor: colors.primary,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		padding: 10
	},
	image: {
		paddingRight: 5,
	},
	message: {
		color: colors.secondary,
		fontSize: 20
	},

	messageContainer: {
		alignContent: "center",
		alignItems: "center",   // centered vertically
		backgroundColor: colors.primary,
		flexDirection: "column",
		justifyContent: "center",
		padding: 10
	},
	title: {
		color: colors.secondary,
		fontSize: 30,
		paddingLeft: 5,
	},

	titleContainer: {
		backgroundColor: colors.errorRed,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		flexDirection: "row",
		justifyContent: "center",  // center horizontally
		padding: 10
	}
})

export default PopupModal

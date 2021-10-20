import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Modal from "react-native-modal"
import colors from "../../styles/colors"

function PopupError(props) {

	const { popupShow, popupTitle, popupMessage } = props
	const [isModalVisible, setModalVisible] = useState(popupShow)
	const [title] = useState(popupTitle)
	const [message, setMessage] = useState(popupMessage)

	// Use props as state. Any change in the props will be reflected in the state
	useEffect(() => {
		setModalVisible(popupShow)
		setMessage(popupMessage)
	}, [popupShow, popupMessage])

	// Click outside the popup
	const closePopup = () => {
		props.popupClosedCallback()
	}

	return (
		<Modal
			isVisible={isModalVisible}
			backdropColor="transparent"
			backdropOpacity={0.5}
			onBackButtonPress={closePopup}
			onBackdropPress={closePopup}
			animationIn="fadeInDown"
			animationOut="fadeOutUp"
			animationInTiming={300}
			animationOutTiming={300}
			backdropTransitionInTiming={0}
			backdropTransitionOutTiming={0}
			style={styles.popup}
		>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{title} </Text>
				<Text style={styles.message}>{I18n.translate(message)} </Text>
			</View>

		</Modal >
	)
}

PopupError.propTypes = {
	popupClosedCallback: PropTypes.func,
	popupMessage: PropTypes.string,
	popupShow: PropTypes.bool.isRequired,
	popupTitle: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
	popup:{
		justifyContent: 'flex-start',
		marginHorizontal: 30,
		marginTop:3		
	},

	textContainer: {
		alignItems: "flex-start",
		backgroundColor: colors.errorRedBg,
		borderRadius: 15,
		flexDirection: "column",
		justifyContent: "center",  // center horizontally
		padding: 10,
		paddingLeft: 30,
		borderColor: colors.errorRed,
		borderWidth: 1
	},
	title: {
		color: colors.errorRed,
		fontFamily: "PoppinsRegular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		letterSpacing: 0.75
	},
	message: {
		color: colors.secondary,
		fontSize: 15
	}
})

export default PopupError

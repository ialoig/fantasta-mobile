import _ from "lodash"
import PropTypes from "prop-types"
import React from "react"
import { checkValidity } from "../utils"
import Email from "./Email"

export default class EmailContainer extends React.Component {

	constructor (props) {
		super(props)

		this.state = {
			value: props.value!==undefined && props.value!==null ? props.value : "",
			error: "",
			valid: true,
			changed: false,
			touched: false,
			focused: false,
		}
	}

	componentDidMount () {
		this.checkValidity()
	}

	componentDidUpdate ( oldProps ) {
		if ( oldProps.value!=this.props.value && this.props.value!=this.state.value ) {

			this.setState({
				value: this.props.value!==undefined && this.props.value!==null ? this.props.value : ""
			})
		}
	}

	onChangeText ( text ) {
		this.setState({
			changed: true,
			value: text
		}, ()=>{ this.checkValidity() })

		this.props.onChange && this.props.onChange( this.props.id, text, this.state.valid )
	}

	onBlur () {
		this.setState({
			focused: false
		})

		this.props.onBlur && this.props.onBlur( this.props.id, this.state.value, this.state.valid )
	}

	onFocus () {
		this.setState({
			touched: true,
			focused: true
		})

		this.props.onFocus && this.props.onFocus( this.props.id, this.state.value, this.state.valid )
	}

	checkValidity () {
        
		let errors = this.props.errors || {}

		let ret = checkValidity( "email", this.state.value, errors, this.props )
        
		this.setState({
			valid: ret.valid,
			error: ret.error
		})
	}

	render() {

		const {
			id,
			label="",
			placeholder="",
			autoCapitalize="none",
			clearButtonMode="while-editing",
			showError=false,
			hideError=false,
			required=false,
			editable=true,
			selectTextOnFocus=false,
			minLength=0,
			maxLength=100
		} = this.props

		let valid = this.state.valid && ( _.isBoolean(this.props.valid) ? this.props.valid : true )
		let hasError = !valid && ( this.state.touched && !this.state.focused || showError ) && !hideError

		return (
			<Email
				id={id}
				name={id}
				label={label}
				value={this.state.value}
				placeholder={placeholder}
				onRef={ ref => this.ref = ref }

				autoCapitalize={autoCapitalize}
				clearButtonMode={clearButtonMode}
				textContentType={"emailAddress"}

				error={this.state.error}
				hasError={hasError}
				required={required}
				editable={editable}
				selectTextOnFocus={selectTextOnFocus}
				minLength={minLength}
				maxLength={maxLength}

				onChangeText={this.onChangeText.bind(this)}
				onBlur={this.onBlur.bind(this)}
				onFocus={this.onFocus.bind(this)}
			/>
		)
	}
}

EmailContainer.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	valid: PropTypes.bool,
	placeholder: PropTypes.string,
	autoCapitalize: PropTypes.string,
	clearButtonMode: PropTypes.string,
	showError: PropTypes.bool,
	hideError: PropTypes.bool,
	required: PropTypes.bool,
	editable: PropTypes.bool,
	selectTextOnFocus: PropTypes.bool,
	minLength: PropTypes.number,
	maxLength: PropTypes.number,
	errors: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func
}
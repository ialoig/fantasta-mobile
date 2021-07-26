import PropTypes from "prop-types"
import React from "react"
import { SearchInput } from "../../components"

function SearchBox({ query, changeQuery, isEditable }) {
	return (
		<SearchInput 
			id="search"
			label="Search"
			placeholder="Search"
			value={query}
			onChange={(id, value) => {
				changeQuery(value)
			}}
			editable={isEditable}
		/> 
	)
}

SearchBox.propTypes = {
	query: PropTypes.string.isRequired,
	changeQuery: PropTypes.func,
	isEditable: PropTypes.bool
}

SearchBox.defaultProps = {
	query: "",
	isEditable: true
}

export default SearchBox


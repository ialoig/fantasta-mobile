import PropTypes from "prop-types"
import React from "react"
import { SearchInput } from "../../components"

function SearchBox({ query, changeQuery }) {
	return (
		<SearchInput 
			id="search"
			label="Search"
			placeholder="Search"
			value={query}
			onChange={(id, value) => {
				changeQuery(value)
			}}
		/> 
	)
}

SearchBox.propTypes = {
	query: PropTypes.string.isRequired,
	changeQuery: PropTypes.func,
}

SearchBox.defaultProps = {
	query: "",
}

export default SearchBox


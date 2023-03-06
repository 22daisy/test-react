import PropTypes from "prop-types";

function Details({coverImg, title}) {
	return (
		<div>
			<img src={coverImg} alt={title} />
			<h2>{title}</h2>
		</div>
	)
}

Details.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	synopsis: PropTypes.string.isRequired,
	genre:PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Details;
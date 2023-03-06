import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({coverImage, title, summary, genres, id}) {
	return (
		<div className="movieBox">
			<img src={coverImage} alt={title} className="movieImg"/>
			<div className="text-wrap">
				<h2 className="title">
					<Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
				</h2>
				<p className="content">{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
				<ul className="genres">
					{genres.map(g => <li key={g}>{g}</li>)}
				</ul>
			</div>
		</div>
	)
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImage: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres:PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
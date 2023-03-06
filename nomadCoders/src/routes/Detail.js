import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailComponent from "../components/DetailComponent"

function Detail() {
	const {id} = useParams();
	const [loading, setLoading] = useState(true);
	const [details, setDetails] = useState([]);

	const getMovie = async() => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setDetails(json.data.movie);
		setLoading(false);
	}

	useEffect(() => {
		getMovie();
	}, [])

	return (
		<div>
			{loading ? (<h1>Loading...</h1>) : (
				<div>
					<img src={details.large_cover_image} alt={details.title} />
					<h2>{details.title}</h2>
					<span>{details.year}</span>
					<span>{details.runtime}분</span>
					{details.genres.map(g => <span key={g}>{g} </span>)}
				</div>
			)}
		</div>
	)
}

export default Detail;
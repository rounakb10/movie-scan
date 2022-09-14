import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ClipLoader from "react-spinners/ClipLoader"
import MovieCard from "../components/MovieCard"
// import jsonData from "../testModal.json"
// import trailerJsonData from "../testTrailer.json"
// const loadData = async () => await JSON.parse(JSON.stringify(jsonData))
// const loadTrailer = async () => await JSON.parse(JSON.stringify(trailerJsonData))

const API_KEY = process.env.REACT_APP_API_KEY

function MovieDetails() {
	const [movieData, setMovieData] = useState(null)
	const [trailerData, setTrailerData] = useState(null)
	const [loading, setLoading] = useState(null)

	const params = useParams()
	const [updatedId, setUpdatedId] = useState(params.id)

	const getDate = (val) => {
		var date = new Date(val)
		var options = {
			year: "numeric",
			month: "short",
			day: "numeric",
		}
		var formattedDate = date.toLocaleDateString("en-IN", options)
		return formattedDate
	}

	const getMovieData = async () => {
		setLoading(true)

		const response2 = await fetch(
			`https://imdb-api.com/en/API/YouTubeTrailer/${API_KEY}/${params.id}`
		)
		const data2 = await response2.json()
		setTrailerData(data2)

		const response = await fetch(
			`https://imdb-api.com/en/API/Title/${API_KEY}/${params.id}/Trailer,Ratings,`
		)
		const data = await response.json()
		setMovieData(data)
		// const data = await loadData()

		setLoading(false)
	}
	useEffect(() => {
		getMovieData()
		// eslint-disable-next-line
	}, [updatedId])

	let navigate = useNavigate()
	const handleClose = () => {
		navigate("/", { replace: true })
	}

	const handleClick = () => {
		let url = trailerData.videoUrl
		window.open(url)
	}

	return (
		<div className='bg-dark p-3 overflow-hidden'>
			<button
				type='button'
				className='btn-close btn-close-white'
				onClick={handleClose}
			></button>

			<br />

			<div className='text-center'>
				<br />
				<ClipLoader loading={loading} size={100} color='white' />
			</div>
			{movieData && (
				<div>
					<div className='row p-2'>
						<div className='col-sm-4 text-center pb-4'>
							<img
								className='img-fluid rounded crop'
								src={movieData.image}
								alt={movieData.title}
							/>
						</div>
						<div className='col-sm-8 text-light'>
							<div className='text-center'>
								<h1>{movieData.fullTitle}</h1>
								<p>Rating: {movieData.imDbRating}/10</p>
								<p>
									{getDate(movieData.releaseDate)}
									{" | "}
									{movieData.runtimeMins} mins
								</p>
								<p>{movieData.genres}</p>
							</div>
							<div>
								<h3>Overview</h3>
								<p>{movieData.plot}</p>
							</div>
							{movieData.awards && (
								<div>
									<h3>Awards</h3>
									<p>{movieData.awards}</p>
								</div>
							)}
							<div>
								<h3>Top Cast</h3>
								<p>{movieData.stars}</p>
							</div>
							{trailerData && (
								<button
									type='button'
									className='btn btn-outline-light my-4'
									onClick={handleClick}
								>
									Watch Trailer
								</button>
							)}
						</div>
					</div>
					<div className='text-center'>
						<h3 className='text-light'>You might also like</h3>
					</div>
					<div className='row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 row-cols-xl-6  g-4'>
						{movieData.similars.map((item) => {
							return (
								<MovieCard
									movie={item}
									key={item.id}
									setUpdatedId={setUpdatedId}
								/>
							)
						})}
					</div>
				</div>
			)}
		</div>
	)
}
export default MovieDetails

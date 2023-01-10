import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import PropagateLoader from "react-spinners/PropagateLoader"
import "./movie_details.css"
import Cards from "../components/Cards"

// import jsonData from "../testModal.json"
// import trailerJsonData from "../testTrailer.json"
// const loadData = async () => await JSON.parse(JSON.stringify(jsonData))
// const loadTrailer = async () => await JSON.parse(JSON.stringify(trailerJsonData))

import detailData from "../data/detailData"
const loadDetailData = async () => await JSON.parse(JSON.stringify(detailData))

const API_KEY = process.env.REACT_APP_API_KEY

function MovieDetails() {
	const [movieData, setMovieData] = useState(null)
	// const [trailerData, setTrailerData] = useState(null)
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

	// TEST
	const getDetailData = async () => {
		setLoading(true)
		const data = await loadDetailData()
		setMovieData(data.items)
		setLoading(false)
	}

	const getMovieData = async () => {
		setLoading(true)
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
		// getDetailData() //TEST
		window.scrollTo(0, 0)
		// eslint-disable-next-line
	}, [updatedId])

	let navigate = useNavigate()
	const handleClose = () => {
		navigate(-1)
	}

	const handleClick = () => {
		let url = movieData.trailer.link
		window.open(url)
	}

	return (
		<div className='p-2 overflow-hidden'>
			<button type='button' onClick={handleClose} className='mt-2 ml-2'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='currentColor'
					className='cross-btn'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</button>

			{loading && (
				<div className='text-center mb-12'>
					<PropagateLoader
						loading={loading}
						size={12}
						color='var(--text)'
					/>
				</div>
			)}
			{movieData ? (
				movieData.errorMessage === "" ? (
					<div className='mb-8'>
						<div className='grid mt-4 mb-32 md:mx-6 mx-4 md:grid-cols-[40%_60%] grid-cols-1 md:gap-0 gap-6 justify-items-center content-center'>
							<div className='mb-2'>
								<img
									className='rounded-xl md:w-3/4 w-[90%] mx-auto'
									src={movieData.image}
									alt={movieData.title}
								/>
							</div>
							<div className='movie-details'>
								<div className='mb-10 text-center'>
									<h1 className='md:text-3xl text-2xl mb-4'>
										{movieData.fullTitle}
									</h1>
									<div className='md:text-xl text-lg'>
										<p className='mb-2'>
											Rating: {movieData.imDbRating}/10
										</p>
										<p className='mb-2'>
											{getDate(movieData.releaseDate)}
											{" | "}
											{movieData.runtimeMins} mins
										</p>
										<p className='mb-6'>
											{movieData.genres}
										</p>
									</div>
								</div>
								{movieData.plot && (
									<div>
										<h1 className='md:text-2xl text-xl mb-3'>
											Overview
										</h1>
										<p className='md:text-lg text-md mb-8'>
											{movieData.plot}
										</p>
									</div>
								)}
								{movieData.awards && (
									<div>
										<h1 className='md:text-2xl text-xl mb-3'>
											Awards
										</h1>
										<p className='md:text-lg text-md mb-8'>
											{movieData.awards}
										</p>
									</div>
								)}
								{movieData.stars && (
									<div>
										<h1 className='md:text-2xl text-xl mb-3'>
											Top Cast
										</h1>
										<p className='md:text-lg text-md mb-6'>
											{movieData.stars}
										</p>
									</div>
								)}
								{movieData.trailer.link && (
									<div className='text-center md:text-left'>
										<button
											type='button'
											className='trailer-btn mt-8 rounded-xl px-6 py-3 text-xl'
											onClick={handleClick}
										>
											Watch Trailer
										</button>
									</div>
								)}
							</div>
						</div>
						<div className='text-center'>
							<h3 className='md:text-3xl text-2xl mb-10 md:mt-2 mt-14'>
								You might also like
							</h3>
						</div>
						<Cards
							movies={movieData.similars}
							setUpdatedId={setUpdatedId}
						/>
					</div>
				) : (
					<div className='flex flex-col h-[90vh] items-center justify-center'>
						<p className='md:text-2xl sm:text-xl'>
							API limit exceeded, try again later
						</p>
					</div>
				)
			) : (
				<div></div>
			)}
		</div>
	)
}
export default MovieDetails

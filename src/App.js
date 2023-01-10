import { useEffect, useState } from "react"
import movieJsonData from "./data/movieJsonData"
import seriesJsonData from "./data/seriesJsonData"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import { useParams } from "react-router-dom"
// import Home from "./pages/Home"
import MovieDetails from "./pages/MovieDetails"
import Home from "./pages/Home"

const loadMovieData = async () =>
	await JSON.parse(JSON.stringify(movieJsonData))
const loadSeriesData = async () =>
	await JSON.parse(JSON.stringify(seriesJsonData))

// const API_KEY = process.env.REACT_APP_API_KEY
function App() {
	const [loading, setLoading] = useState(null)

	const [movies, setMovies] = useState(null)
	const [series, setSeries] = useState(null)
	const [blank, setBlank] = useState(null)

	// const params = useParams()
	// const [updatedId, setUpdatedId] = useState(params.id)

	useEffect(() => {
		getTopMovies()
		getTopSeries()
	}, [])

	const getTopMovies = async () => {
		setLoading(true)
		const data = await loadMovieData()
		setMovies(data)
		setLoading(false)
	}

	const getTopSeries = async () => {
		setLoading(true)
		const data = await loadSeriesData()
		setSeries(data)
		setLoading(false)
	}

	return (
		<Router>
			<Routes>
				<Route
					path='/top-60-tvs'
					element={
						<Home
							movies={series}
							setMovies={setSeries}
							loading={loading}
							setLoading={setLoading}
						/>
					}
				/>
				<Route path='/:id' element={<MovieDetails />} />
				<Route
					path='/'
					element={
						<Home
							movies={blank}
							setMovies={setBlank}
							loading={loading}
							setLoading={setLoading}
						/>
					}
				/>
				<Route
					path='/top-60-movies'
					element={
						<Home
							movies={movies}
							setMovies={setMovies}
							loading={loading}
							setLoading={setLoading}
						/>
					}
				/>
			</Routes>
		</Router>
	)
}

export default App

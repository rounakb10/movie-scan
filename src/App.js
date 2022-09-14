import { useEffect, useState } from "react"
import jsonData from "./test.json"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import MovieDetails from "./pages/MovieDetails"

const loadData = async () => await JSON.parse(JSON.stringify(jsonData))

function App() {
	const [loading, setLoading] = useState(null)
	const [movies, setMovies] = useState(null)

	useEffect(() => {
		return () => {
			getTopMovies()
		}
	}, [])

	const getTopMovies = async () => {
		setLoading(true)
		// const response = await fetch(
		// 	`https://imdb-api.com/en/API/Top250Movies/${API_KEY}`
		// )

		// const data = await response.json()

		const data = await loadData()
		setMovies(data.items)
		setLoading(false)
	}

	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={
						<Home
							movies={movies}
							setMovies={setMovies}
							loading={loading}
							setLoading={setLoading}
						/>
					}
				/>
				<Route path='/:id' element={<MovieDetails />} />
			</Routes>
		</Router>
	)
}

export default App

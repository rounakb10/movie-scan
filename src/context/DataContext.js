import { createContext, useState } from "react"

import movieJsonData from "../data/movieJsonData"
import seriesJsonData from "../data/seriesJsonData"

const loadMovieData = async () =>
	await JSON.parse(JSON.stringify(movieJsonData))
const loadSeriesData = async () =>
	await JSON.parse(JSON.stringify(seriesJsonData))

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = `https://imdb-api.com/en/API`

const DataContext = createContext()

export const DataProvider = ({ children }) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(null)
	const [errorMessage, setErrorMessage] = useState("")

	const getTopMovies = async () => {
		setLoading(true)
		const data = await loadMovieData()
		setErrorMessage(data.errorMessage)
		setData(data.items)
		setLoading(false)
	}

	const getTopSeries = async () => {
		setLoading(true)
		const data = await loadSeriesData()
		setErrorMessage(data.errorMessage)
		setData(data.items)
		setLoading(false)
	}

	const getNothing = async () => {
		setLoading(null)
		setData(null)
		setErrorMessage("")
	}

	const search = async (title) => {
		setLoading(true)
		if (title !== "") {
			const response = await fetch(
				`${API_URL}/Search/${API_KEY}/${title}`
			)
			const data = await response.json()
			if (data.results) setData(data.results)
			setErrorMessage(data.errorMessage)
		}
		setLoading(false)
	}

	return (
		<DataContext.Provider
			value={{
				data,
				loading,
				errorMessage,
				getTopMovies,
				getTopSeries,
				getNothing,
				search,
			}}
		>
			{children}
		</DataContext.Provider>
	)
}

export default DataContext

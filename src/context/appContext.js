import { createContext, useState } from "react"

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = `https://imdb-api.com/en/API`

const appContext = createContext()

export const DataProvider = ({ children }) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(null)
	const [errorMessage, setErrorMessage] = useState("")

	const getTopMovies = async () => {
		setLoading(true)
		const response = await fetch("/data/moviesData.json")
		const data = await response.json()
		setErrorMessage(data.errorMessage)
		setData(data.items)
		setLoading(false)
	}

	const getTopSeries = async () => {
		setLoading(true)
		const response = await fetch("/data/seriesData.json")
		const data = await response.json()
		setErrorMessage(data.errorMessage)
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

	const switchTheme = () => {}

	return (
		<appContext.Provider
			value={{
				data,
				loading,
				errorMessage,
				getTopMovies,
				getTopSeries,
				getNothing,
				search,
				switchTheme,
			}}
		>
			{children}
		</appContext.Provider>
	)
}

export default appContext

import "./home.css"
import InputGroup from "../components/InputGroup"
import Cards from "../components/Cards"
import PropagateLoader from "react-spinners/PropagateLoader"
import Navbar from "../components/Navbar"
import { useState, useEffect } from "react"

import movieJsonData from "../data/movieJsonData"
import seriesJsonData from "../data/seriesJsonData"

const loadMovieData = async () =>
	await JSON.parse(JSON.stringify(movieJsonData))
const loadSeriesData = async () =>
	await JSON.parse(JSON.stringify(seriesJsonData))

function Home({ name = "" }) {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(null)
	const [errorMessage, setErrorMessage] = useState("")

	const setUpdatedId = () => {}

	useEffect(() => {
		if (name === "movie") getTopMovies()
		else if (name === "tv") getTopSeries()
		else {
			setLoading(null)
			setData(null)
			setErrorMessage("")
		}
	}, [name])

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

	return (
		<div className='flex flex-col h-screen items-center justify-between'>
			<Navbar />

			<main className='self-stretch'>
				<InputGroup
					setMovies={setData}
					setLoading={setLoading}
					setErrorMessage={setErrorMessage}
				/>
				{loading && (
					<div className='text-center mt-4'>
						<PropagateLoader
							loading={loading}
							size={14}
							color='var(--text)'
						/>
					</div>
				)}
				<div className='overflow-hidden p-2'>
					{data ? (
						data.errorMessage === "" || errorMessage === "" ? (
							<Cards movies={data} setUpdatedId={setUpdatedId} />
						) : (
							<div className='flex flex-col h-[85vh] items-center justify-center'>
								<p className='md:text-2xl sm:text-xl'>
									API limit exceeded, try again later
								</p>
							</div>
						)
					) : (
						<></>
					)}
				</div>
			</main>
			<footer className='flex self-stretch justify-center py-1'>
				<p className='footer-text'>
					Data provided by <a href='https://imdb-api.com'>IMDB-API</a>
				</p>
			</footer>
		</div>
	)
}
export default Home

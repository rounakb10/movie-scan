import InputGroup from "../components/InputGroup"
import "./home.css"
import Cards from "../components/Cards"
// import { useState } from "react"
import PropagateLoader from "react-spinners/PropagateLoader"
import Navbar from "../components/Navbar"
import { useState } from "react"

function Home({ movies, setMovies, loading, setLoading }) {
	// const [movies, setMovies] = useState()
	const setUpdatedId = () => {}
	// console.log(errorMessage)
	const [errorMessage, setErrorMessage] = useState("")
	return (
		<div className='flex flex-col h-screen items-center justify-between'>
			<Navbar />

			<main className='self-stretch'>
				<InputGroup
					setMovies={setMovies}
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
					{movies ? (
						movies.errorMessage === "" || errorMessage === "" ? (
							<Cards
								movies={movies.items || movies}
								setUpdatedId={setUpdatedId}
							/>
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

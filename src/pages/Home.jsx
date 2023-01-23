import InputGroup from "../components/InputGroup"
import Cards from "../components/Cards"
import PropagateLoader from "react-spinners/PropagateLoader"
import Navbar from "../components/Navbar"
import { useContext } from "react"
import appContext from "../context/appContext"

function Home() {
	const { data, loading, errorMessage } = useContext(appContext)

	const setUpdatedId = () => {}

	return (
		<div className='flex flex-col h-screen items-center justify-between '>
			<Navbar />

			<main className='self-stretch'>
				<InputGroup />
				{loading && (
					<div className='text-center mt-4'>
						<PropagateLoader
							loading={loading}
							size={14}
							color='var(--text)'
						/>
					</div>
				)}

				{data ? (
					data.errorMessage === "" || errorMessage === "" ? (
						<div className='overflow-hidden p-2'>
							<Cards data={data} setUpdatedId={setUpdatedId} />
						</div>
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
			</main>
			<footer className='flex self-stretch justify-center py-1 bg-surface text-text text-sm'>
				<p>
					Data provided by{" "}
					<a
						href='https://imdb-api.com'
						className='default-transition hover:text-grey'
					>
						IMDB-API
					</a>
				</p>
			</footer>
		</div>
	)
}

export default Home

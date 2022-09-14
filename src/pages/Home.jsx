import Navbar from "../components/Navbar"
import InputGroup from "../components/InputGroup"
import MovieCard from "../components/MovieCard"
import { ClipLoader } from "react-spinners"

function Home({ movies, setMovies, loading, setLoading }) {
	const setUpdatedId = () => {}
	return (
		<div>
			<Navbar />

			<InputGroup setMovies={setMovies} setLoading={setLoading} />
			<div className='text-center'>
				<br />
				<ClipLoader loading={loading} size={100} color='white' />
			</div>
			<div className='overflow-hidden p-2 bg-dark'>
				<div className='row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 row-cols-xl-6  g-4'>
					{movies &&
						movies.map((item) => (
							<MovieCard
								movie={item}
								key={item.id}
								setUpdatedId={setUpdatedId}
							/>
						))}
				</div>
			</div>
		</div>
	)
}
export default Home

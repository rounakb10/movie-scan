import { useContext } from "react"
// import { Link } from "react-router-dom"
import DataContext from "../context/DataContext"
import "./navbar.css"
function Navbar() {
	const { getTopSeries, getTopMovies, getNothing } = useContext(DataContext)
	return (
		<nav className='flex self-stretch gap-6 justify-between items-center mb-4 px-6'>
			<button className='nav-item nav-brand py-4' onClick={getNothing}>
				MovieDB
			</button>
			<div className='flex md:gap-6 gap-3'>
				<button className='nav-item' onClick={getTopMovies}>
					Top 60 Movies
				</button>

				<button className='nav-item' onClick={getTopSeries}>
					Top 60 TV
				</button>
			</div>
		</nav>
	)
}
export default Navbar

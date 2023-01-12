import { Link } from "react-router-dom"
import "./navbar.css"
function Navbar() {
	return (
		<nav className='flex self-stretch gap-6 justify-between items-center mb-4 px-6'>
			<Link className='nav-item nav-brand py-4' to='/'>
				MovieDB
			</Link>
			<div className='flex md:gap-6 gap-3'>
				<Link className='nav-item' to='/top-60-movies'>
					Top 60 Movies
				</Link>

				<Link className='nav-item' to='/top-60-tvs'>
					Top 60 TV
				</Link>
			</div>
		</nav>
	)
}
export default Navbar

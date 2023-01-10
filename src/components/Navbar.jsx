import "./navbar.css"
function Navbar() {
	return (
		<nav className='flex self-stretch gap-6 justify-between items-center mb-4 px-6'>
			<a className='nav-item nav-brand py-4' href='/'>
				MovieDB
			</a>
			<div className='flex md:gap-6 gap-3'>
				<a className='nav-item' href='/top-60-movies'>
					Top 60 Movies
				</a>

				<a className='nav-item' href='/top-60-tvs'>
					Top 60 TV
				</a>
			</div>
		</nav>
	)
}
export default Navbar

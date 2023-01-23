import { useContext } from "react"
import appContext from "../context/appContext"
import { Theme } from "react-switch-theme"
function Navbar() {
	const { getTopSeries, getTopMovies, getNothing } = useContext(appContext)
	// eslint-disable-next-line
	const [theme, toggleTheme] = useContext(Theme)
	return (
		<nav className='flex self-stretch gap-6 justify-between items-center mb-4 px-6 bg-surface'>
			<button
				className='nav-item text-2xl py-4 default-transition hover:text-grey'
				onClick={getNothing}
			>
				MovieDB
			</button>
			<div className='flex md:gap-6 gap-3'>
				<button
					className='default-transition hover:text-grey'
					onClick={getTopMovies}
				>
					Top 60 Movies
				</button>

				<button
					className='default-transition hover:text-grey'
					onClick={getTopSeries}
				>
					Top 60 TV
				</button>
				<button className='default-transition' onClick={toggleTheme}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						className='w-6 default-transition stroke-text hover:stroke-grey'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
						/>
					</svg>
				</button>
			</div>
		</nav>
	)
}
export default Navbar

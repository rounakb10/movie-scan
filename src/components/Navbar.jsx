function Navbar() {
	return (
		<nav className='navbar sticky-top navbar-expand bg-dark navbar-dark'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='/'>
					MovieScan
				</a>

				{/* <div
					className='collapse navbar-collapse'
					id='navbarNavAltMarkup'
				>
					<div className='navbar-nav'>
						<a className='nav-link' href='#movies'>
							Movies
						</a>
						<a className='nav-link' href='#series'>
							Series
						</a>
					</div>
				</div> */}
				{/* <form className='d-flex' role='search'>
					<input
						className='form-control me-2'
						type='search'
						placeholder='Search'
						aria-label='Search'
					/>
					<button className='btn btn-outline-light' type='submit'>
						Search
					</button>
				</form> */}
				{/* <button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button> */}
			</div>
		</nav>
	)
}
export default Navbar

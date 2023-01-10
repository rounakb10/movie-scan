import { useState } from "react"
import "./input_group.css"
const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = `https://imdb-api.com/en/API`

function InputGroup({ setMovies, setLoading }) {
	const [searchTerm, setSearchTerm] = useState("")
	const [searchType, setSearchType] = useState("")

	const search = async (title, type) => {
		setLoading(true)
		if (title !== "") {
			const response = await fetch(
				`${API_URL}/Search${type}/${API_KEY}/${title}`
			)
			const data = await response.json()
			if (data.results) setMovies(data.results)
		}
		setLoading(false)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		search(searchTerm, searchType)
	}

	const handleChange = (e) => setSearchTerm(e.target.value)
	return (
		<form
			onSubmit={handleSubmit}
			className='flex justify-center input-form mx-5 justify-self-center'
		>
			<input
				type='text'
				className='search-box px-4 py-3 text-lg rounded-l-xl'
				placeholder='Search'
				value={searchTerm}
				onChange={handleChange}
			/>
			<button
				className='search-btn px-2 rounded-r-xl'
				type='submit'
				onClick={() => {
					setSearchType("")
				}}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='currentColor'
					className='search-icon'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
					/>
				</svg>
			</button>
		</form>
	)
}
export default InputGroup

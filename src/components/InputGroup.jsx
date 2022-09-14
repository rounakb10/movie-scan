import { useState } from "react"

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
		<form onSubmit={handleSubmit}>
			<div className='input-group  bg-dark pt-2 pb-1 px-2'>
				<input
					type='text'
					className='form-control'
					placeholder='Movie/TV Series name'
					aria-label="Recipient's username with two button addons"
					value={searchTerm}
					onChange={handleChange}
				/>
				<button
					className='btn btn-outline-primary'
					type='submit'
					onClick={() => {
						setSearchType("")
					}}
				>
					Any
				</button>
				<button
					className='btn btn-outline-primary'
					type='submit'
					onClick={() => {
						setSearchType("Movie")
					}}
				>
					Movie
				</button>
				<button
					className='btn btn-outline-primary'
					type='submit'
					onClick={() => {
						setSearchType("Series")
					}}
				>
					TV Series
				</button>
			</div>
		</form>
	)
}
export default InputGroup

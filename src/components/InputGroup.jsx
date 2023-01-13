import { useState, useContext } from "react"
import DataContext from "../context/DataContext"
import "./input_group.css"

function InputGroup() {
	const [searchTerm, setSearchTerm] = useState("")
	const { search } = useContext(DataContext)

	const handleSubmit = (e) => {
		e.preventDefault()
		search(searchTerm)
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
			<button className='search-btn px-2 rounded-r-xl' type='submit'>
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

import { Link } from "react-router-dom"
import "./movie_card.css"
import placeholder from "../assets/placeholder.svg"
const MovieCard = ({ dataItem, setUpdatedId }) => {
	const { title, image, imDbRating, id } = dataItem

	const clickHandler = () => {
		setUpdatedId(id)
	}

	return (
		<>
			<div className='card rounded-xl flex'>
				<Link to={`/${id}`} className='link block'>
					<div
						onClick={clickHandler}
						className='flex h-full flex-col items-center text-center justify-between'
					>
						<div className='flex h-full items-center  rounded-xl'>
							<img
								src={image || placeholder}
								className='card-img rounded-xl'
								width='100%'
								// height='85%'
								alt={title}
								loading='lazy'
							/>
						</div>
						<div className='card-body md:px-1 my-1 md:my-3 flex flex-col md:min-h-[15%] items-center'>
							<div className='card-title'>
								{title.length > 70
									? title.substring(0, 70) + "..."
									: title}
							</div>
							<div className=''>
								<p className='card-text'>
									{imDbRating && `IMDb : ${imDbRating} / 10`}
								</p>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</>
	)
}

export default MovieCard

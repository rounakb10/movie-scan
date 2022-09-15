import { Link } from "react-router-dom"

const MovieCard = ({ movie, setUpdatedId }) => {
	const { title, image, imDbRating, id } = movie

	const clickHandler = () => {
		setUpdatedId(id)
	}

	return (
		<>
			<div className='col'>
				<Link to={`/${id}`} className='link'>
					<div
						className='card h-100 text-light bg-dark shadow-lg'
						onClick={clickHandler}
					>
						<img src={image} className='card-img-top' alt={title} />
						<div className='card-body'>
							<h5 className='card-title'>{title}</h5>
							<p className='card-text'>
								{imDbRating ? `IMDB : ${imDbRating} / 10` : ""}
							</p>
						</div>
					</div>
				</Link>
			</div>
		</>
	)
}

export default MovieCard

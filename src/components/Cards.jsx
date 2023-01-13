import MovieCard from "./MovieCard"
function Cards({ data, setUpdatedId }) {
	return (
		<div className='grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-3 grid-cols-2 lg:gap-8 gap-6 my-4 mx-3'>
			{data &&
				data.map(
					(item, index) =>
						index < 60 && (
							<MovieCard
								dataItem={item}
								key={item.id}
								setUpdatedId={setUpdatedId}
							/>
						)
				)}
		</div>
	)
}
export default Cards

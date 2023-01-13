import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DataProvider } from "./context/DataContext"
import MovieDetails from "./pages/MovieDetails"
import Home from "./pages/Home"

function App() {
	return (
		<DataProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/top-60-tvs' element={<Home name='tv' />} />
					<Route path='/:id' element={<MovieDetails />} />
					<Route path='/' element={<Home />} />
					<Route
						path='/top-60-movies'
						element={<Home name='movie' />}
					/>
				</Routes>
			</BrowserRouter>
		</DataProvider>
	)
}

export default App

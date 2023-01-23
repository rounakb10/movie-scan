import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { ThemeProvider } from "react-switch-theme"

const colors = {
	dark: {
		// bg: "#000",
		// surface: "#121212",
		// card: "#121212",
		// text: "#ced4da",
		// grey: "#868e96",
		// lightgrey: "#adb5bd",
		bg: "#16161a",
		surface: "#242629",
		card: "#242629",
		text: "#94a1b2",
		grey: "#676971",
		lightgrey: "#72757e",
	},
	light: {
		// bg: "#e3f6f5",
		// surface: "#fffffe",
		// card: "#fffffe",
		// text: "#272343",
		// grey: "#bae8e8",
		// lightgrey: "#e3f6f5",
		bg: "#fef6e4",
		surface: "#f3d2c1",
		card: "#f3d2c1",
		text: "#172c66",
		grey: "#dbbdae",
		lightgrey: "#f7e0d4",
	},
}
const activeMode = "light"
const offlineStorageKey = "moviedb-theme-key"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<ThemeProvider
			colors={colors}
			activeMode={activeMode}
			offlineStorageKey={offlineStorageKey}
		>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)

/*
reduce css with tailwind
search box
implement search independently

pagination
colors


*/

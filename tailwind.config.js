/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				surface: "var(--surface)",
				card: "var(--card)",
				bg: "var(--bg)",
				text: "var(--text)",
				grey: "var(--grey)",
				lightgrey: "var(--lightgrey)",
			},
		},
	},
	plugins: [],
}

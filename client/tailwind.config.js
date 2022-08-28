/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/**.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xxsm: "350px",
			xsm: "484px",
			sm: "640px",
			md: "798px",
			lg: "1024px",
			xl: "1280px",
		},

		colors: {
			lightGray: "#EEEEEE",
			backgroundBlue: "#00C9FA",
			whiteGray: "#F4F4F4",
			lightishGray: "#e2e2e2",
			darkLightishGray: "#bababa",
			lightishBlue: "#9EECFF",
			darkLightishBlue: "#00A7DC",
			darkerLightishBlue: "#0098C8",
			redError: "#ff1212",
			greenSuccess: "#00cc6d",
			lightishBlack: "#242424",
			black: "#000000",
			white: "#FFFFFF",
		},
		extend: {
			fontFamily: { montserrat: ["Monterrat", "sans-serif"] },
		},
	},
	plugins: [],
};

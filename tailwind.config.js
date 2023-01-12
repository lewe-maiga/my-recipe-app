module.exports = {
	content: ["./App.tsx", "./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins-"],
			},
			colors: {
				primary: {
					DEFAULT: "#43927D",
				},
				secondary: {
					DEFAULT: "#454545",
				},
			},
		},
	},
	plugins: [],
	corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};

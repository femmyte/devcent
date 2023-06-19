/** @type {import('tailwindcss').Config} */
module.exports = {
	// plugins: [require("daisyui")],
	content: [
		'./node_modules/flowbite-react/**/*.js',
		'./public/**/*.html',
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primaryYellow: '#FFBA0E',
				primaryPurple: '#E40084',
				success: '#027A48',
				successLight: '#ECFDF3',
				primaryBlue: '#2F80ED',
				blueLight: 'rgba(47, 128, 237, 0.15)',
			},
			fontFamily: {
				space: ['Space Grotesk'],
				dmsans: ['DM Sans'],
				kaushan: ['Kaushan Script'],
				source: ['Source Sans Pro'],
			},
			gridTemplateColumns: {
				'1/5': '1fr 5fr',
			},
		},
	},
	plugins: [
		// require('@tailwindcss/forms'),
		// require('flowbite/plugin'),
	],
};

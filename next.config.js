/** @type {import('next').NextConfig} */
// module.exports = {
// 	webpack: (config) => {
// 		config.module.rules.push({
// 			test: /\.svg$/,
// 			issuer: {
// 				test: /\.(js|ts)x?$/,
// 			},
// 			use: ['@svgr/webpack'],
// 		});
// 		return config;
// 	},
// };

// issuer: {
			// 	test: /\.(js|ts)x?$/,
			// },

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
};

module.exports = nextConfig;


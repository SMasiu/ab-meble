module.exports = {
	pathPrefix: '/ab-meble',
	siteMetadata: {
		title: `AB Meble`,
		description: `AB Meble`,
		author: `@gatsbyjs`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/ab-meble-icon.svg`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Montserrat`, `Comfortaa`],
				display: 'swap',
			},
		},
		{
			resolve: 'gatsby-background-image-es5',
			options: {
				// add your own characters to escape, replacing the default ':/'
				specialChars: '/:',
			},
		},
	],
}

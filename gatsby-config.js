module.exports = {
	siteMetadata: {
		title: `Milan's blog`,
		description: `Milan Paunovic's blog`,
	},
	flags: {
		DEV_SSR: true,
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-remark`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/content/posts/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `about`,
				path: `${__dirname}/content/about/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `contact`,
				path: `${__dirname}/content/contact/`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 600,
						},
					},
				],
			},
		},
	],
};

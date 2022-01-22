module.exports = {
	siteMetadata: {
		title: `Milan's blog`,
		description: `Milan Paunovic's blog`,
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-transformer-remark`,
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
	],
};

const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
	const index = path.resolve(`src/templates/Home.js`);

	const result = await graphql(`
		query {
			allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
				nodes {
					frontmatter {
						slug
						title
						subtitle
					}
					excerpt(format: PLAIN)
					html
				}
			}
		}
	`);

	const { nodes } = result.data.allMarkdownRemark;
	const numOfPosts = nodes.length;
	const postsPerPage = 4;
	const numOfPages = Math.ceil(numOfPosts / postsPerPage);

	Array.from({ length: numOfPages }).forEach((_, i) => {
		actions.createPage({
			path: i === 0 ? `/` : `/blog/${i + 1}`,
			component: index,
			context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numOfPages,
				currentPage: i + 1,
			},
		});
	});
};

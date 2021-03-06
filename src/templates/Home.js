import React from 'react';
import Post from '../components/posts/Post';
import { graphql } from 'gatsby';
import NavGrid from '../components/posts/NavGrid';

const Home = ({ pageContext, data }) => {
	return (
		<div>
			<div>
				{data.allMarkdownRemark.edges.map((item) => {
					return (
						<Post
							title={item.node.frontmatter.title}
							body={item.node.excerpt}
							slug={item.node.frontmatter.slug}
							key={item.node.frontmatter.slug}
						/>
					);
				})}
			</div>
			<NavGrid
				pageNumber={pageContext.currentPage}
				numOfPages={pageContext.numOfPages}
			/>
		</div>
	);
};

export default Home;

export const blogListQuery = graphql`
	query blogListQuery($skip: Int!, $limit: Int!) {
		allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/posts/" } }
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					frontmatter {
						title
						slug
						date(formatString: "DD MM YYYY")
					}
					excerpt(format: PLAIN)
				}
			}
		}
	}
`;

import { graphql } from 'gatsby';
import React from 'react';
import { post, postContent } from './Blogpost.module.scss';

const Post = ({ data }) => {
	console.log(data);
	return (
		<div className={post}>
			<h1>{data.markdownRemark.frontmatter.title}</h1>
			<div
				className={postContent}
				dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
			/>
		</div>
	);
};

export default Post;

export const query = graphql`
	query ($id: String) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
			}
			html
		}
	}
`;

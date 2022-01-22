import { graphql } from 'gatsby';
import React from 'react';
import { aboutdiv } from './About.module.scss';

const about = ({ data }) => {
	return (
		<div
			className={aboutdiv}
			dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
		/>
	);
};

export default about;

export const query = graphql`
	query {
		markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
			html
		}
	}
`;

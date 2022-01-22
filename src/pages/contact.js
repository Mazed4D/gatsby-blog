import { graphql } from 'gatsby';
import React from 'react';
import { contactdiv } from './Contact.module.scss';

const contact = ({ data }) => {
	return (
		<div
			className={contactdiv}
			dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
		/>
	);
};

export default contact;

export const query = graphql`
	query {
		markdownRemark(fileAbsolutePath: { regex: "/contact/" }) {
			html
		}
	}
`;

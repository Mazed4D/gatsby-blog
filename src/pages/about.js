import { graphql } from 'gatsby';
import React from 'react';

const about = ({ data }) => {
	return <h1>{data.site.siteMetadata.description}</h1>;
};

export default about;

export const query = graphql`
	query {
		site {
			siteMetadata {
				description
			}
		}
	}
`;

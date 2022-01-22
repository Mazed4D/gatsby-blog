import { navigate } from 'gatsby';
import React from 'react';
import { post } from './Post.module.scss';

const Post = ({ title, body, slug }) => {
	const navFn = () => {
		navigate(`/posts/${slug}`);
	};

	return (
		<div className={post} onClick={navFn}>
			<h3>{title}</h3>
			<p>{body.substring(0, 46) + '...'}</p>
		</div>
	);
};

export default Post;

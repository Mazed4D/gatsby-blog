import React, { Children } from 'react';
import '../../styles/global.scss';
import { layout } from './Wrapper.module.scss';
import Footer from './Footer';
import TopNav from './TopNav';
import Helmet from 'react-helmet';

const Wrapper = ({ children }) => {
	return (
		<div className={layout}>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Milan's Blog</title>
				<link rel='canonical' href='http://mysite.com/example' />
			</Helmet>
			<TopNav />
			{children}
			<Footer />
		</div>
	);
};

export default Wrapper;

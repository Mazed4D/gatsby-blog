import React, { Children } from 'react';
import '../../styles/global.scss';
import { layout } from './Wrapper.module.scss';
import Footer from './Footer';
import TopNav from './TopNav';

const Wrapper = ({ children }) => {
	return (
		<div className={layout}>
			<TopNav />
			{children}
			<Footer />
		</div>
	);
};

export default Wrapper;

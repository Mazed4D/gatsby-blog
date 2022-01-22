import { Link } from 'gatsby';
import { topNav, navList, navLink } from './TopNav.module.scss';
import React from 'react';

const TopNav = () => {
	return (
		<div className={topNav}>
			<ul className={navList}>
				<li>
					<Link to='/' className={navLink}>
						Home
					</Link>
				</li>
				<li>
					<Link to='/about' className={navLink}>
						About
					</Link>
				</li>
				<li>
					<Link to='/contact' className={navLink}>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default TopNav;

import { navigate } from 'gatsby';
import React from 'react';
import { navdiv } from './NavGrid.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const NavGrid = ({ pageNumber, numOfPages }) => {
	const changePageHandler = (back) => {
		const newPageNum = pageNumber + back;
		if (newPageNum < 2) {
			navigate('/');
		} else {
			navigate(`/blog/${newPageNum}`);
		}
	};

	return (
		<div className={navdiv}>
			{pageNumber > 1 ? (
				<button onClick={() => changePageHandler(-1)}>
					<FontAwesomeIcon icon={faArrowLeft} />
				</button>
			) : (
				<button disabled>
					<FontAwesomeIcon icon={faArrowLeft} />
				</button>
			)}
			<p>{pageNumber}</p>
			{pageNumber !== numOfPages ? (
				<button onClick={() => changePageHandler(1)}>
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			) : (
				<button disabled>
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			)}
		</div>
	);
};

export default NavGrid;

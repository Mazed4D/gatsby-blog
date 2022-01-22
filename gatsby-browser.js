const React = require('react');
const Wrapper = require('./src/components/layout/Wrapper').default;

exports.wrapPageElement = ({ element }) => {
	return <Wrapper>{element}</Wrapper>;
};

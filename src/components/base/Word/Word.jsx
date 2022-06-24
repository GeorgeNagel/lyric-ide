import PropTypes from 'prop-types';

const Word = ({ children }) => <div>{children}</div>;

Word.propTypes = {
    children: PropTypes.node,
};
Word.defaultProps = {
    children: null,
};

export default Word;

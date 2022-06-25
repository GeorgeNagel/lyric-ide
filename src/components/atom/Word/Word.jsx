import PropTypes from 'prop-types';

import styles from './Word.module.css';

const Word = ({ children }) => <span className={styles.word}>{children}</span>;

Word.propTypes = {
    children: PropTypes.node,
};
Word.defaultProps = {
    children: null,
};

export default Word;

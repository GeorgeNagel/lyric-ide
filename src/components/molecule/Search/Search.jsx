import { MagnifyingGlass } from '../../atom/Icon/Icon';

import styles from './Search.module.css';

const Search = ({ text, onChangeText }) => (
    <span className={styles.searchRow}>
        <input
            type="text"
            value={text}
            onChange={onChangeText}
            className={styles.searchBar}
        />
        <MagnifyingGlass className={styles.mag} />
    </span>
);

export default Search;

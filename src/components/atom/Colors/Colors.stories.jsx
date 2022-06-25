import { combineClassNames } from '../../../utils/css';

import styles from './Colors.stories.module.css';

export default {
    title: 'Atom / Colors',
};

export const Colors = () => (
    <div>
        <div className={combineClassNames(styles.black, styles.colorTile)}>
            Black
        </div>
        <div className={combineClassNames(styles.dark1, styles.colorTile)}>
            Dark 1
        </div>
        <div className={combineClassNames(styles.dark2, styles.colorTile)}>
            Dark 2
        </div>
        <div className={combineClassNames(styles.dark3, styles.colorTile)}>
            Dark 3
        </div>
        <div className={combineClassNames(styles.light3, styles.colorTile)}>
            Light 3
        </div>
        <div className={combineClassNames(styles.light2, styles.colorTile)}>
            Light 2
        </div>
        <div className={combineClassNames(styles.light1, styles.colorTile)}>
            Light 1
        </div>
        <div className={combineClassNames(styles.white, styles.colorTile)}>
            White
        </div>
    </div>
);

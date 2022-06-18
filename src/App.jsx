import { useState } from 'react';
import styles from './App.module.css';

import OutlinePanel from './components/composite/OutlinePanel/OutlinePanel';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.app}>
            <OutlinePanel />
        </div>
    );
}

export default App;

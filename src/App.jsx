import { useState } from 'react';
import styles from './App.module.css';

import Panel from './components/base/Panel/Panel';
import EditableContent from './components/base/EditableContent/EditableContent';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.app}>
            <Panel />
            <EditableContent />
        </div>
    );
}

export default App;

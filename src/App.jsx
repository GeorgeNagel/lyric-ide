import styles from './App.module.css';

import Freewrite from './components/composite/Freewrite/Freewrite';
import WordGraph from './components/composite/WordGraph/WordGraph';
import Compose from './components/composite/Compose/Compose';

function App() {
    return (
        <div className={styles.app}>
            <Freewrite />
            <WordGraph />
            <Compose />
        </div>
    );
}

export default App;

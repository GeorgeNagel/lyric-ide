import styles from './App.module.css';

import Outline from './components/composite/Outline/Outline';
import Freewrite from './components/composite/Freewrite/Freewrite';
import WordGraph from './components/composite/WordGraph/WordGraph';
import Compose from './components/composite/Compose/Compose';

function App() {
    return (
        <div className={styles.app}>
            <Outline />
            <Freewrite />
            {/* <WordGraph />
            <Compose /> */}
        </div>
    );
}

export default App;

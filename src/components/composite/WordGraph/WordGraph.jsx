import styles from './WordGraph.module.css';

import Panel from '../../base/Panel/Panel';
import PanelHeader from '../../base/PanelHeader/PanelHeader';
import EditableContent from '../../base/EditableContent/EditableContent';

const WordGraph = ({}) => (
    <Panel>
        <PanelHeader>🧩 WordGraph/Pool</PanelHeader>
        <EditableContent />
    </Panel>
);

export default WordGraph;

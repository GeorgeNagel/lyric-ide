import styles from './WordGraph.module.css';

import Panel from '../../base/Panel/Panel';
import PanelHeader from '../../base/PanelHeader/PanelHeader';
import EditableContent from '../../base/EditableContent/EditableContent';

const WordGraph = ({}) => (
    <div>
        <Panel>
            <PanelHeader>WordGraph/Pool</PanelHeader>
            <EditableContent />
        </Panel>
    </div>
);

export default WordGraph;

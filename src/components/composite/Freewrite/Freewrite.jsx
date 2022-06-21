import styles from './Freewrite.module.css';

import Panel from '../../base/Panel/Panel';
import PanelHeader from '../../base/PanelHeader/PanelHeader';
import EditableContent from '../../base/EditableContent/EditableContent';

const Freewrite = ({}) => (
    <Panel>
        <PanelHeader>📔 Freewrite/Scratch</PanelHeader>
        <EditableContent />
    </Panel>
);

export default Freewrite;

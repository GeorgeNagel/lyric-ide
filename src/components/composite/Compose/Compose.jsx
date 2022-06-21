import styles from './Compose.module.css';

import Panel from '../../base/Panel/Panel';
import PanelHeader from '../../base/PanelHeader/PanelHeader';
import EditableContent from '../../base/EditableContent/EditableContent';

const Compose = ({}) => (
    <Panel>
        <PanelHeader>
            🏗 Compose (Best version), With Notes/Comments/Alternates
        </PanelHeader>
        <EditableContent />
    </Panel>
);

export default Compose;

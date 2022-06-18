import styles from './Outline.module.css';

import Panel from '../../base/Panel/Panel';
import PanelHeader from '../../base/PanelHeader/PanelHeader';
import EditableContent from '../../base/EditableContent/EditableContent';

const Outline = ({}) => (
    <div>
        <Panel>
            <PanelHeader>Outline</PanelHeader>
            <EditableContent />
        </Panel>
    </div>
);

export default Outline;

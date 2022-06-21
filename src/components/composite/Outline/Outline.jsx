import { useSelector } from 'react-redux';

import styles from './Outline.module.css';
import { getText } from '../../../state/features/outlineSlice';

import Panel from '../../base/Panel/Panel';
import PanelHeader from '../../base/PanelHeader/PanelHeader';
import EditableContent from '../../base/EditableContent/EditableContent';

const Outline = ({}) => {
    const text = useSelector(getText);
    return (
        <Panel>
            <PanelHeader>💭 Outline</PanelHeader>
            <EditableContent>{text}</EditableContent>
        </Panel>
    );
};

export default Outline;

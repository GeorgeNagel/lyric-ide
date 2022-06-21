import { useSelector, useDispatch } from 'react-redux';

import styles from './Outline.module.css';
import { getText, setText } from '../../../state/features/outlineSlice';

import Panel from '../../base/Panel/Panel';
import PanelHeader from '../../base/PanelHeader/PanelHeader';
import EditableContent from '../../base/EditableContent/EditableContent';

const Outline = ({}) => {
    const text = useSelector(getText);
    const dispatch = useDispatch();

    return (
        <Panel>
            <PanelHeader>💭 Outline</PanelHeader>
            <EditableContent
                onChange={(e) => {
                    console.log(e);
                    dispatch(setText(e.target.innerHTML));
                }}
            >
                {text}
            </EditableContent>
        </Panel>
    );
};

export default Outline;

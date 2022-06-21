import { useSelector, useDispatch } from 'react-redux';

import styles from './Compose.module.css';
import { getText, setText } from '../../../state/features/composeSlice';
import Panel from '../../base/Panel/Panel';
import PanelHeader from '../../base/PanelHeader/PanelHeader';
import EditableContent from '../../base/EditableContent/EditableContent';

const Compose = ({}) => {
    const text = useSelector(getText);
    const dispatch = useDispatch();
    return (
        <Panel>
            <PanelHeader>
                🏗 Compose (Best version), With Notes/Comments/Alternates
            </PanelHeader>
            <EditableContent
                onChangeText={(text) => dispatch(setText(text))}
                text={text}
            />
        </Panel>
    );
};
export default Compose;

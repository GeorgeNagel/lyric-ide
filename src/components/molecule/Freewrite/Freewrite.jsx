import { useSelector, useDispatch } from 'react-redux';

import styles from './Freewrite.module.css';
import { getText, setText } from '../../../state/features/freewriteSlice';

import Panel from '../../base/Panel/Panel';
import PanelHeader from '../../base/PanelHeader/PanelHeader';
import EditableContent from '../../base/EditableContent/EditableContent';

const Freewrite = ({}) => {
    const text = useSelector(getText);
    const dispatch = useDispatch();
    return (
        <Panel>
            <PanelHeader>📔 Freewrite/Scratch</PanelHeader>
            <EditableContent
                onChangeText={(text) => dispatch(setText(text))}
                text={text}
            />
        </Panel>
    );
};

export default Freewrite;

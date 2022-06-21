import { useSelector, useDispatch } from 'react-redux';
import styles from './WordGraph.module.css';
import { getText, setText } from '../../../state/features/wordGraphSlice';
import Panel from '../../base/Panel/Panel';
import PanelHeader from '../../base/PanelHeader/PanelHeader';
import EditableContent from '../../base/EditableContent/EditableContent';

const WordGraph = ({}) => {
    const text = useSelector(getText);
    const dispatch = useDispatch();
    return (
        <Panel>
            <PanelHeader>🧩 WordGraph/Pool</PanelHeader>
            <EditableContent
                onChangeText={(text) => dispatch(setText(text))}
                text={text}
            />
        </Panel>
    );
};

export default WordGraph;

import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './WordGraph.module.css';
import { getText, setText } from '../../../state/features/wordGraphSlice';
import Panel from '../../base/Panel/Panel';
import PanelHeader from '../../base/PanelHeader/PanelHeader';
import Word from '../../base/Word/Word';
import EditableContent from '../../base/EditableContent/EditableContent';

export const WordGraphPure = ({ activeWord, text, onChangeText }) => (
    <Panel>
        <PanelHeader>🧩 WordGraph/Pool</PanelHeader>
        {activeWord ? <Word>{activeWord}</Word> : null}
        <EditableContent text={text} onChangeText={onChangeText} />
    </Panel>
);
WordGraphPure.propTypes = {
    text: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
};
WordGraphPure.defaultProps = {
    text: '',
};

const WordGraph = ({}) => {
    const text = useSelector(getText);
    const dispatch = useDispatch();
    return (
        <WordGraphPure
            text={text}
            onChangeText={(text) => dispatch(setText(text))}
        />
    );
};

export default WordGraph;

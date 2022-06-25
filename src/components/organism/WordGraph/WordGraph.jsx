import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './WordGraph.module.css';
import { getText, setText } from '../../../state/features/wordGraphSlice';
import Panel from '../../atom/Panel/Panel';
import Search from '../../molecule/Search/Search';
import PanelHeader from '../../atom/PanelHeader/PanelHeader';
import Word from '../../atom/Word/Word';
import EditableContent from '../../atom/EditableContent/EditableContent';

export const WordGraphPure = ({ activeWord, text, onChangeText }) => (
    <Panel>
        <PanelHeader>🧩 WordGraph/Pool</PanelHeader>
        <Panel>{activeWord ? <Word>{activeWord}</Word> : null}</Panel>
        <div className={styles.row}>
            <EditableContent text={text} onChangeText={onChangeText} />
            <Search />
        </div>
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

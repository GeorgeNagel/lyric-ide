import { useRef } from 'react';
import PropTypes from 'prop-types';
import ContentEditable from 'react-contenteditable';

import styles from './EditableContent.module.css';

const EditableContent = ({ text, onChangeText }) => {
    const editableRef = useRef();
    return (
        <ContentEditable
            innerRef={editableRef}
            html={text}
            onChange={(e) => {
                if (e.target.value != text) {
                    onChangeText(e.target.value);
                }
            }}
            className={styles.editableContent}
        />
    );
};
EditableContent.propTypes = {
    text: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
};
export default EditableContent;

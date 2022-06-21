import styles from './EditableContent.module.css';

const EditableContent = ({ text, onChange }) => (
    <div
        onInput={onChange}
        contentEditable="true"
        className={styles.editableContent}
        html={<p>{text}</p>}
    />
);

export default EditableContent;

import styles from './EditableContent.module.css';

const EditableContent = ({ children }) => (
    <div contentEditable="true" className={styles.editableContent}>
        {children}
    </div>
);

export default EditableContent;

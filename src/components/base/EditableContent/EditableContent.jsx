import styles from './EditableContent.module.css';

const EditableContent = ({}) => (
    <div contentEditable="true" className={styles.editableContent}>
        Foo
    </div>
);

export default EditableContent;

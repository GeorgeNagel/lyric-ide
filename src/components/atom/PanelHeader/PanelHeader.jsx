import styles from './PanelHeader.module.css';

const PanelHeader = ({ children }) => (
    <div className={styles.panelHeader}>{children}</div>
);

export default PanelHeader;

import EditableContent from './EditableContent';

export default {
    title: 'Base / EditableContent',
};

export const Default = () => <EditableContent />;
export const WithText = () => <EditableContent text="fooo" />;

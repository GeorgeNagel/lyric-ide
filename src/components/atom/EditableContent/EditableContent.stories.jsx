import EditableContent from './EditableContent';

export default {
    title: 'Atom / EditableContent',
};

export const Default = () => <EditableContent />;
export const WithText = () => <EditableContent text="fooo" />;

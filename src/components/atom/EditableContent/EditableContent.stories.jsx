import EditableContent from './EditableContent';

export default {
    title: 'Atom / Editable Content',
};

export const Default = () => <EditableContent />;
export const WithText = () => <EditableContent text="fooo" />;

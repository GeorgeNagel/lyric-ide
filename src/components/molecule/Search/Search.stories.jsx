import Search from './Search';

export default {
    title: 'Molecule / Search',
};

const onChangeText = (text) => console.log(text);

const Template = (args) => (
    <div style={{ backgroundColor: 'black' }}>
        <Search onChangeText={onChangeText} {...args} />
    </div>
);

export const Default = () => <Template />;
export const WithSearchTerm = () => <Template text="foo" />;

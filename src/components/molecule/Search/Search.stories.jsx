import Search from './Search';

export default {
    title: 'Molecule / Search',
};

const onChangeText = (text) => console.log(text);

const Template = (args) => <Search onChangeText={onChangeText} {...args} />;

export const Default = () => <Template />;
export const WithSearchTerm = () => <Template text="foo" />;

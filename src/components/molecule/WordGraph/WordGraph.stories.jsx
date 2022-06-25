import { WordGraphPure } from './WordGraph';

export default {
    title: 'Composite / WordGraphPure',
};

const onChangeText = (text) => {
    console.log(text);
};

const Template = (args) => (
    <WordGraphPure {...args} onChangeText={onChangeText} />
);

export const Default = () => <Template />;
export const WithTypingWord = () => <Template text="foo" />;
export const WithActiveWord = () => <Template activeWord="active" />;

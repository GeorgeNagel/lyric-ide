import { WordGraphPure } from './WordGraph';

export default {
    title: 'Organism / Word Graph Pure',
};

const onChangeText = (text) => {
    console.log(text);
};

const Template = (args) => (
    <WordGraphPure
        onChangeText={onChangeText}
        text="some typed text"
        activeWord="active word"
        {...args}
    />
);

export const Default = () => <Template />;
export const WithNoTypedWord = () => <Template text="" />;
export const WithNoActiveWord = () => <Template activeWord="" />;
export const WithActiveWordAndTypingWord = () => (
    <Template activeWord="active" text="foo" />
);

import Word from './Word';

const Template = (args) => (
    <div
        style={{ 'background-color': 'black', padding: '40px', height: '50%' }}
    >
        <Word {...args} />
    </div>
);

export const Default = () => <Template />;

export const WithTextChildren = () => <Template>Child</Template>;

export const WithShortWord = () => <Template>a</Template>;

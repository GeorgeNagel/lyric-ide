import Panel from './Panel';

export default {
    title: 'Atom / Panel',
};

export const Default = () => <Panel />;
export const WithChildren = () => (
    <Panel>
        <p>
            Some <emph>cool</emph> stuff
        </p>
    </Panel>
);

import Panel from './Panel';

export default {
    title: 'Base / Panel',
};

export const Default = () => <Panel />;
export const WithChildren = () => (
    <Panel>
        <p>
            Some <emph>cool</emph> stuff
        </p>
    </Panel>
);

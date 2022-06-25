import { MagnifyingGlass as Mag } from './Icon';

export default {
    title: 'Atom / Icon',
};

const DarkBackround = ({ children }) => (
    <div style={{ backgroundColor: 'black', height: '50px', width: '50px' }}>
        {children}
    </div>
);

export const MagnifyingGlass = () => (
    <Mag style={{ width: '20px', hight: '20px' }} />
);
export const MagnifyingGlassLight = () => (
    <DarkBackround>
        <Mag style={{ width: '20px', hight: '20px' }} light />
    </DarkBackround>
);

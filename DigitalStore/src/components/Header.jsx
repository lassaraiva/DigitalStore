import styled from 'styled-components';
import MobileHeader from './MobileHeader'; 
import DesktopHeader from './DesktopHeader'; 

const ResponsiveHeaderWrapper = styled.div`
    @media (max-width: 820px) {
        display: block;
    }
    @media (min-width: 821px) {
        display: none;
    }
`;

const DesktopHeaderWrapper = styled.div`
    @media (max-width: 820px) {
        display: none;
    }
    @media (min-width: 821px) {
        display: block;
    }
`;

const Header = () => {
    return (
        <>
            <ResponsiveHeaderWrapper>
                <MobileHeader />
            </ResponsiveHeaderWrapper>
            <DesktopHeaderWrapper>
                <DesktopHeader />
            </DesktopHeaderWrapper>
        </>
    );
};

export default Header;
import styled from 'styled-components';
import logoheader from '../assets/img/logo-header.svg';
import logofooter from '../assets/img/logo-footer.svg';

const LogoImage = styled.img`
    @media (max-width: 810px) {
        width: 180px;
        height: 50px;
    }
`;

const Logo = ({ logoName }) => {
    const logoSrc = logoName === 'logoheader' ? logoheader : logofooter;

    return (
        <div>
            <LogoImage src={logoSrc} alt="Logo" />
        </div>
    );
};

export default Logo;
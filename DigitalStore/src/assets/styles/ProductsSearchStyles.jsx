import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TitleWrapper = styled.div`
    display: flex;
    position: absolute;
    align-items: left;
    margin-top: -4.5%;
    margin-left: -51%;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: var(--letter-spacing-1);
    
    @media (max-width: 810px) {
        margin-left: 2%;
        font-size: 0.875rem;
        padding-top: 10px;
    }
    @media (min-width: 1400px) {
        margin-left: -35%;
    }
    @media (min-width: 2000px) {
        margin-left: -27%;
        margin-top: -3%;
    }
    @media (min-width: 3000px) {
        margin-left: -24%; 
        margin-top: -2.5%;
    }
`;

export const ResultsCount = styled.span`
    margin-left: 10px;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: var(--letter-spacing-1);
    color: var(--dark-gray-2);
    
    @media (max-width: 810px) {
        font-size: 0.875rem;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
import styled from 'styled-components';

export const Section = styled.section`
    background-color: var(--back);
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
`;

export const IconsTitle = styled.h1`
    font-size: 1.5rem;
    color: var(--dark-gray-2);
    font-weight: 600;
    margin-bottom: 20px;
    letter-spacing: var(--letter-spacing-1);
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 810px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const IconContainer = styled.div`
    text-align: center;
    margin: 20px;
`;

export const IconCircle = styled.div`
    width: 100px;
    height: 100px;
    background-color: var(--white);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
    background-color: var(--secondary);
  }
`;

export const Icon = styled.img`
    max-width: 70%;
    max-height: 70%;
    width: auto;
    height: auto;
`;

export const IconText = styled.p`
    font-size: 1rem;
    color: var(--dark-gray-2);
    font-weight: 500;
`;
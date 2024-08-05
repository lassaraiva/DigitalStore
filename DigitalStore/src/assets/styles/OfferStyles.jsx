import styled from 'styled-components';

export const Section = styled.section`
    background-color: var(--white);
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: left;
    width: 100%;
    height: var(--offer-height);
    position: relative;

    @media (max-width: 810px) {
        height: 600px;
    }
`;

export const ImgBox = styled.div`
    width: 466px;
    height: 466px;
    background: var(--gradient-color);
    position: absolute;
    margin-left: 10%;
    top: 10%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

      @media (max-width: 810px) {
        position: static;
        width: 250px;
        height: 250px;
        margin-left: 70px;
    }
    @media (min-width: 1400px) {
        left: 10%;
    }
    @media (min-width: 2000px) {
        left: 20%; 
    }
`;

export const Img = styled.img`
    height: auto;
    object-fit: cover;

    @media (max-width: 810px) {
        position: static;
        height: 75%;
        margin-top: 5px;
    }
`;

export const OfferBox = styled.div`
    width: 589px;
    height: 341px;
    position: absolute;
    left: 53%;
    top: 120px;

    @media (max-width: 810px) {
        position: static;
        width: calc(95% - 20px);
        max-width: none; 
        margin-top: 10px;
        margin-left: 30px;
    }
`;

export const OfferP = styled.p`
    font-size: 0.875rem;
    letter-spacing: var(--letter-spacin-1);
    font-weight: 600;
    color: var(--primary);
`;

export const OfferTitle = styled.h1`
    font-size: 3rem;
    color: var(--dark-gray-2);
    margin-bottom: 10px;
    margin-top: 10px;

    @media (max-width: 810px) {
        font-size: 1.75rem;
        font-weight: 600;
        letter-spacing: var(--letter-spacing-2);
    }
`;

export const OfferSubtitle = styled.h2`
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: var(--letter-spacing-1);
    line-height: var(--line-height-1);
    color: var(--dark-gray-2);

    @media (max-width: 810px) {
        font-size: 0.875rem;
        letter-spacing: 0.25px;
    }
`;

export const OfferButton = styled.button`
    width: 200px;
    height: 40px;
    background-color: var(--primary);
    color: var(--light-gray-3);
    font-size: 0.875rem;
    font-family: var(--font-family);
    font-weight: 600;
    letter-spacing: var(--letter-spacing-1);
    border-radius: 0.5rem;
    cursor: pointer;
    border: none;
    margin-top: 15px;

    &:hover {
        background-color: var(--tertiary);
    }
`;
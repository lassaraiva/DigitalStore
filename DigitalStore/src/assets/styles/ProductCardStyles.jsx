import styled from 'styled-components';

export const CardWrapper = styled.div`
    width: 292px;
    height: 439px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 8px;
    position: relative;

    @media (max-width: 810px) {
        width: 185px;
        height: 325px;
  }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 70%;
    margin-bottom: 10px;
    border-radius: 5px;
    background: var(--white);
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
    }
    @media (max-width: 810px) {
        height: 80%;
  }
`;

export const CardTitle = styled.h1`
    position: absolute;
    font-size: 0.875rem;
    color: var(--dark-gray-2);
    letter-spacing: var(--letter-spacing-1);
    font-weight: 600;
    background-color: var(--yellow);
    border-radius: 20px;
    width: 96px;
    height: 32px;
    z-index: 1;
    padding: 5px 15px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 810px) {
    font-size: 0.8rem;
    width: 80px;
    height: 20px;
    }
`;

export const CardName = styled.div`
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: var(--light-gray);
`;

export const CardDescription = styled.div`
    font-size: 1.5rem;
    color: var(--dark-gray-2);
    margin-bottom: 10px;

    @media (max-width: 810px) {
        font-size: 1.25rem;
  }
`;

export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const PriceStyle = styled.div`
    font-size: 1.5rem;
    color: var(--light-gray);
    text-decoration: line-through;

    @media (max-width: 810px) {
        font-size: 1.125rem;
  }
`;

export const DiscountPriceStyle = styled.div`
    font-size: 1.5rem;
    color: var(--dark-gray);
    margin: 0 10px;
    font-weight: bold;

    @media (max-width: 810px) {
        font-size: 1.125rem;
  }
`;
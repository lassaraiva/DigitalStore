import styled from 'styled-components';

export const SectionWrapper = styled.div`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    position: relative;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 8%;
    margin-bottom: 10px;
`;

export const Title = styled.h2`
    color: var(--dark-gray-2);
    font-size: 1.5rem;
    padding-left: 8%;
    font-weight: 600;
    letter-spacing: var(--letter-spacing-1);
    margin: 0;

  @media (max-width: 810px) { 
      font-size: 1.125rem;
  }
  @media (min-width: 1400px) {
        margin-left: 12%; 
    }
  @media (min-width: 2000px) {
        margin-left: 20%; 
    }
  @media (min-width: 3000px) {
        margin-left: 27%; 
    }
`;

export const Link = styled.a`
    color: var(--primary);
    font-size: 1.125rem;
    display: inline-block;
    text-decoration: none;
    padding: 10px 20px;
    margin-right: 6%;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 810px) { 
      font-size: 14px;
      margin-top: -2%;
  }
    @media (min-width: 1400px) {
       margin-right: 20%; 
    }
    @media (min-width: 2000px) {
      margin-right: 27%; 
    }
    @media (min-width: 3000px) {
      margin-right: 35%; 
    }
`;

export const ProductGrid = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
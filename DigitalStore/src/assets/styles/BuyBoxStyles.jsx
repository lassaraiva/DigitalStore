import styled from 'styled-components';

export const BuyBoxWrapper = styled.section`
  margin-left: 63%;
  margin-top: 4%;
  width: 400px;
  height: 770px;
  
  @media (max-width: 810px) {
        position: static;
        width: calc(92% - 20px);
        height: 700px;
        max-width: none; 
        margin-top: 140%;
        margin-left: 30px;
    }
`;

export const H1 = styled.h1`
  font-size: 2rem;
  line-height: var(--line-height-5);
  color: var(--dark-gray);
  font-weight: 700;
  letter-spacing: var(--letter-spacing);
  margin-bottom: 2px;
  @media (max-width: 810px) {
      font-size: 1.5rem;
  }
`;

export const H3 = styled.h3`
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--dark-gray-3);
`;

export const Paragraph2 = styled.p`
  font-size: 0.875rem;
  line-height: var(--line-height);
  font-weight: 500;
  color: var(--dark-gray-2);
`;

export const Paragraph = styled.p`
  font-size: 0.875rem;
  line-height: var(--line-height);
  font-weight: 700;
  letter-spacing: var(--letter-spacing-1);
  color: var(--dark-gray-3);
`;
export const SquareDivs = styled.div`
  margin-top: 20px;
`;

export const SquareList = styled.div`
  display: flex; 
  align-items: center; 
`;

export const Square = styled.div`
  background-color: ${props => (props.selected ? 'var(--primary)' : '#ffffff')};
  color: ${props => (props.selected ? 'var(--white)' : '#000000')};
  border: ${props => (props.selected ? '1px solid var(--primary)' : '1px solid #000000')};
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 10px; 
  cursor: pointer;

  &:hover {
    background-color: var(--primary);
    border: 1px solid var(--primary);
    color: var(--white);
  }
`;

export const RoundDivs = styled.div`
  margin-top: 20px;
`;

export const RoundList = styled.div`
  display: flex; 
  align-items: center; 
`;

export const Round = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: ${props => (props.selected ? '3px solid var(--white)' : '3px solid var(--white)')};
  box-shadow: ${props => (props.selected ? '0 0 0 3px var(--primary)' : 'none')};
  margin-right: 10px;
  cursor: pointer;
  background-color: ${props => props.color || 'transparent'};

  &:hover {
    border: 3px solid var(--white);
    box-shadow: 0 0 0 3px var(--primary);
  }
`;

export const BuyButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: var(--yellow-btn);
  color: var(--light-gray-3);
  font-size: 1rem;
  font-family: var(--font-family);
  font-weight: 600;
  letter-spacing: var(--letter-spacing-1);
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
  margin-top: 40px;
  &:hover{
    background-color: #cf931b;
  }
  @media (max-width: 810px) {
    width: 335px;
    }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--light-gray);
  font-size: 0.875rem;
  font-weight: 500;
  gap: 2px;
  margin-bottom: 20px; 
`;

export const StarRatingBox = styled.div`
  background-color: #F6AA1C; 
  color: var(--white);
  font-size: 0.875rem;
  font-weight: 800;
  margin-left: 8px;
  margin-right: 8px;
  padding: 2px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;
export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--dark-gray);
  font-size: 1rem;
  font-weight: 500;
  gap: 15px;
  margin-bottom: 20px;

  .price-discount span {
    color: var(--dark-gray);
    font-size: 2rem;
    font-weight: 600;
  }

  .price-normal span {
    text-decoration: line-through;
    color: var(--light-gray-2);
    margin-bottom: 20px;
  }
`;